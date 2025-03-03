import os
from flask import Blueprint, jsonify, request, make_response
from config import supabase
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (create_access_token, 
                                create_refresh_token, 
                                jwt_required, 
                                get_jwt, 
                                current_user, 
                                get_jwt_identity)

auth_bp = Blueprint("auth", __name__)

@auth_bp.post("/register")
def register_user():

    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"error": "Missing input!"}), 400

    password_hash = generate_password_hash(password)

    existing_user = supabase.table("Users").select("id").eq("username", username).execute()
    if existing_user.data:
        return jsonify({"error": "Username already exists!"}), 409

    new_user = {
        "username": username,
        "email": email,
        "password": password_hash,
        "is_staff": False
    }

    response = supabase.table("Users").insert(new_user).execute()

    return jsonify({"message": "New user created successfully!"}), 200
    

@auth_bp.post("/login")
def login_user():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Missing input!"}), 400

    response = supabase.table("Users").select("username, password").eq("username", username).execute()
    if not response.data:
        return jsonify({"error": "Invalid username or password!"}), 401

    user = response.data[0]
    if not check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid username or password!"}), 401

    access_token = create_access_token(identity=username)
    refresh_token = create_refresh_token(identity=username)

    """ response = make_response(jsonify({"message": "Logged in successfully"}))
    response.set_cookie("access_token", access_token, httponly=True, secure=True, samesite="None", max_age=3600) """
    """ return response, 200 """
    """ return jsonify({
            "message": "Logged in successfully!",
            "token_pair": {
                "access": access_token,
                "refresh": refresh_token
            }
        }), 200 """

    response = make_response()
    response.set_cookie(
        "access_token",
        value=access_token,
        max_age=60,  
        expires=None,
        path="/",
        secure=True,
        httponly=True,
        samesite="None"
    )
    response.set_cookie(
        "refresh_token",
        value=refresh_token,
        max_age=60, 
        expires=None,
        path="/",
        secure=True,
        httponly=True,
        samesite="None"
    )
    
    return response, 200


@auth_bp.get("/get_user")
@jwt_required()
def get_user():

    user_info = get_jwt_identity()

    return jsonify({"message": "User details fetched successfully!", 
                    "user_details":{
                    "username": user_info["username"], 
                    "email": user_info["email"]
                    }}), 200


@auth_bp.get("/refresh")
@jwt_required(refresh=True)
def refresh_access():
    identity = get_jwt_identity()
    new_access_token = create_access_token(identity=identity)
    return jsonify({"new_access_token": new_access_token}), 200


@auth_bp.get("/logout")
def logout_user():
    jwt = get_jwt() #retrieves the current JWT token
    jti = jwt["jti"] #every token has a jti
    token_type = jwt.get("type", "access")
    
    response = supabase.table("Token_Blocklist").insert({"jti": jti, "token_type":token_type}).execute()

    if response.status_code != 201:
        return jsonify({"error": "Failed to block token!"}), 500
    
    response = make_response(jsonify({"message": "Logged out successfully!"}))
    response.set_cookie("access_token", "", expires=0, httponly=True, secure=True, samesite="Strict")
    return response, 200



# CREATE ADMIN ONLY (THERE SHOULD ONLY BE ONE ADMIN)
@auth_bp.post("/create_admin")
def create_admin_user():
    data = request.get_json()

    admin_username = os.environ.get("ADMIN")
    admin_email = os.environ.get("EMAIL")
    admin_password = os.environ.get("PASSWORD")

    if data.get("username") == admin_username and data.get("email") == admin_email and data.get("password") == admin_password:

        response = supabase.table("Users").select("id").eq("username", admin_username).execute()
        if response.data:
            return jsonify({"message": "Admin already exists!"}), 400
        
        hashed_password = generate_password_hash(admin_password)

        admin_data = {
            "username": admin_username,
            "email": admin_email,
            "password": hashed_password,
            "is_staff": True
        }

        supabase.table("Users").insert(admin_data).execute()

        return jsonify({"message": "ADMIN CREATED SUCCESSFULLY!"}), 200
    
    return jsonify({"error": "CANNOT CREATE ADMIN!"}), 403
