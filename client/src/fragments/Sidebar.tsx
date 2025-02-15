import { useNavigate } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  onNavigate: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onNavigate }) => {
  const navigate = useNavigate()

  return (
    <ul className={`navbar__sidebar ${open ? "open": ""}`}>
      {["home", "menu", "contact", "about"].map((item) => (
        <li className="navbar__sidebar-item cursor-pointer" key={item}>
          <button onClick={() => onNavigate(item)}>{item.toUpperCase()}</button>
        </li>
      ))}
      <button className="navbar__sidebar-item cursor-pointer border border-white margin" onClick={()=>navigate("/login")}>LOGIN</button>
    </ul>
  );
};

export default Sidebar;