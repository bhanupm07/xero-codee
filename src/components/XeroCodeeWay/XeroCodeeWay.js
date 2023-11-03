import rocketPng from "../../images/Rocket.png";
import line from "../../images/Line 39.png";
import "./XeroCodeeWay.css";
import cloud from "../../images/cloud.png";
import configure from "../../images/configure.png";
import deploy from "../../images/deploy.png";
import runtime from "../../images/runtime.png";
import scale from "../../images/scale.png";
import dashboards from "../../images/dashboards.png";
import costs from "../../images/costs.png";
import observe1 from "../../images/observe1.png";
import observe2 from "../../images/observe2.png";

export default function XeroCodeeWay1() {
  return (
    <div className="xerocodee-way-main">
      <div className="way-boiler-plate">
        <div className="way-title">
          <h2 className="way-h2-title ">The Xerocodee way</h2>
          <img src={rocketPng} alt="rocket" className="rocket-png" />
        </div>
        <h2 className="way-h2-title way-title2">01</h2>
        <img src={line} alt="line" className="line-img" />
        <h3 className="way-h3-title">Self Serve Infrastructure</h3>
        <p className="way-para">
          Accelerate by self-serving production-ready infrastructure and
          customize as you scale.
        </p>
      </div>
      <div className="way-components">
        <span className="selected-span">Your Cloud</span>
        <span className="menu-bar-span">Infra Components</span>
        <span className="menu-bar-span">Self-Hosted Apps</span>
      </div>

      <div className="way-img-info">
        <img src={cloud} alt="cloud png" className="way-img1" />
        <div>
          <h3 className="way-h3-title">In Your Cloud</h3>
          <p className="way-para">
            Your infrastructure runs on your AWS or GCP account. Never get
            locked in. Infinitely scalable.Azure support coming soon)
          </p>
        </div>
      </div>

      {/* // 2nd  */}

      <div className="way-boiler-plate">
        <h2 className="way-h2-title way-title2">02</h2>
        <img src={line} alt="line" className="line-img" />
        <h3 className="way-h3-title">Deploy applications, fast!</h3>
        <p className="way-para">
          Set up automated deployments of your application in 5 minutes and get
          back to building stuff that matters.
        </p>
      </div>
      <div className="way-img-info2">
        <img src={configure} alt="configure png" className="way-img2" />
        <div>
          <h3 className="way-h3-title">
            Configurable Build and Deploy pipelines
          </h3>
          <p className="way-para way-para2">
            Portable builds powered by Dagger and continuous deployments powered
            by ArgoCD - you gain more control of your pipelines with composable
            custom, build, and deploy stages.
          </p>
        </div>
      </div>
      <div className="way-img-info2">
        <div>
          <h3 className="way-h3-title">Push to Deploy</h3>
          <p className="way-para way-para2">
            Just connect your repo with one click and push. Argonaut’s deep
            integration with GitHub Actions and GitLab pipelines build and
            deploy your code on every push.
          </p>
        </div>
        <img src={deploy} alt="deploy png" className="way-img2" />
      </div>
      <div className="way-img-info2">
        <img src={runtime} alt="runtime png" className="way-img2" />
        <div>
          <h3 className="way-h3-title">Multiple runtimes</h3>
          <p className="way-para way-para2">
            Quickly deploy apps to containerized or serverless runtimes on your
            cloud and customize architectures to cost and performance
            constraints. Deploy on Kubernetes using dockerfiles or buildpacks,
            AWS Lambda, or GCP Cloud Functions.
          </p>
        </div>
      </div>
      <div className="way-img-info2">
        <div>
          <h3 className="way-h3-title">Scale infinitely</h3>
          <p className="way-para way-para2">
            Every deployment is a zero-downtime deployment without you needing
            to choose custom configurations. You can easily configure
            auto-scaling, resource limits, and health-check URL to further
            optimize application uptime.
          </p>
        </div>
        <img src={scale} alt="scale png" className="way-img2" />
      </div>

      {/* 03 */}

      <div className="way-boiler-plate">
        <h2 className="way-h2-title way-title2">03</h2>
        <img src={line} alt="line" className="line-img" />
        <h3 className="way-h3-title">Visibility into costs and metrics</h3>
        <p className="way-para">
          Automatically track resource costs, across clouds, on every change.
          Visualize k8s pod metrics - CPU, Network, and Memory.
        </p>
      </div>
      <div className="way-img-info2">
        <div className="way-img-div">
          <img src={dashboards} alt="dashboards png" className="way-img3" />
        </div>
        <div className="way-title-para">
          <h3 className="way-h3-title">
            Customizable cost dashboards and reports
          </h3>
          <p className="way-para way-para2">
            Stay on top of your cloud spending with custom cost dashboards and
            reports — sort, filter, and group by your various accounts,
            resources, and cloud regions.
          </p>
        </div>
      </div>
      <div className="way-img-info2">
        <div className="way-title-para">
          <h3 className="way-h3-title">Preview infra costs</h3>
          <p className="way-para way-para2">
            See the cost of a specific resource while choosing it (before
            provisioning). It saves you the hassle of searching through the
            complex pricing pages of your cloud provider or tools.
          </p>
        </div>
        <div className="way-img-div">
          <img src={costs} alt="costs png" className="way-img4" />
        </div>
      </div>
      <div className="way-img-info2">
        <div className="way-two-images-div">
          <img src={observe1} alt="observe png" className="way-img5" />
          <img src={observe2} alt="observe png" className="way-img6" />
        </div>
        <div>
          <h3 className="way-h3-title">Observability from day one</h3>
          <p className="way-para way-para2">
            Comes with built-in Kubernetes pod metrics. Easily plug in
            monitoring and observability tools of your choice, such as
            Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your
            application metrics from day 1.
          </p>
        </div>
      </div>
    </div>
  );
}
