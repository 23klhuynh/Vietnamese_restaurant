import { useNavigate } from "react-router-dom";
import { useState } from "react";

type TargetId = "home" | "contact" | "menu" | "about"; 

const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();

const routeToTargetIdMap: { [key in TargetId]: string } = {
  home: "/",
  contact: "/",
  menu: "/menu",
  about: "/",
};

const handleNavigation = (targetId: TargetId) => {
  const path = routeToTargetIdMap[targetId];
  navigate(path, { state: { targetId } });
};

const handleAllClicks = (targetId: TargetId) => {
  handleNavigation(targetId);
  setIsOpen(!isOpen);
};
