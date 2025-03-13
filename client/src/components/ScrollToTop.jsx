// ScrollToTop.jsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => { 
    if (!location.hash) {
      window.scrollTo(0, 0); 
    }
  }, [location]);

  return null;
};

export default ScrollToTop;
