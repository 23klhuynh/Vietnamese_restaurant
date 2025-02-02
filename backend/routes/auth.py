from flask import Blueprint, jsonify, request
from app import supabase
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
    password = generate_password_hash(data.get("password"))

    if not username or not email or not password:
        return jsonify({"error": "Missing input!"}), 400
    
    existing_user = supabase.table("Users").select("id").eq("username", username).execute()

    if existing_user.data:
       return jsonify({"error": "Username is already exist!"}), 409
    
    new_user = {
        "username": username,
        "email": email,
        "password": password
    }

    response = supabase.table("Users").insert(new_user).execute()


    return jsonify({"message": "New user created successfully", "complete": response.data}), 201

    """ data = request.get_json()
    user = User.get_user_by_username(username=data.get("username"))
    if user is not None:
        return jsonify({"error": "Username is already exist!"}), 409
    new_user = User(
        username = data.get("username"),
        email = data.get("email")
    )
    new_user.set_password(password=data.get("password"))
    new_user.save()
    return jsonify({"message": "New user created successfully"}), 201 """
    

@auth_bp.post("/login")
def login_user():

    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Missing input!"}), 400

    response = supabase.table("Users").select("username, password").eq("username", username).execute()

    if not response.data:
        return jsonify({"error": "Invalid username or password!"}), 400
    
    user = response.data[0]
    stored_hashed_password = user["password"]

    if not check_password_hash(stored_hashed_password, password):
        return jsonify({"error": "Invalid username or password!"}), 400
    
    access_token = create_access_token(identity=user["username"])
    refresh_token = create_refresh_token(identity=user["username"])

    return jsonify({
            "message": "Logged in successfully",
            "token_pair": {
                "access": access_token,
                "refresh": refresh_token
            }
        }), 200

    """ data = request.get_json()
    user = User.get_user_by_username(username=data.get("username"))
    if user and user.check_password(password=data.get("password")):
        access_token = create_access_token(identity=user.username)
        refresh_token = create_refresh_token(identity=user.username)
        return jsonify({
            "message": "Logged in",
            "token_pair": {
                "access": access_token,
                "refresh": refresh_token
            }
        }), 200
    #call the clean up function for the expire token in the TokenBlocklist
    return jsonify({"error": "username or password is invalid!"}), 400 """


@auth_bp.get("/get_user")
@jwt_required
def get_user():

    user_info = get_jwt_identity()

    return jsonify({"message": "User details fetched successfully", 
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
        return jsonify({"error": "Failed to block token"}), 500

    return jsonify({"message": f"{token_type} token revoked successfully"}), 200

