import "./SecondPage.css";
import frame from "../../images/Frame-2nd-page.png";

export default function SecondPage() {
  return (
    <div className="second-page-main">
      <button className="feature-btn">Features</button>
      <h2 className="h2-title">
        <span className="title-span">Save 1000s</span> of expensive coder hours
      </h2>
      <p className="second-page-para">
        With cloud native technologies, we assist in modernising infrastructure
        and applications for resilience and scalability.
      </p>
      <div className="menu-bar">
        <span className="selected-span">Apps</span>
        <span className="menu-bar-span">App Configs</span>
        <span className="menu-bar-span">Pipelines</span>
        <span className="menu-bar-span">Infra Creation</span>
        <span className="menu-bar-span">Cost</span>
        <span className="menu-bar-span">Add-Ons</span>
        <span className="menu-bar-span">Monitoring</span>
        <span className="menu-bar-span">Connections</span>
      </div>
      <img src={frame} alt="frame" className="second-page-img" />
    </div>
  );
}
