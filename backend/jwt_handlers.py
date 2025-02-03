import os
from flask import jsonify
from extensions import jwt
from config import supabase

admin = os.environ.get("ADMIN")

@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    response =  supabase.table("Users").select("*").eq("username", identity).execute()
    return response.data[0] if response else None

@jwt.additional_claims_loader
def make_additional_claims(identity):
    response = supabase.table("Users").select("is_staff").eq("username", identity).execute()
    if response.data and response.data[0].get("is_staff"):
        return {"is_staff": True}
    return {"is_staff": False}

@jwt.expired_token_loader
def expired_token_callback(jwt_header, jwt_data):
    return jsonify({"message": "Token has expired", "error": "Token_expired"}), 401

@jwt.invalid_token_loader
def invalid_token_callback(error):
    return jsonify({"message": "Signiture varification failed", "error": "Invalid"}), 401

@jwt.unauthorized_loader
def missing_token_callback(error):
    return jsonify({"message": "Request doesn't contain valid token", "error": "authorization_header"}), 401

@jwt.token_in_blocklist_loader
def token_in_blocklist_call(jwt_header, jwt_data):
    jti = jwt_data.get("jti")

    if not jti:
        return False
    
    response = supabase.table("Token_Blocklist").select("*").eq("jti", jti).execute()

    return True if response.data else False
    