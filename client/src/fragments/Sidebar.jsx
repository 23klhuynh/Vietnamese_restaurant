import React from "react";

function Sidebar({open, props}) {
    if (!open) return null;
  return (
    <ul className="navbar__sidebar">
      {["home", "menu", "contact", "about"].map((item) => (
        <li className="navbar__sidebar-item cursor-pointer" key={item}>
          <button onClick={() => props(item)}>{item.toUpperCase()}</button>
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;
