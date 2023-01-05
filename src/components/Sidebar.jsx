import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useGlobalContext } from "../Context";
const Sidebar = () => {
  const { isNavOpen, closeNav } = useGlobalContext();
const {
  windowDimensions: { width },
} = useGlobalContext();
  return (
    <nav className={isNavOpen ? `nav open` : "nav"}>
      <ul>
        <li>
          <Link to='/' onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link to='profile' onClick={closeNav}>
            profile
          </Link>
        </li>
        <li>
          <Link to='portfolio' onClick={closeNav}>
            portfolio
          </Link>
        </li>
        <li>
          <Link to='contact' onClick={closeNav}>
            contact
          </Link>
        </li>
      </ul>

      {width <= 767 && (
        <div>
          <a
            href='https://www.linkedin.com/in/onosereme-emuemhonjie-5a5454161/'
            target='_blank'
          >
            <button>
              <FaLinkedin />
            </button>
          </a>
          <a href='https://twitter.com/onoseremejohn' target='_blank'>
            <button>
              <FaTwitter />
            </button>
          </a>
          <a href='https://github.com/onoseremejohn' target='_blank'>
            <button>
              <FaGithub />
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
