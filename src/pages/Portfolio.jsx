import { FaGithub, FaSearch } from "react-icons/fa";
import countries from "../assets/countries.png";
import form from "../assets/multistep-form.png";
import todo from "../assets/todo.png";
import ecommerce from "../assets/ecommerce.png";
import notification from "../assets/notificatio.png";
import tradelane from "../assets/tradelane.png";
import essentialgroup from "../assets/essentialgroup.png";
import kanban from "../assets/kanban.png";
import kanbanMern from "../assets/kanban-mern.png";
import { useGlobalContext } from "../Context";

const Portfolio = () => {
  const { Type } = useGlobalContext();
  return (
    <section className="portfolio">
      <h3 className="profile-typewriter">
        Two things: <Type />
      </h3>
      <h2>My Projects</h2>
      <h3 className="h3">A couple projects I have worked on</h3>
      <div className="portfolio-grid">
        <div className="portfolio-grid-el">
          <img src={kanbanMern} alt="Kanban MERN version" />
          <div className="container">
            <p>Kanban MERN version</p>
            <div className="btn-container">
              <button type="button">
                <a href="https://kanban-app-yagz.onrender.com/" target="_blank">
                  <FaSearch />
                </a>
              </button>
              <button type="button">
                <a
                  href="https://github.com/onoseremejohn/kanban-MERN-version.git"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-grid-el">
          <img src={kanban} alt="Kanban Task Manager" />
          <div className="container">
            <p>Kanban Task Manager</p>
            <div className="btn-container">
              <button>
                <a href="https://kanban-onos.netlify.app/" target="_blank">
                  <FaSearch />
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/onoseremejohn/Kanban-Task-Manager.git"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-grid-el">
          <img src={form} alt="MULTI-STEP-FORM" />
          <div className="container">
            <p>Form Wizard</p>
            <div className="btn-container">
              <button>
                <a
                  href="https://multi-form-wizard.netlify.app/"
                  target="_blank"
                >
                  <FaSearch />
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/onoseremejohn/multi-step-form.git"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-grid-el">
          <img src={tradelane} alt="TRADELANE" />
          <div className="container">
            <p>TradeLane</p>
            <div className="btn-container">
              <button>
                <a href="https://tradelane.netlify.app/" target="_blank">
                  <FaSearch />
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/onoseremejohn/Tradelane-Footware-Store.git"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-grid-el full-width">
          <img src={essentialgroup} alt="ESSENTIAL GROUP" />
          <div className="container">
            <p>EssentialGroup</p>
            <div className="btn-container">
              <button>
                <a href="https://essentialgroup.netlify.app" target="_blank">
                  <FaSearch />
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/onoseremejohn/Essential-Group-Landing-Page.git"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-grid-el">
          <img src={countries} alt="COUNTRY EXPLORER" />
          <div className="container">
            <p>Country Explorer</p>
            <div className="btn-container">
              <button>
                <a
                  href="https://my-country-explorer.netlify.app/"
                  target="_blank"
                >
                  <FaSearch />
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/onoseremejohn/Country-Explorer.git"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-grid-el">
          <img src={todo} alt="TODO-APP" />
          <div className="container">
            <p>Todo-App</p>
            <div className="btn-container">
              <button>
                <a
                  href="https://onoseremejohn.github.io/todo-app/"
                  target="_blank"
                >
                  <FaSearch />
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/onoseremejohn/todo-app.git"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-grid-el">
          <img src={ecommerce} alt="ECOMMERCE PRODUCT LANDING PAGE" />
          <div className="container">
            <p>ECommerce Product Page</p>
            <div className="btn-container">
              <button>
                <a
                  href="https://onoseremejohn.github.io/Ecommerce-Product-Page/"
                  target="_blank"
                >
                  <FaSearch />
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/onoseremejohn/Ecommerce-Product-Page.git"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio-grid-el">
          <img src={notification} alt="NOTIFICATIONS" />
          <div className="container">
            <p>Notifications Page</p>
            <div className="btn-container">
              <button>
                <a
                  href="https://onoseremejohn.github.io/notifications-page/"
                  target="_blank"
                >
                  <FaSearch />
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/onoseremejohn/notifications-page.git"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
