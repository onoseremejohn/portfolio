import countries from "../assets/countries.png";
import form from "../assets/multistep-form.png";
import todo from "../assets/todo.png";
import ecommerce from "../assets/ecommerce.png";
import notification from "../assets/notificatio.png";
import tradelane from "../assets/tradelane.png";
import essentialgroup from "../assets/essentialgroup.png";
import kanban from "../assets/kanban.png";
import kanbanMern from "../assets/kanban-mern.png";
import jobsApi from "../assets/jobs-api.png";
import outingz from "../assets/outingz.png";
import sasaek from "../assets/sasaek-mini.png";
import centerOne from "../assets/center-one.png";
import PortfolioItem from "../components/ProjectItem";
import TypeWriter from "../components/TypeWriter";
const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="profile-typewriter">
        Two things: <TypeWriter str1="I am Onos" str2="love to code" />
      </h3>
      <h2>My Projects</h2>
      <h3 className="h3">A couple projects I have worked on</h3>
      <div className="portfolio-grid">
        <PortfolioItem
          imageSrc={centerOne}
          title="Center One"
          projectLink="https://center-one.netlify.app/"
          githubLink="https://github.com/onoseremejohn/center-one.git"
        />
        <PortfolioItem
          imageSrc={sasaek}
          title="Sasaek-Mini"
          projectLink="https://sasaek-mini.netlify.app/"
          githubLink="https://github.com/onoseremejohn/sasaek-mini.git"
        />
        <PortfolioItem
          imageSrc={outingz}
          title="Outingz"
          projectLink="https://outingz.vercel.app/"
          additionalInfo="Click on 'Admin' in the navigation bar to login<br>Login: onos@event.com<br>Password: Secret1@"
        />
        <PortfolioItem
          imageSrc={kanbanMern}
          title="Kanban MERN version"
          projectLink="https://kanban-app-yagz.onrender.com/"
          githubLink="https://github.com/onoseremejohn/kanban-MERN-version.git"
        />
        <PortfolioItem
          imageSrc={kanban}
          title="Kanban Task Manager"
          projectLink="https://kanban-onos.netlify.app/"
          githubLink="https://github.com/onoseremejohn/Kanban-Task-Manager.git"
        />
        <PortfolioItem
          // className="full-width"
          imageSrc={tradelane}
          title="TradeLane"
          projectLink="https://tradelane.netlify.app/"
          githubLink="https://github.com/onoseremejohn/Tradelane-Footware-Store.git"
        />
        <PortfolioItem
          imageSrc={form}
          title="Form Wizard"
          projectLink="https://multi-form-wizard.netlify.app/"
          githubLink="https://github.com/onoseremejohn/multi-step-form.git"
        />
        <PortfolioItem
          imageSrc={essentialgroup}
          title="EssentialGroup"
          projectLink="https://essentialgroup.netlify.app"
          githubLink="https://github.com/onoseremejohn/Essential-Group-Landing-Page.git"
        />
        <PortfolioItem
          // className="full-width"
          imageSrc={jobsApi}
          title="Jobs API"
          projectLink="https://jobs-api-mv3a.onrender.com/api-docs/"
          githubLink="https://github.com/onoseremejohn/Jobs-Api.git"
        />
        <PortfolioItem
          imageSrc={countries}
          title="Country Explorer"
          projectLink="https://my-country-explorer.netlify.app/"
          githubLink="https://github.com/onoseremejohn/Country-Explorer.git"
        />
        <PortfolioItem
          imageSrc={todo}
          title="Todo-App"
          projectLink="https://onoseremejohn.github.io/todo-app/"
          githubLink="https://github.com/onoseremejohn/todo-app.git"
        />
        <PortfolioItem
          imageSrc={ecommerce}
          title="ECommerce Product Page"
          projectLink="https://onoseremejohn.github.io/Ecommerce-Product-Page/"
          githubLink="https://github.com/onoseremejohn/Ecommerce-Product-Page.git"
        />
        <PortfolioItem
          className="full-width"
          imageSrc={notification}
          title="Notifications Page"
          projectLink="https://onoseremejohn.github.io/notifications-page/"
          githubLink="https://github.com/onoseremejohn/notifications-page.git"
        />
      </div>
    </section>
  );
};

export default Portfolio;
