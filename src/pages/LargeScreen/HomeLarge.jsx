import { Link } from "react-router-dom";
import onos from "../../assets/my_pic.jpg";
import TypeWriter from "../../components/TypeWriter";
const HomeLarge = () => {
  return (
    <div className="homelarge">
      <div>
        <img className="mainimage" src={onos} alt="onos" />
        <article>
          <h3>
            Two things: <TypeWriter str1="I am Onos" str2="love to code" />
          </h3>
          <h2>Onosereme Emuemhonjie</h2>
          <p>Front End Developer</p>
          <Link to="profile">
            <button className="home-btn">view my profile</button>
          </Link>
        </article>
      </div>
      <button className="home-btn resume">
        <a href="./OnoseremeEmuemhonjieResume.pdf" download>
          DOWNLOAD RESUME
        </a>
      </button>
    </div>
  );
};

export default HomeLarge;
