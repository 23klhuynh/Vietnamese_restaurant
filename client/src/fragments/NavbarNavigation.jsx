function NavbarNavigation({props}) {
  return (
    <ul className="navbar__items">
      {["home", "menu", "contact", "about"].map((item) => (
        <li className="navbar__item cursor-pointer" key={item}>
          <button onClick={() => props(item)}>
            {item.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NavbarNavigation;
