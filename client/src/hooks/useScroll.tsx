import { useState, useEffect } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 0;
      setScroll(isScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
};

export default useScroll;