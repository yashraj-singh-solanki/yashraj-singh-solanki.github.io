import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/yashraj-singh-solanki"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — yashraj-singh-solanki
              </a>
            </p>
            <p>
              <a
                href="mailto:yashrajsolanki6464@gmail.com"
                data-cursor="disable"
              >
                yashrajsolanki6464@gmail.com
              </a>
            </p>
            <p>+91 8319601217</p>
            <h4>Education</h4>
            <p>
              B.Tech, Information Technology, Acropolis Institute of
              Technology and Research — Indore, MP
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/yashraj-singh-solanki"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/yashraj-singh-solanki"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:yashrajsolanki6464@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>Yashraj Singh Solanki</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
