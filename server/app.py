from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from extensions import jwt
from routes import auth_bp, menu_bp
from jwt_handlers import *

load_dotenv()

def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True, resources={r"/*": {"origins": ["http://localhost:5173", "https://pho-viet.vercel.app"]}})

    app.config.from_prefixed_env()

    jwt.init_app(app)

    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(menu_bp, url_prefix="/menu")
    
    return app

app = create_app()

if __name__ == "__main__":
    app.run()

