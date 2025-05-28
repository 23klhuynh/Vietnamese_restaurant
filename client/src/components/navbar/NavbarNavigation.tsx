interface NavbarNavigationProps {
  onNavigate: (item: string) => void;
}

const NavbarNavigation: React.FC<NavbarNavigationProps> = ({ onNavigate }) => {
  return (
    <ul className="navbar__items">
      {["home", "menu", "contact", "about"].map((item) => (
        <li className="navbar__item" key={item} onClick={() => onNavigate(item)}>
          <button>
            {item[0].toUpperCase()+item.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavbarNavigation;