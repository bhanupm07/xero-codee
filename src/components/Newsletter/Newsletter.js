import { useState } from "react";
import paperPlane from "../../images/Paper Plane.png";
import "./Newsletter.css";

export default function Newsletter() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="newsletter-main">
      <img src={paperPlane} alt="paper plane" className="paper-plane" />
      <h2 className="newsletter-h2-title">
        Subscribe To Our Newsletter & Get The Coupon Code.
      </h2>
      <p>All your information is completely confidential</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Type your email"
          value={value}
          onChange={handleChange}
        />
        <button className="subscribe-btn">Subscribe</button>
      </form>
    </div>
  );
}
