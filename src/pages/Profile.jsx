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
            <h3>Self-Learning (May &apos;22 - Present)</h3>
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
              Front End Developer @ OurProperty NG (August &apos;24 - January
              &apos;25)
            </h3>
            <div className="profile-writeup">
              <ul className="styled-list">
                <li>
                  Played a pivotal role in developing property management
                  software for real estate companies, streamlining the
                  management of landlords, tenants, staff, properties, and
                  financial transactions.
                </li>
                <li>
                  Collaborated with the backend team to integrate a secure
                  wallet system, facilitating transactions between users,
                  company wallets, and landlords.
                </li>
                <li>
                  Successfully integrated complex APIs with multiple filters,
                  search, and sort functionalities, ensuring robust error
                  handling and user notifications for both successful and failed
                  actions.
                </li>
                <li>
                  Converted 30+ Figma design pages into responsive and
                  functional code with NextJS
                </li>
                <li>
                  Managed the integration of company onboarding and setup
                  processes, streamlining the initial configuration for new
                  companies and ensuring a smooth transition to the app.
                </li>
                <li>
                  Enhanced the customization features of the web app, enabling
                  companies to personalize brand colors, navigation bar
                  placement, and theme settings for a tailored user experience.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <h3>
              Front End Developer @ 233Developers Inc (June &apos;23 - March
              &apos;24)
            </h3>
            <div className="profile-writeup">
              <ul className="styled-list">
                <li>
                  Completed the development of a React web app to facilitate
                  user management and administrative operations for a dating
                  mobile app with over 6000 users.
                </li>
                <li>
                  Integrated a customer support feature within the
                  aforementioned web app incorporating real-time messaging
                  capabilities.
                </li>
                <li>
                  Implemented error handling mechanisms during API
                  communication, providing immediate visual feedback for any
                  failures.
                </li>
                <li>
                  Engineered an activity timeline feature to track admin
                  actions, encompassing login events, user bans, password
                  changes, and support ticket management activities; facilitated
                  in-depth audit trails for admin operations.
                </li>
                <li>
                  Ensured screen reader compliance, cross-browser functionality,
                  and accessibility for users with disabilities by utilizing
                  proper HTML semantics, managing tab indexes precisely, and
                  implementing ARIA roles and properties; enhanced user
                  experience and inclusivity for all users.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <h3>
              Software Developer Intern @ SiNet Technologies (Seconded to OANDO
              PLC) (March &apos;23 - May &apos;23)
            </h3>
            <div className="profile-writeup">
              <ul className="styled-list">
                <li>
                  Created REST APIs with detailed documentation using Postman
                  and Swagger UI, incorporating role-based access controls.
                </li>
                <li>
                  Crafted database schema for a SaaS platform using MongoDB
                  Aggregation Pipelines, enhancing system scalability.
                </li>
                <li>
                  Revamped content generation and rendering using EJS templates,
                  streamlining client-side data processing in a task manager
                  app.
                </li>
                <li>
                  Deployed and maintained web servers using Node.js and Express,
                  handling multiple concurrent users.
                </li>
                <li>
                  Learned to develop Progressive Web Applications (PWAs) within
                  1 month, demonstrating rapid skill acquisition.
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
