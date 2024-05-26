import mongoose from "mongoose";
/* import axios from 'axios' */

const menuItemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    requried: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

export const MenuItem = mongoose.model("restaurant-menu", menuItemSchema);

/* const menuItems = [
  {
    title: "Pizza",
    description: "Delicious pizza with various toppings",
    category: "Main Course",
    price: 12.99,
  },
  {
    title: "Pasta",
    description: "Classic pasta dish with marinara sauce",
    category: "Main Course",
    price: 8.99,
  },
  {
    title: "Caesar Salad",
    description: "Fresh salad with Caesar dressing",
    category: "Appetizer",
    price: 5.99,
  },
  {
    title: "Tiramisu",
    description: "Traditional Italian dessert with coffee flavor",
    category: "Dessert",
    price: 6.5,
  },
  {
    title: "Lemonade",
    description: "Refreshing lemonade drink",
    category: "Beverage",
    price: 2.5,
  },
];



async function insertData(){

  try{
    const data = await axios.get("http://localhost:3000/menu");

    for (let i = 0; i < menuItems.length; i++){
      const info = MenuItem.find
    }
  }catch(error){
    console.log(error.message)
  }
}

insertData();

MenuItem.insertMany(menuItems)
  .then((docs) => console.log(`${docs.length} documents inserted`))
  .catch((err) => console.error("Error inserting documents:", err)) */



