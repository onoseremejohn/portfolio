import { useGlobalContext } from "../Context";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const RightSide = () => {
  const { toggleNav, isNavOpen } = useGlobalContext();
  return (
    <div className='right-side'>
      <button
        className={`nav-toggle ${isNavOpen ? "open" : ""}`}
        aria-label='toggle navigation'
        onClick={toggleNav}
      >
        <span className='hamburger'></span>
      </button>
      <div>
        <a
          href='https://www.linkedin.com/in/onoseremejohn/'
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
    </div>
  );
};

export default RightSide;
