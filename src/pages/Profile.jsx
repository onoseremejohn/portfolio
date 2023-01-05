import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
const Profile = () => {
  const {type} =useGlobalContext()
  return (
    <section className='profile'>
      <article>
        <h3 className='profile-typewriter'>Two things: {type()}</h3>
        <h2>About Me</h2>
        <p className='profile-writeup'>
          I am Onosereme. And I love to code. Actually, what I love to do is to
          learn. And to build stuff. Coding just happens to be my most rewarding
          means to these ends. <br /> I’m pursuing a bachelor’s in computer
          engineering and have passion towards software development. <br /> If
          you must know, I am a front-end web developer . I work majorly with
          ReactJS and JavaScript. I have worked briefly with Python. Learning
          MongoDB and NodeJS is something I intend to do soon. <br /> I learn. I
          build. I collaborate. Look, I am the guy you need on your team. Hire
          me.
        </p>
      </article>

      <article>
        <h2>Experience</h2>
        <h3>My dev journey. Condensed</h3>
        <ul>
          <li>
            <h3 className='h3'>(May'22 - Present)</h3>
            <p className='profile-writeup'>
              Currently investing heavily in online resources such as Udemy.
              Completed quite a number of advanced development courses and built
              amazing projects with my knowledge. Check out my portfolio{" "}
              <Link
                to='/portfolio'
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                here.
              </Link>{" "}
              <br />
              <a
                style={{ fontWeight: "bold", cursor: "pointer" }}
                href=''
                download='RESUME'
              >
                GET MY RESUME
              </a>
            </p>
          </li>
        </ul>
      </article>

      <article>
        <h2>Core Skills</h2>
        <h3 className='h3'>Languages and Tech I work with</h3>
        <div>
          <span>REACT</span>
          <span>JAVASCRIPT</span>
          <span>CSS</span>
          <span>GIT</span>
          <span>GITHUB</span>
          <span>HTML5</span>
          <span>BOOTSTRAP</span>
        </div>
      </article>

      <article>
        <h2>Interests</h2>
        <h3 className='h3'>Hey, I also have a life outside of code</h3>
        <div className='interest-grid'>
          <p className='interest-grid-el interest-grid-el-one'>Books</p>
          <p className='interest-grid-el interest-grid-el-five'>Music</p>
          <p className='interest-grid-el interest-grid-el-three'>Design</p>
          <p className='interest-grid-el interest-grid-el-four'>
            Non-FPS Games
          </p>
          <p className='interest-grid-el interest-grid-el-two'>
            Internet of Things
          </p>
          <p className='interest-grid-el interest-grid-el-six'>Documentary</p>
        </div>
      </article>
    </section>
  );
};

export default Profile;
