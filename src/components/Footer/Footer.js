import mailPng from "../../images/mail.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-upper">
        <div className="footer-para-div">
          <p className="footer-para">
            You get just what you need to run your cloud workloads--no more, no
            less. Deploy from our single pane of glass, manage them with ease
            and scale up as fast as your workload grows
          </p>
        </div>
        <div>
          <h3 className="footer-h3-title">Our Links</h3>
          <div className="links">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#" className="link-selected" style={{ color: "#0c5bc6" }}>
              Integrations
            </a>
            <a href="#">Team</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div>
          <h3 className="footer-h3-title">Our Services</h3>
          <div className="links">
            <a href="#">Infrastructure provisioning</a>
            <a href="#">Network infrastructure automation</a>
            <a href="#">Cost optimization</a>
            <a href="#">Cloud migration</a>
            <a href="#">Kubernetes at scale</a>
          </div>
        </div>
        <div>
          <h3 className="footer-h3-title">Other Links</h3>
          <div className="links">
            <a href="#">FAQ</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>

      <div className="socials">
        <div className="social-img-div social1"></div>
        <div className="social-img-div social2"></div>
        <div className="social-img-div social3"></div>
        <div className="social-img-div social4">
          <img src={mailPng} alt="mail png" />
        </div>
      </div>

      <div className="footer-lower">
        <p>Terms & Condition | Privacy Policy </p>
        <p>
          Copyright © 2023 <span>EXOCODE TECHNOLOGIES</span> | All rights
          reserved
        </p>
      </div>
    </div>
  );
}
