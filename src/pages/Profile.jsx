import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
const Profile = () => {
  const { Type } = useGlobalContext();
  return (
    <section className="profile">
      <article>
        <h3 className="profile-typewriter">
          Two things: <Type />
        </h3>
        <h2>About Me</h2>
        <p className="profile-writeup">
          I'm Onosereme, a front-end developer with a Bachelor's degree in
          Computer Engineering. I specialize in crafting engaging user
          experiences using modern web technologies.
          <br />
          <br />
          At the heart of my toolkit are React and NextJS, augmented with
          TypeScript and Tailwind CSS for rapid UI development. While I
          specialize in front-end development, I'm also proficient in backend
          tools such as Node.js and Express, along with databases like MongoDB
          and MySQL.
          <br />
          <br />
          By the way, I have plans to delve into the realm of AWS Cloud services
          and Blockchain in the near future.
          <br />
          <br />
          Driven by a desire to learn, I am constantly seeking new opportunities
          to collaborate and grow. Whether it's working on exciting projects or
          joining a dynamic team. If you're in need of a versatile and skilled
          developer for your team, look no further. I am the boy you need on
          your team.{" "}
          <Link
            to="/contact"
            style={{ fontWeight: "bold", textTransform: "uppercase" }}
          >
            Hire me.
          </Link>
        </p>
      </article>
      <article>
        <h2>Experience</h2>
        <h3 style={{ marginBottom: "0.5em", fontSize: "unset" }}>
          My dev journey. Condensed
        </h3>
        <ul className="experiences">
          <li>
            <h3>Self-Learning (May ‘22 - Present)</h3>
            <div className="profile-writeup">
              Currently investing heavily in online resources on Udemy and
              Youtube. Completed quite a number of advanced development courses
              and built amazing projects with my knowledge. Check out my
              portfolio{" "}
              <Link
                to="/portfolio"
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                here.
              </Link>{" "}
              <br />
              <a
                style={{ fontWeight: "bold", cursor: "pointer" }}
                href="./OnoseremeEmuemhonjieResume.pdf"
                download
              >
                GET MY RESUME
              </a>
            </div>
          </li>
          <li>
            <h3>
              Front End Developer @ 233Developers Inc (June ‘23 - Present)
            </h3>
            <div className="profile-writeup">
              <ul className="styled-list">
                <li>
                  Crafted a React web app to facilitate user management and
                  administrative operations for a dating mobile app with over
                  6000 users, boosting engagement metrics by 40% within the
                  first quarter.
                </li>
                <li>
                  Integrated a Customer Support feature within the
                  aforementioned web app incorporating real-time messaging
                  capabilities; reduced average users' issue resolution time by
                  a notable 30%.
                </li>
                <li>
                  Spearheaded the deployment of error handling mechanisms for
                  message transmissions, delivering 99.9% error-free
                  communications by providing immediate visual feedback for any
                  failures.
                </li>
                <li>
                  Enhanced admin experience by integrating Material UI
                  components to deliver timely notifications for admin actions
                  and API feedback, leading to a remarkable decrease in admin
                  errors and a 10% boost in productivity.
                </li>
                <li>
                  Engineered an activity timeline feature to track admin
                  actions, encompassing login events, user bans, password
                  changes, and support ticket management activities; facilitated
                  in-depth audit trails for admin operations.
                </li>
                <li>
                  Implemented React custom hooks to optimize fetch requests
                  within components, resulting in significant reduction of code
                  redundancy, improved maintainability, scalability, and overall
                  code quality.
                </li>
                <li>
                  Scaled up the application's performance and rendering
                  efficiency by managing global states with React Context API
                  and state management techniques driving a 50% decrease in bug
                  reports and rise in satisfaction ratings.
                </li>
                <li>
                  Transformed 50+ PSD designs and Figma prototypes into
                  interactive HTML pages, ensuring pixel-perfect accuracy,
                  cross-browser compatibility, and ADA (Americans with
                  Disabilities Act) compliance.
                </li>
                <li>
                  Led a brainstorming session to kickstart the development of a
                  laundry management system app; crafted an App Concept Proposal
                  document outlining user personas, wireframes, and
                  functionality requirements
                </li>
              </ul>
            </div>
          </li>
          <li>
            <h3>
              Software Developer Intern @ SiNet Technologies (Seconded to OANDO
              PLC) (March ‘23 - May ‘23)
            </h3>
            <div className="profile-writeup">
              <ul className="styled-list">
                <li>
                  Revamped content generation and rendering in a web app with
                  EJS templates, increasing developer productivity by 100% and
                  streamlining client-side data processing.
                </li>
                <li>
                  Deployed and maintained web servers using Node.js and Express,
                  handling 100 concurrent users with 0% downtime in high-traffic
                  e-commerce environment.
                </li>
                <li>
                  Designed a JWT authentication mechanism for applications;
                  reduced unauthorized access attempts by 25% within the 1 month
                  of deployment.
                </li>
                <li>
                  Simplified database schema for a SaaS platform utilizing
                  MongoDB Aggregation Pipelines, slashing query response time by
                  50% and upgrading system scalability.
                </li>
                <li>
                  Created REST-APIs with detailed documentation using Postman
                  and Swagger UI, including role-based access controls and
                  reducing endpoint access errors by 30%.
                </li>
                <li>
                  Learned to develop Progressive Web Applications (PWAs) within
                  1 month, demonstrating rapid skill acquisition.
                </li>
                <li>
                  Collaborated with senior developers and project managers to
                  identify and resolve technical issues within applications.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </article>

      <article>
        <h2>Core Skills</h2>
        <h3 className="h3">Languages and Tech I work with</h3>
        <div style={{ marginBottom: "1em" }}>
          <span>REACT</span>
          <span>NEXT JS</span>
          <span>TYPESCRIPT</span>
          <span>JAVASCRIPT (ES6)</span>
          <span>NODE JS</span>
          <span>MYSQL</span>
          <span>MONGODB</span>
          <span>EXPRESS</span>
          <span>TAILWIND</span>
          <span>CSS3</span>
          <span>STYLED-COMPONENTS</span>
          <span>GIT</span>
          <span>GITHUB</span>
          <span>GULP</span>
          <span>HTML5</span>
          <span>BOOTSTRAP</span>
        </div>
        <h2>Personal Attributes</h2>
        <ul className="profile-writeup personal-attributes styled-list">
          <li>
            Embrace a culture of teamwork and passion in all collaborative
            endeavors.
          </li>
          <li>
            Possess a strong motivation for continuous learning and personal
            growth.
          </li>
          <li>
            Demonstrate passion for enhancing developer productivity through
            innovative solutions.
          </li>
          <li>
            Strive for excellence by maintaining a balance between speed and
            quality in all projects.
          </li>
          <li>
            Possess a natural inclination towards automation, seeking
            opportunities to streamline processes and increase efficiency.
          </li>
        </ul>
      </article>

      <article>
        <h2>Interests</h2>
        <h3 className="h3">Hey, I also have a life outside of code</h3>
        <div className="interest-grid">
          <div className="interest-grid-el interest-grid-el-one">
            <p>Books</p>
          </div>
          <div className="interest-grid-el interest-grid-el-five">
            <p>Music</p>
          </div>
          <div className="interest-grid-el interest-grid-el-three">
            <p>Movies</p>
          </div>
          <div className="interest-grid-el interest-grid-el-four">
            <p>Video Games</p>
          </div>
          <div className="interest-grid-el interest-grid-el-two">
            <p>Internet of Things</p>
          </div>
          <div className="interest-grid-el interest-grid-el-six">
            <p>Documentary / Research</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Profile;
