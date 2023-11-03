import cardScreen1 from "../../images/Cards Screen1.png";
import cardScreen2 from "../../images/Cards Screen2.png";
import "./FeaturesCard.css";

export default function FeaturesCard() {
  return (
    <div className="features-card-main">
      <h2 className="feature-card-title feature-title">
        Modernize Apps, Infrastructure With Cloud Native Tech For Resilience,
        Scalability.
      </h2>
      <div className="feature-img-info img-info1">
        <img src={cardScreen1} alt="card-screen" className="card-screen-img1" />
        <div>
          <h2 className="feature-card-title">Real-time Risk Monitoring</h2>
          <p className="feature-para">
            Real-time risk monitoring across your infrastructure and application
            ecosystem will help you maintain ongoing compliance with more than
            05+ different regulatory standards.
          </p>
        </div>
      </div>
      <div className="feature-img-info">
        <div>
          <h2 className="feature-card-title">Collaborative Workflows</h2>
          <p className="feature-para">
            Share artefacts easily and collaborate with team members, auditors,
            and pen testers via automated procedures. To manage daily compliance
            with automatic notifications and reminders, create, assign, and
            track tasks.
          </p>
        </div>
        <img src={cardScreen2} alt="card-screen" className="card-screen-img2" />
      </div>
    </div>
  );
}
