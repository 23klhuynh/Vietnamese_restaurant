interface NavbarNavigationProps {
  onNavigate: (item: string) => void;
}

const NavbarNavigation: React.FC<NavbarNavigationProps> = ({ onNavigate }) => {
  return (
    <ul className="navbar__items">
      {["home", "menu", "contact", "about"].map((item) => (
        <li className="navbar__item cursor-pointer" key={item}>
          <button onClick={() => onNavigate(item)}>
            {item.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavbarNavigation;