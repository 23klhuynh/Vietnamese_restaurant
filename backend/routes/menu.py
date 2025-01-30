from flask import Blueprint, jsonify, request
from models.menu_item import MenuItem

menu_bp = Blueprint("menu", __name__)

#THIS IS THE ONLY ROUTE EVERYONE IS GETTING
@menu_bp.get("/all")
def get_all_menu_items():
    pass