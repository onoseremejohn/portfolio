import { Link } from "react-router-dom";
import onos from "../../assets/my_pic.jpg";
import { useGlobalContext } from "../../Context";
const HomeLarge = () => {
  const { type } = useGlobalContext();
  return (
    <div className='homelarge'>
      <div>
        <img className='mainimage' src={onos} alt='onos' />
        <article>
          <h3>Two things: {type()}</h3>
          <h2>Onosereme Emuemhonjie</h2>
          <p>Software Developer</p>
          <Link to='profile'>
            <button className='home-btn'>view my profile</button>
          </Link>
        </article>
      </div>
    </div>
  );
};

export default HomeLarge;
