import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // no header on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <header className="site-header">
      <nav className="nav-buttons">
        <Link
          to="/"
          className={`nav-button ${location.pathname === "/" ? "active" : ""}`}
          onClick={scrollToTop}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`nav-button ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/work"
          className={`nav-button ${
            location.pathname === "/work" ? "active" : ""
          }`}
        >
          Work
        </Link>
        <Link
          to="/art"
          className={`nav-button ${
            location.pathname === "/art" ? "active" : ""
          }`}
        >
          Art
        </Link>
      </nav>
    </header>
  );
};

export default Header;
