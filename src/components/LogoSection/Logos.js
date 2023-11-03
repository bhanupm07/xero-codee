import greenhouse from "../../images/greenhouse.png";
import BRSR from "../../images/BRSR.png";
import CDP from "../../images/CDP.png";
import ipcc from "../../images/ipcc.png";
import "./Logos.css";

export default function Logos() {
  const images = [
    { src: greenhouse, alt: "greenhouse-logo" },
    { src: BRSR, alt: "BRSR-logo" },
    { src: CDP, alt: "CDP-logo" },
    { src: ipcc, alt: "ipcc-logo" },
  ];

  const rendered = images.map((obj, i) => {
    return (
      <div className="single-logo-div" key={i}>
        <img src={obj.src} alt={obj.alt} className="logo-img" />
        <img src={obj.src} alt={obj.alt} className="logo-img" />
      </div>
    );
  });

  return <div className="logos-main">{rendered}</div>;
}
