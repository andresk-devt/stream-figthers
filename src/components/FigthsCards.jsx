import "../assets/styles/FigthsCard.css";

// eslint-disable-next-line react/prop-types
const FigthsCards = ({ figtherOne, figtherTwo, category, reverse }) => {
  return (
    <>
      <div className="figth-card">
        <div className={`figth-card-content ${reverse ? "reverse" : ""}`}>
          <div className="figther-description">
            <p className="text">{category.toUpperCase()}</p>
            <p className="title">
              {figtherOne.name}
              <br />
              <span>VS</span>
              {figtherTwo.name}
            </p>
          </div>
          <div className="fighter-images">
            <img src={figtherTwo.image} alt="" />
            <img src={figtherOne.image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FigthsCards;
