import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useGlobalContext } from "../Context";

const Header = () => {
  const { toggleNav, closeNav, isNavOpen } = useGlobalContext();

  return (
    <header>
      <Link to="/" onClick={closeNav}>
        <img id="logo" src={logo} alt="logo" />
      </Link>

      <button
        type="button"
        className={`nav-toggle ${isNavOpen ? "open" : ""}`}
        aria-label="toggle navigation"
        onClick={toggleNav}
        title="Toggle Navigation"
      >
        <span className="hamburger"></span>
      </button>
    </header>
  );
};

export default Header;
