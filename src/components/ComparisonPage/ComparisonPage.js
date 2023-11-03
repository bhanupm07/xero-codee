import group from "../../images/Group 25482.png";
import comparison from "../../images/comparison.png";
import "./ComparisonPage.css";
import infrastructure from "../../images/infrastructure.png";
import security from "../../images/cyber-security.png";
import network from "../../images/neural-network.png";
import development from "../../images/development.png";
import Card from "../Card/Card";

export default function ComparisonPage() {
  return (
    <div className="comparison-main">
      <div className="comparison-page">
        <div className="title-img">
          <h3>Without Xerocodee</h3>
          <img src={group} alt="group" className="comparison-img" />
        </div>
        <div className="title-img">
          <h3>With Xerocodee</h3>
          <img src={comparison} alt="comparison" className="comparison-img" />
        </div>
      </div>

      <h2 className="h2-title comparison-title">
        Self serve infrastructure platform for{" "}
        <span className="title-span">scaling teams</span>
      </h2>
      <div className="cards-div card-div1">
        <Card
          src={infrastructure}
          title="Infrastructure"
          info="Automated Cloud Infrastructure Workflow"
        />
        <Card
          src={security}
          title="Security"
          info="Modern Secure Infrastructure Approach"
        />
      </div>
      <div className="cards-div">
        <Card
          src={network}
          title="Networking"
          info="Flexible Secure Application Connectivity"
        />
        <Card
          src={development}
          title="Applications"
          info="Automate Application Deployment for Agility"
        />
      </div>
    </div>
  );
}
