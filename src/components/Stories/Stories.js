import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import avatar from "../../images/profilePic.jpg";
import loading from "../../images/loading.png";
import comma from "../../images/comma.png";
import "./Stories.css";

export default function Stories() {
  return (
    <div className="stories-main">
      <h2 className="stories-h2-title">See Our Success Stories</h2>
      <div className="stories-main-content">
        <GoChevronLeft className="stories-icon" />
        <div className="stories-div">
          <div className="inverted-comma">
            <img src={comma} alt="decoration" />
          </div>
          <div className="para-name-avatar">
            <div>
              <p className="stories-para">
                There are many variations of passages of Lorem Ipsum available
                but the majority have sufferg alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage.
              </p>
              <div className="name-profession">
                <span className="stories-author">-Bhanu Prakash Mahant</span>
                <p>Frontend Engineer</p>
              </div>
            </div>
            <div>
              <img src={avatar} alt="profile-pic" className="author-img" />
            </div>
          </div>
        </div>
        <GoChevronRight className="stories-icon" />
      </div>
      <img src={loading} alt="loading" className="loading-img" />
    </div>
  );
}
