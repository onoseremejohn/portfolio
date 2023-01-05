import todo from "../assets/todo.png";
import ecommerce from "../assets/ecommerce.png";
import notification from "../assets/notificatio.png";
import portf from "../assets/portf.png";
import { useGlobalContext } from "../Context";
const Portfolio = () => {
  const { type } = useGlobalContext();
  return (
    <section className='portfolio'>
      <h3 className='profile-typewriter'>Two things: {type()}</h3>
      <h2>My Projects</h2>
      <h3 className='h3'>A couple projects I have worked on</h3>
      <div className='portfolio-grid'>
        <a
          href='https://onoseremejohn.github.io/todo-app'
          className='portfolio-grid-el portfolio-grid-el-one'
          target='_blank'
        >
          <img src={todo} alt='TODO-APP' />
          <p>Todo-App</p>
        </a>
        <a
          href='https://onoseremejohn.github.io/ecommerce'
          target='_blank'
          className='portfolio-grid-el portfolio-grid-el-two'
        >
          <img src={ecommerce} alt='ECOMMERCE PRODUCT LANDING PAGE' />
          <p>ECommerce Product Page</p>
        </a>
        <a
          href='https://onoseremejohn.github.io/notification'
          target='_blank'
          className='portfolio-grid-el portfolio-grid-el-three'
        >
          <img src={notification} alt='NOTIFICATIONS' />
          <p>Notifications Page</p>
        </a>
        <a
          href='https://onoseremejohn.github.io/coursera-test/portfolio/index.html'
          target='_blank'
          className='portfolio-grid-el portfolio-grid-el-four'
        >
          <img src={portf} alt='lorem ipsum portfolio site' />
          <p>Lorem Ipsum Portfolio Site</p>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
