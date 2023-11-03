import "./FirstPage.css";
import vectorImage from "../../images/Group1.png";

export default function FirstPage() {
  return (
    <div className="first-page-main">
      <h1 className="title">Build your audience and grow your brand</h1>
      <p className="para">
        no more, no less. Deploy from our single pane of glass, manage them with
        ease and scale up as fast as your workload grows.
      </p>
      <button className="btn">Get Started Now</button>
      <img src={vectorImage} alt="group doing work" className="vector-img1" />
    </div>
  );
}
