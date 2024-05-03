import { useGlobalContext } from "../../Context";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import onos from "../../assets/my_pic.jpg";
import "../../css/mobile.css";
import ImageLoader from "../../components/ImageLoader";
const HomeMobile = () => {
  const { Type } = useGlobalContext();
  return (
    <section className="home">
      <div>
        <div style={{ padding: "3em 0", height: "2em", position: "relative" }}>
          <h3 className="typewriter">
            <Type />
          </h3>
        </div>
        <div className="clippath">
          <ImageLoader src={onos} alt="Onosereme" />
        </div>
        <div className="name">
          <h2>Onosereme Emuemhonjie</h2>
          <p>Front End Developer</p>
          <Link to="profile">
            <button className="home-btn">view my profile</button>
          </Link>
          <div>
            <a
              href="https://www.linkedin.com/in/onosereme-emuemhonjie-5a5454161/"
              target="_blank"
            >
              <button>
                <FaLinkedin />
              </button>
            </a>
            <a href="https://twitter.com/onoseremejohn" target="_blank">
              <button>
                <FaTwitter />
              </button>
            </a>
            <a href="https://github.com/onoseremejohn" target="_blank">
              <button>
                <FaGithub />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMobile;
