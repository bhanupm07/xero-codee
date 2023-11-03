import "./Card.css";

export default function Card({ src, title, info }) {
  return (
    <div className="card-main">
      <div className="card-img-div">
        <img src={src} alt="designs" className="card-img" />
      </div>
      <div>
        <h3 className="card-title">{title}</h3>
        <p className="card-para">{info}</p>
      </div>
    </div>
  );
}
