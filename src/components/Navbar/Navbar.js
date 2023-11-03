import logo from "../../images/logo 4 1.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-main">
      <div className="img-container">
        <img src={logo} alt="company-logo" />
      </div>
      <div className="menu-contents">
        <span>Home</span>
        <span>Team</span>
        <span>Contact</span>
        <span>Careers</span>
      </div>
      <button className="sign-in-btn">Sign In</button>
    </div>
  );
}
