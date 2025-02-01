interface SidebarProps {
  open: boolean;
  onNavigate: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onNavigate }) => {
  if (!open) return null;

  return (
    <ul className="navbar__sidebar">
      {["home", "menu", "contact", "about"].map((item) => (
        <li className="navbar__sidebar-item cursor-pointer" key={item}>
          <button onClick={() => onNavigate(item)}>{item.toUpperCase()}</button>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;