import { useLocation } from "react-router-dom";
import {useEffect} from "react";

function SmoothScroll() {
  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    const scrollSmoothly = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    const timeoutId = setTimeout(() => {
      scrollSmoothly();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [targetId]);
}

export default SmoothScroll;
