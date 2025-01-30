from flask import Blueprint, jsonify, request
from models.user import User, TokenBlocklist
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

    user = User.get_user_by_username(username=data.get("username"))

    if user is not None:
        return jsonify({"message": "Username is already exist!"}), 409
    
    new_user = User(
        username=data.get("username"),
        email = data.get("email")
    )

    new_user.set_password(password=data.get("password"))

    new_user.save()

    return jsonify({"message": "New user created successfully"}), 201
    

@auth_bp.post("/login")
def login_user():

    data = request.get_json()
    user = User.get_user_by_username(username=data.get("username"))
    password = user.check_password(password=data.get("password"))

    if user and password:
        
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

    return jsonify({"message": "username or password is invalid!"}), 400


@auth_bp.get("/get_user")
@jwt_required
def get_user():
    return jsonify({"message": "Message", "user_detail": {"username": current_user.username, "email": current_user.email}}), 200


@auth_bp.get("/refresh")
@jwt_required(refresh=True)
def refresh_access():
    identity = get_jwt_identity()
    new_access_token = create_access_token(identity=identity)
    return jsonify({"new_access_token": new_access_token})


@auth_bp.get("/logout")
def logout_user():
    jwt = get_jwt() #retrieves the current JWT token
    jti = jwt["jti"] #every token has a jti
    token_type = jwt["type"]
    token_b = TokenBlocklist(jti=jti)
    token_b.save()

    return jsonify({"message": f"{token_type} token revoked successfully"}), 200

