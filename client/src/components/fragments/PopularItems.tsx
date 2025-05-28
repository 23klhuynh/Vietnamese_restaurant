import { useNavigate } from "react-router-dom";

/* need work */
function PopularItems() {
  const navigate = useNavigate();
  return (
    <div className="popular">
      <div className="popular__wrapper">
        <h2 className="text-center">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
            Popular
          </span>{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Dishes
          </span>
        </h2>
        <p className="text-center">
          Explore our most loved pho bowls, meticulously crafted with authentic
          flavors and fresh ingredients.
        </p>

        <div className="popular__cards">
          <div className="popular__card">
            <img
              src="https://media.istockphoto.com/id/1462352351/photo/pho.jpg?s=612x612&w=0&k=20&c=TaNeUcQyazuboL2g6sC_EMzuF9ZvW9xPvDL6FZgWKVM="
              alt=""
            />
            <div className="popular__card-content">
              <h3>Special Pho</h3>
              <small>
                A rich beef broth with rare steak, brisket, tendon, tripe, and meatballs, topped with fresh herbs and traditional garnishes.
              </small>
              <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white">
                Order Now
              </button>
            </div>
          </div>
          <div className="popular__card test">
            <img
              src="https://media.istockphoto.com/id/1462352351/photo/pho.jpg?s=612x612&w=0&k=20&c=TaNeUcQyazuboL2g6sC_EMzuF9ZvW9xPvDL6FZgWKVM="
              alt=""
            />
            <div className="popular__card-content">
              <h3>Special Pho</h3>
              <small>
                A rich beef broth with rare steak, brisket, tendon, tripe, and meatballs, topped with fresh herbs and traditional garnishes.
              </small>
              <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white">
                Order Now
              </button>
            </div>
          </div>
          <div className="popular__card">
            <img
              src="https://media.istockphoto.com/id/1462352351/photo/pho.jpg?s=612x612&w=0&k=20&c=TaNeUcQyazuboL2g6sC_EMzuF9ZvW9xPvDL6FZgWKVM="
              alt=""
            />
            <div className="popular__card-content">
              <h3>Special Pho</h3>
              <small>
                A rich beef broth with rare steak, brisket, tendon, tripe, and meatballs, topped with fresh herbs and traditional garnishes.
              </small>
              <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="popular__footer">
          <button
            className="px-3 py-2 my-3 border border-black rounded"
            onClick={() => navigate("/menu")}
          >
            View Full Menu →
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularItems;
