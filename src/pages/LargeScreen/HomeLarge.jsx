import { Link } from "react-router-dom";
import onos from "../../assets/my_pic.jpg";
import { useGlobalContext } from "../../Context";
const HomeLarge = () => {
  const { Type } = useGlobalContext();
  return (
    <div className='homelarge'>
      <div>
        <img className='mainimage' src={onos} alt='onos' />
        <article>
          <h3>
            Two things: <Type />
          </h3>
          <h2>Onosereme Emuemhonjie</h2>
          <p>Software Developer</p>
          <Link to='profile'>
            <button className='home-btn'>view my profile</button>
          </Link>
        </article>
      </div>
      <button className='home-btn resume'>
        <a href="./Onosereme's_Resume.pdf" download>
          DOWNLOAD RESUME
        </a>
      </button>
    </div>
  );
};

export default HomeLarge;
