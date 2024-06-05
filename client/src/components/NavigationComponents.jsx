import { useNavigate } from "react-router-dom";


const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();

const routeToTargetIdMap = {
  home: "/",
  contact: "/",
  menu: "/menu",
  about: "/",
};

const handleNavigation = (targetId) => {
  const path = routeToTargetIdMap[targetId];
  navigate(path, { state: { targetId } });
};

const handleAllClicks = (targetId) => {
  handleNavigation(targetId);
  setIsOpen(!isOpen);
};
