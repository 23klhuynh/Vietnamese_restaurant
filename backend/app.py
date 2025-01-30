from flask import Flask, jsonify
from flask_migrate import Migrate
from extensions import db, jwt
from routes.auth import auth_bp
from admin import user_bp
from models.user import User, TokenBlocklist


def create_app():
    app = Flask(__name__)

    app.config.from_prefixed_env()

    db.init_app(app)
    jwt.init_app(app)

    migrate = Migrate(app, db)
    
    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(user_bp, url_prefix="/users")

    @jwt.user_lookup_loader
    def user_lookup_callback(_jwt_header, jwt_data):
        identity = jwt_data["sub"]
        return User.query.filter_by(username=identity).one_or_none()

    @jwt.additional_claims_loader
    def make_additional_claims(identity):
        if identity == "dsugh9euhg":
            return {"is_staff": True}
        return {"is_staff": False}

    @jwt.expired_token_loader
    def expired_token_callback(jwt_header, jwt_data):
        return jsonify({"message": "Token has expired", "error": "Token_expired"}), 401
    
    @jwt.invalid_token_loader
    def invalid_token_callback(error):
        return jsonify({"messgae": "Signiture varification failed", "error": "Invalid"}), 401

    @jwt.unauthorized_loader
    def missing_token_callback(error):
        return jsonify({"message": "Request doesn't contain valid token", "error": "authorization_header"}), 401

    @jwt.token_in_blocklist_loader
    def token_in_blocklist_call(jwt_header, jwt_data):
        jti = jwt_data("jti")
        token = db.session.query(TokenBlocklist).filter(TokenBlocklist.jti == jti).scalar()
        return token is not None
        # check to make sure the revoke token is not being use to log in again

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)

