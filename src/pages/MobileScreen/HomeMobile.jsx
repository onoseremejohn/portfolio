import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import onos from "../../assets/my_pic.jpg";
import "../../css/mobile.css";
import ImageLoader from "../../components/ImageLoader";
import TypeWriter from "../../components/TypeWriter";
const HomeMobile = () => {
  return (
    <section className="home">
      <div>
        <div style={{ padding: "3em 0", height: "2em", position: "relative" }}>
          <h3 className="typewriter">
            <TypeWriter str1="I am Onos" str2="love to code" />
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
            <a href="https://linkedin.com/in/onoseremejohn" target="_blank">
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
