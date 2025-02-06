from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt
from config import supabase

menu_bp = Blueprint("menu", __name__)

# THIS IS THE ONLY ROUTE EVERYONE IS GETTING
@menu_bp.get("/all_menu")
def get_all_menu_items():
    try: 
        response = supabase.table("Menu_Item").select("*").execute()

        sort_by_category = {}

        for item in response.data:
            category = item["category"]
            if category not in sort_by_category:
                sort_by_category[category] = []
            else:
                sort_by_category[category].append(item)
        
        return jsonify({"data" : sort_by_category}), 200

    except KeyError as e:
        return jsonify({"error": f"Missing field: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": "Something went wrong", "details": str(e)}), 500


# get spaccific item to add to cart
@menu_bp.get("/item/<int:id>")
@jwt_required()
def get_item(id):
    try:
        response = supabase.table("Menu_Item").select("*").eq("id", id).execute()

        if not response.data:
            return jsonify({"error": "Item not found"}), 404
        
        #get the first instance of the item
        item = response.data[0]

        return jsonify({"item": {
            "id": item["id"],
            "name": item["name"],
            "description": item["description"],
            "price": item["price"],
            "category": item["category"],
        }}), 200
    
    except Exception as e:
        return jsonify({"error": "Something went wrong", "details": str(e)}), 500

    
# ONLY ADMIN CAN UTILIZE THESE ENDPOINTS 

# Adding a new menu item
@menu_bp.post("/item")
@jwt_required()
def create_item():
    try:
        claims = get_jwt()

        if claims.get("is_staff"):
            data = request.get_json()

            if not data or not all(key in data for key in ["name", "description", "price", "category"]):
                return jsonify({"error": "Missing required fields!"}), 400

            menu_item = {
                "name": data["name"],
                "description": data["description"],
                "price": data["price"],
                "category": data["category"]
            }

            supabase.table("Menu_Item").insert(menu_item).execute()

            return jsonify({"message": "New menu item added successfully!"}), 201
        
        return jsonify({"error": "Access forbidden: Only staff can add menu items!"}), 403

    except Exception as e:
        return jsonify({"error": "Something went wrong", "details": str(e)}), 500


# Update an existing menu item
@menu_bp.put("/item/<int:id>")
@jwt_required()
def update_item(id):
    try:

        claims = get_jwt()

        if claims.get("is_staff"):
            data = request.get_json()
            response = supabase.table("Menu_Item").select("*").eq("id", id).execute()

            if not data:
                return jsonify({"error": "No data provided!"}), 400
            
            if not response.data:
                return jsonify({"error": "Item not found!"}), 404
            
            item = response.data[0]

            update_item = {
                "name": data.get("name", item["name"]),
                "description": data.get("description", item["description"]),
                "price": data.get("price", item["price"]),
                "category": data.get("category", item["category"]),
            }

            update_response = supabase.table("Menu_Item").update(update_item).eq("id", id).execute()

            return jsonify({"message": "Item update successfully!", "item" : update_response}), 200
        
        return jsonify({"error": "Access forbidden: Only staff can add menu items!"}), 403
    
    except Exception as e:
        return jsonify({"error": "Something went wrong", "details": str(e)}), 500


# Delete a menu item by name
@menu_bp.delete("/item/<int:id>")
@jwt_required()
def delete_item(id):
    try:

        claims = get_jwt()

        if claims.get("is_staff"):
            response = supabase.table("Menu_Item").select("*").eq("id", id).execute()

            if not response.data:
                return jsonify({"error": "Item not found!"}), 404

            supabase.table("Menu_Item").delete().eq("id", id).execute()
            
            return jsonify({"message": "Item deleted successfully!"}), 200

        return jsonify({"error": "Access forbidden: Only staff can add menu items!"}), 403

    except Exception as e:
        return jsonify({"error": "Something went wrong", "details": str(e)}), 500





    
