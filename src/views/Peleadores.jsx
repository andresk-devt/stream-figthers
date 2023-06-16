import FigtherInformation from "../components/FigtherInformation";
import figther from "../assets/images/fighter.png";
import "../assets/styles/FigthsInformationCard.css"

const Peleadores = () => {
  return (
    <>
      <div className="figthers-container">
        <h1 className="figthers-tittle">Peladores</h1>
        <FigtherInformation
          category="peso mosca"
          image={figther}
          name="ISRAEL ADENSAYA"
          streak="1-1-0 (W-L-D)"
        />
      </div>
    </>
  );
};

export default Peleadores;
