import logo from "../assets/logo.png";
const LeftSide = () => {
  return (
    <div className='left-side'>
      <img src={logo} alt='logo' />
      <div>
        <a href='tel:+2348024068995'>+(234)-802-406-8995</a>
        <a href='mailto:eonosereme@gmail.com'>eonosereme@gmail.com</a>
      </div>
    </div>
  );
};

export default LeftSide;
