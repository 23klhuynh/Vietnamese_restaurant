import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onNavigate: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, onNavigate }) => {
  const navigate = useNavigate();

  return (
    <ul className={`navbar__sidebar ${isOpen ? "open" : ""}`}>
      {["home", "menu", "contact", "about"].map((item) => (
        <li className="navbar__sidebar-item cursor-pointer" key={item}>
          <button onClick={() => onNavigate(item)}>{item.toUpperCase()}</button>
        </li>
      ))}
      {localStorage.getItem("access_token") ? (
        <li className="navbar__sidebar-item cursor-pointer border border-white margin">
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
        <li className="navbar__sidebar-item cursor-pointer border border-white margin">
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
    </ul>
  );
};

export default Sidebar;
