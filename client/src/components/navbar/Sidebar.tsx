import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CiShoppingCart } from "react-icons/ci";


interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onNavigate: (item: string) => void;
  openCart: boolean;
  setOpenCart: (openCart: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
  onNavigate,
  openCart,
  setOpenCart,
}) => {
  const navigate = useNavigate();

  const handleOpenCart = () => {
    setIsOpen(!isOpen);
    setOpenCart(!openCart);
  };

  return (
    <ul className={`navbar__sidebar ${isOpen ? "open" : ""}`}>
      {["home", "menu", "services", /* "contact", "about" */ "order"].map(
        (item) => (
          <li
            className="navbar__sidebar-item cursor-pointer py-[10px] px-[40px]"
            key={item}
          >
            <button onClick={() => onNavigate(item)}>
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          </li>
        )
      )}
      {localStorage.getItem("access_token") ? (
        <li className="navbar__sidebar-item cursor-pointer border border-white margin rounded-xl py-[10px]">
          <button
            onClick={() => {
              navigate("/");
              toast.success("Sign out successful!");
              localStorage.removeItem("access_token");
              setIsOpen(false);
            }}
          >
            Sign Out
          </button>
        </li>
      ) : (
        <li className="navbar__sidebar-item special cursor-pointer border border-white margin rounded-xl py-[10px]">
          <button
            onClick={() => {
              navigate("/login");
              setIsOpen(false);
            }}
          >
            Sign In
          </button>
        </li>
      )}
      <li
        className="navbar__sidebar-item special cursor-pointer border border-orange-500 margin rounded-xl bg-orange-400 py-[10px]"
        onClick={handleOpenCart}
      >
        <CiShoppingCart className="text-2xl" />
        Cart
      </li>
    </ul>
  );
};

export default Sidebar;
