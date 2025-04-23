import { BsTelephoneInbound, BsPersonCheck } from "react-icons/bs";
import { CiLocationOn, CiMail } from "react-icons/ci";
import TypeWriter from "../components/TypeWriter";
const Contact = () => {
  return (
    <section className="contact">
      <h3 className="profile-typewriter">
        Two things: <TypeWriter str1="I am Onos" str2="dont bite" />
      </h3>
      <h2>Reach Out</h2>
      <h3 className="h3">Worth it. Trust me</h3>
      <div className="contact-grid">
        <div className="contact-grid-el contact-grid-el-one">
          <p>
            <BsTelephoneInbound />
          </p>
          <p>Phone</p>
          <a href="tel:+2348024068995">+(234)-802-406-8995</a>
        </div>
        <div className="contact-grid-el contact-grid-el-four">
          <p>
            <CiLocationOn />
          </p>
          <p>Location</p>
          <p>Lagos, NG</p>
        </div>
        <div className="contact-grid-el contact-grid-el-three">
          <p>
            <BsPersonCheck />
          </p>
          <p>Availability</p>
          <p>Yes. Make that call.</p>
        </div>
        <div className="contact-grid-el contact-grid-el-two">
          <p>
            <CiMail />
          </p>
          <p>Email</p>
          <a href="mailto:eonosereme@gmail.com">eonosereme@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
