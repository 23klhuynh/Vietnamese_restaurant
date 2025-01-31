from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt
from models.menu_item import MenuItem

menu_bp = Blueprint("menu", __name__)

# THIS IS THE ONLY ROUTE EVERYONE IS GETTING
@menu_bp.get("/all")
def get_all_menu_items():
    # split by different category
    categories = MenuItem.query.with_entities(MenuItem.category).distinct().all() 
    menu_by_category = {}

    for category, in categories:
        # access all the items from the same category
        items_in_category = MenuItem.query.filter_by(category=category).all() 
        # get the items in a hashmap with spacific category 
        menu_by_category[category] = [item.to_dict() for item in items_in_category] 
    
    return jsonify({"message": "Successfully fetched all menu items", "data": menu_by_category}), 200
    

# get spaccific item to add to cart
@menu_bp.get("/item/<int:id>")
@jwt_required()
def get_item(id):
    data = MenuItem.query.get(id)

    if not data:
        return jsonify({"error": "Item not found"}), 404

    return ({"item": 
            {
            "id": data.id,
            "name": data.name,
            "description": data.description,
            "price": data.price,
            "category": data.category
            }}), 200
    

# ONLY ADMIN CAN UTILIZE THESE ENDPOINTS

# Adding a new menu item
@menu_bp.post("/item")
@jwt_required()
def create_item():
    claims = get_jwt() 

    if claims.get("is_staff") == True:
        data = request.get_json()

        if not all(key in data for key in ["name", "description", "price", "category"]):
            return jsonify({"error": "Missing required fields"}), 400
        
        new_item = MenuItem(
            name = data.get("name"),
            description = data.get("description"),
            price = data.get("price"),
            category = data.get("category")
        )

        new_item.save()

        return jsonify({"messege": "New menu item added successfully"}), 201
    
    return jsonify({"error": "Access forbidden: Only staff can add menu items"}), 403


# Update an existing menu item
@menu_bp.put("/item/<int:id>")
@jwt_required()
def update_item(id):
    claims = get_jwt() 

    if claims.get("is_staff") == True:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        item = MenuItem.query.get(id)

        if not item:
            return jsonify({"error": "Item not found"}), 404
        
        item.name = data.get("name", item.name)
        item.description = data.get("description", item.description)
        item.price = data.get("price", item.price)
        item.category = data.get("category", item.category)

        item.save()

        return jsonify({"message": "Update successful", "item": {
            "id": item.id,
            "name": item.name,
            "description": item.description,
            "price": item.price,
            "category": item.category
        }}), 200
    
    return jsonify({"error": "Access forbidden: Only staff can update menu items"}), 403


# Delete a menu item by name
@menu_bp.delete("/item/<int:id>")
@jwt_required()
def delete_item(id):
    claims = get_jwt() 

    if claims.get("is_staff") == True:
        item = MenuItem.query.get(id)

        if not item:
            return jsonify({"error": "Item not found"}), 404

        item.delete()
        
        return jsonify({"messege": "Item delete successfully"}), 200
    
    return jsonify({"error": "Access forbidden: Only staff can delete menu items"}), 403



    
