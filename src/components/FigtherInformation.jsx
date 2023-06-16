/* eslint-disable react/prop-types */
import "../assets/styles/FigthsInformationCard.css";
import { Link } from "react-router-dom";

const FigtherInformation = ({
  category,
  weigth,
  image,
  name,
  streak,
  nickname,
}) => {
  return (
    <>
      <div className="figther-card">
        <div className="figther-weigth-column">
          <p className="category-text">{category}</p>
          <span className="weigth-text">{weigth}</span>
        </div>
        <div className="figther-image">
          <img src={image} alt="" />
        </div>
        <div className="figther-information">
          <div className="figther-weigth">
            <p className="category-text">{category}</p>
            <span className="weigth-text">{weigth}</span>
          </div>
          <div className="personal-information">
            {nickname && (
              <p className="nickname-text">&quot;{nickname}&quot;</p>
            )}
            <p className="name-text">{name}</p>
            <span className="streak-text">{streak}</span>
          </div>
          <div className="figther-social-medias">
            <button className="follow-button">
              <p className="button-text">SEGUIR</p>
              <div className="social-media">
                <Link>
                  <box-icon type="logo" name="instagram" size="sm"></box-icon>
                </Link>
                <Link>
                  <box-icon name="twitter" type="logo" size="sm"></box-icon>
                </Link>
                <Link>
                  <box-icon name="twitch" type="logo" size="sm"></box-icon>
                </Link>
                <Link>
                  <box-icon name="youtube" type="logo" size="sm"></box-icon>
                </Link>
              </div>
            </button>
          </div>
        </div>
        <div className="figther-social-media-column">
          <button className="follow-button">
            <p className="button-text">SEGUIR</p>
            <div className="social-media">
              <Link>
                <box-icon type="logo" name="instagram" size="sm"></box-icon>
              </Link>
              <Link>
                <box-icon name="twitter" type="logo" size="sm"></box-icon>
              </Link>
              <Link>
                <box-icon name="twitch" type="logo" size="sm"></box-icon>
              </Link>
              <Link>
                <box-icon name="youtube" type="logo" size="sm"></box-icon>
              </Link>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default FigtherInformation;
