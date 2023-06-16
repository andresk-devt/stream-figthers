import FigtherInformation from "../components/FigtherInformation";
import figther from "../assets/images/fighter.png";
import "../assets/styles/FigthsInformationCard.css"
import womanFigther from "../assets/images/woman-figther.png";

const Peleadores = () => {
  return (
    <>
      <div className="figthers-container">
        <h1 className="figthers-tittle">Peladores</h1>
        <FigtherInformation
          category="peso mosca"
          weigth="125 lb (56.82kg)"
          image={figther}
          name="Leandro loaiza"
          streak="0-1-0 (W-L-D)"
          nickname="La Sapa"
        />
        <FigtherInformation
          category="peso ballena"
          weigth="300 lb (136kg)"
          image={womanFigther}
          name="Saray Guzmán"
          streak="1-0-0 (W-L-D)"
          nickname="Saygus"
        />
        <FigtherInformation
          category="peso mosca"
          weigth="125 lb (56.82kg)"
          image={figther}
          name="Leandro loaiza"
          streak="1-1-0 (W-L-D)"
          nickname="La Sapa"
        />
      </div>
    </>
  );
};

export default Peleadores;
