import { useNavigate } from "react-router-dom";

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
              src="https://www.akfood.vn/wp-content/uploads/2024/07/image11.jpg"
              alt=""
              loading="lazy"
            />
            <div className="popular__card-content">
              <h3>Special Phở</h3>
              <small>
                A rich beef broth with rare steak, brisket, tendon, tripe, and
                meatballs, topped with fresh herbs and traditional garnishes.
              </small>
              <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white">
                Order Now
              </button>
            </div>
          </div>
          <div className="popular__card">
            <img
              src="https://www.oliveandmango.com/images/uploads/2021_12_26_beef_pho_noodle_soup_recipe_1.jpg"
              alt=""
              loading="lazy"
            />
            <div className="popular__card-content">
              <h3>Beef Phở</h3>
              <small>
                The classic and most popular version, made with a rich,
                slow-simmered beef bone broth, rice noodles, and cuts like
                brisket, flank, or rare beef slices.
              </small>
              <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white">
                Order Now
              </button>
            </div>
          </div>
          <div className="popular__card">
            <img
              src="https://cdn.shortpixel.ai/spai2/q_glossy+ret_img+to_auto/www.hungryhuy.com/wp-content/uploads/bun-bo-hue-bowl.jpg"
              alt=""
              loading="lazy"
            />
            <div className="popular__card-content">
              <h3>Bún bò Huế</h3>
              <small>
                a spicy Vietnamese beef noodle soup with bold lemongrass flavor,
                thick rice noodles, and tender beef slices, originating from the
                city of Huế.
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
            onClick={() => {
              navigate("/menu");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            View Full Menu →
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularItems;
