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
          Hello, I'm Onosereme, a passionate and dedicated learner with love for
          coding. Building things and constantly expanding my knowledge are my
          true passions, and software development is the most rewarding avenue
          for achieving these goals. <br />
          <br />
          Currently pursuing a bachelor's degree in computer engineering, I'm a
          full-stack developer leveraging the power of MongoDB, Express.js,
          React, and Node.js. However, my thirst for knowledge doesn't end
          there. I am currently honing my skills in Node.js and Express.js, and
          I have plans to delve into the realm of AWS Cloud services in the near
          future. <br />
          <br />
          Driven by a desire to learn, I am constantly seeking new opportunities
          to collaborate and grow. Whether it's working on exciting projects or
          joining a dynamic team. If you're in need of a versatile and skilled
          developer for your team, look no further. I am the guy you need on
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
            <h3>(May ‘22 - Present): Self-Learning</h3>
            <div className="profile-writeup">
              Currently investing heavily in online resources such as Udemy.
              Completed quite a number of advanced development courses and built
              amazing projects with my knowledge. Check out my portfolio{" "}
              <Link
                to="/portfolio"
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                here.
              </Link>{" "}
              <br />
              <a
                style={{ fontWeight: "bold", cursor: "pointer" }}
                href="./Onosereme's_Resume.pdf"
                download
              >
                GET MY RESUME
              </a>
            </div>
          </li>
          <li>
            <h3>
              (March ‘23 - May ‘23): Software Developer Intern @ SiNet
              Technologies (Seconded to OANDO PLC)
            </h3>
            <div className="profile-writeup">
              <ul className="styled-list">
                <li>
                  Developed numerous APIs and provided comprehensive
                  documentation, gaining hands-on experience in building robust
                  and efficient server-side endpoints, ensuring clear and
                  accessible communication for seamless integration and
                  developer support.
                </li>
                <li>
                  Explored and utilized MongoDB in web applications, becoming
                  proficient in leveraging its powerful features and utilizing
                  handy MongoDB methods.
                </li>
                <li>
                  Mastered Node.js and Express.js, developing secure and robust
                  backends for web applications.
                </li>
                <li>
                  Developed a comprehensive understanding of the Software
                  Development Life Cycle, encompassing requirement analysis,
                  development, testing, deployment, and maintenance stages.
                </li>
                <li>
                  Demonstrated strong project management skills, overseeing and
                  coordinating various aspects of software development projects,
                  including scope definition, task allocation, timeline
                  management, and resource coordination.
                </li>
                <li>
                  Acquainted with cloud services, including both on-premises and
                  cloud environments, and gained knowledge of deploying and
                  managing applications in these environments.
                </li>
                <li>
                  Implemented JWT (JSON Web Tokens) in projects, gaining a solid
                  understanding of authentication and security mechanisms in web
                  applications.
                </li>
                <li>
                  Developed and deployed a responsive full-stack web application
                  using React with TypeScript for the frontend and Node.js,
                  Express.js, and MongoDB for the backend.
                </li>
                <li>
                  Worked extensively with templating using EJS, enhancing my
                  knowledge of dynamic content generation and rendering.
                </li>
                <li>
                  Familiarized with data privacy practices and considerations,
                  ensuring compliance with data protection regulations and
                  implementing appropriate security measures.
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
          <span>NODE JS</span>
          <span>REACT</span>
          <span>JAVASCRIPT</span>
          <span>MONGODB</span>
          <span>TYPESCRIPT</span>
          <span>EXPRESS</span>
          <span>CSS</span>
          <span>TAILWIND</span>
          <span>STYLED-COMPONENTS</span>
          <span>GIT</span>
          <span>GITHUB</span>
          <span>HTML5</span>
          <span>BOOTSTRAP</span>
        </div>
        <h2>Personal Attributes</h2>
        <ul className="profile-writeup personal-attributes styled-list">
          <li>
            Embrace a culture of empathy, teamwork, and passion in all
            collaborative endeavors.
          </li>
          <li>
            Possess a strong intrinsic motivation for continuous learning and
            personal growth.
          </li>
          <li>
            Demonstrate a genuine passion for enhancing developer productivity
            through innovative solutions.
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
            <p>Design</p>
          </div>
          <div className="interest-grid-el interest-grid-el-four">
            <p>Non-FPS Games</p>
          </div>
          <div className="interest-grid-el interest-grid-el-two">
            <p>Internet of Things</p>
          </div>
          <div className="interest-grid-el interest-grid-el-six">
            <p>Documentary</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Profile;
