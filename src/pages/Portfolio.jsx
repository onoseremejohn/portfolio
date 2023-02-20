import countries from "../assets/countries.png";
import form from "../assets/multistep-form.png";
import todo from "../assets/todo.png";
import ecommerce from "../assets/ecommerce.png";
import notification from "../assets/notificatio.png";
import tradelane from "../assets/tradelane.png";
import essentialgroup from "../assets/essentialgroup.png";
import { useGlobalContext } from "../Context";
const Portfolio = () => {
  const { Type } = useGlobalContext();
  return (
    <section className='portfolio'>
      <h3 className='profile-typewriter'>
        Two things: <Type />
      </h3>
      <h2>My Projects</h2>
      <h3 className='h3'>A couple projects I have worked on</h3>
      <div className='portfolio-grid'>
        <a
          href='https://multi-form-wizard.netlify.app/'
          className='portfolio-grid-el full-width'
          target='_blank'
        >
          <img src={form} alt='MULTI-STEP-FORM' />
          <p>Form Wizard</p>
        </a>
        <a
          href='https://tradelane.netlify.app'
          className='portfolio-grid-el '
          target='_blank'
        >
          <img src={tradelane} alt='TRADELANE' />
          <p>TradeLane</p>
        </a>
        <a
          href='https://my-country-explorer.netlify.app/'
          className='portfolio-grid-el '
          target='_blank'
        >
          <img src={countries} alt='COUNTRY EXPLORER' />
          <p>Country Explorer</p>
        </a>
        <a
          href='https://essentialgroup.netlify.app'
          className='portfolio-grid-el full-width'
          target='_blank'
        >
          <img src={essentialgroup} alt='ESSENTIAL GROUP' />
          <p>EssentialGroup</p>
        </a>
        <a
          href='https://onoseremejohn.github.io/todo-app/'
          className='portfolio-grid-el '
          target='_blank'
        >
          <img src={todo} alt='TODO-APP' />
          <p>Todo-App</p>
        </a>
        <a
          href='https://onoseremejohn.github.io/Ecommerce-Product-Page/'
          target='_blank'
          className='portfolio-grid-el '
        >
          <img src={ecommerce} alt='ECOMMERCE PRODUCT LANDING PAGE' />
          <p>ECommerce Product Page</p>
        </a>
        <a
          href='https://onoseremejohn.github.io/notifications-page/'
          target='_blank'
          className='portfolio-grid-el full-width last'
        >
          <img src={notification} alt='NOTIFICATIONS' />
          <p>Notifications Page</p>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
