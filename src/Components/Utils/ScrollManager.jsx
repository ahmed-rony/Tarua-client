import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const { pathname } = useLocation();

  const scrollPositions = {};

  useEffect(() => {
    const saveScrollPosition = () => {
      scrollPositions[pathname] = window.scrollY;
    };

    // Save scroll position before navigation
    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      // Restore scroll position for home page
      window.scrollTo(0, scrollPositions[pathname] || 0);
    } else {
      // Scroll to top for other pages
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollManager;
