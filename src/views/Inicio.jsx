import ImagenInicio from "../assets/images/ImagenInicio.jpeg";
import CountDownClock from "../components/CountdownClock";
import "../assets/styles/Inicio.css";
import mercadolibreBrand from "../assets/images/mercado-libre-logo.png";
import budweiserBrand from "../assets/images/budweiser-logo.png";
import pocoBrand from "../assets/images/poco-logo.png";
import wplayBrand from "../assets/images/wplay-logo.png";

const Inicio = () => {
  return (
    <>
      <CountDownClock />
      <article className="section-container">
        <div className="image-section">
          <div className="image-container">
            <img src={ImagenInicio} alt="" />
          </div>
        </div>
        <div className="section-description">
          <h1 className="description-title">¡Bienvenidos a Stream Fighters!</h1>
          <p className="description-text">
            ¡Prepárate para el enfrentamiento más épico del año! Stream
            Fighters, te trae un espectáculo sin igual donde los streamers e
            influencers se dejarán la vida en el cuadrilátero. Serás testigo de
            un torrente de entretenimiento, diversión desenfrenada y pura
            euforia. Cada gancho, cada esquive y cada impacto desatará una ola
            de emociones que te dejará sin aliento.
            <br />
            Pero eso no es todo, porque también hemos preparado una sorpresa
            especial para ti. Además de las intensas peleas, podrás disfrutar
            del talento de reconocidos artistas que se presentarán en el
            entretiempo con sus increíbles voces y actuaciones, te deleitarán
            con un show inolvidable que elevará la energía a un nivel
            completamente nuevo.
            <br />
            No pierdas la oportunidad de reservar tu lugar y sumergirte en esta
            experiencia intensa y desgarradora que revolucionará el mundo del
            streaming. ¡El caos del cuadrilátero digital está a punto de
            comenzar!
          </p>

          <button className="button-container">COMPRAR BOLETA AQUI</button>
        </div>
      </article>
      <article className="sponsors-container">
        <h1 className="sponsors-tittle">Patrocionadores oficiales:</h1>
        <div className="sponsors-list">
          <div className="sponsors-list__item">
            <div className="logo-image-container">
              <img src={mercadolibreBrand} alt="" />
            </div>
          </div>
          <div className="sponsors-list__item">
            <div className="logo-image-container">
              <img src={budweiserBrand} alt="" />
            </div>
          </div>
          <div className="sponsors-list__item">
            <div className="logo-image-container">
              <img src={wplayBrand} alt="" />
            </div>
          </div>
          <div className="sponsors-list__item">
            <div className="logo-image-container">
              <img src={pocoBrand} alt="" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Inicio;
