import "./App.css";
import logo from "./assets/Logo.png";
import mask from "./assets/Mask.png";
import facebookicon from "./assets/Facebook.png";
import instagramicon from "./assets/instagram.png"
import WhatsappQR from "./assets/WhatsappQR.png"
import CardProjects from "./components/CardProjects";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="Main">
        <header>
          <img className="logo" src={logo} alt="" />
        </header>
        <h2 className="Title">
          Metalica <br /> <span className="Title_span_Style">Zuleta</span>{" "}
        </h2>
      </section>
      <section className="description-content">
        <div className="description-about-metalicazuleta">
          <h2 className="subtitlecontenth2">
            Tradición, Excelencia y Compromiso
          </h2>
          <p className="contentAboutMetalicaZuleta">
            Más de 23 años transformando experiencia en calidad. En nuestro
            negocio, el 'bien' no es suficiente; trabajamos con pasión para
            ofrecer siempre lo mejor, garantizando resultados superiores que
            reflejan nuestro compromiso con este campo laboral.
          </p>
        </div>
        <div className="image-mask">
          <img src={mask} alt="" />
        </div>
      </section>
      <section className="ProjectsSections">
        <div className="alingSubtitle">
          <h2 className="SubtitleProjects">Proyectos hecho por nosotros</h2>
        </div>
        <div className="ProjectsCreated">
          <CardProjects onProjectClick={openModal} />
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
      <footer>
        <div className="infoMetalicaZuleta">
         <p>zuletametalica@gmail.com</p>
         <p>+57 319 7755-386</p>
        </div>
        <div className="SocialNetworkMetalicaZuleta">
         <img className="logoFooter" src={logo} alt="" />
         <div className="hiperlinkSocialNetwork">
            {/*<a href=""><img src={facebookicon} alt="facebook icon" /></a>*/}
         <a href="https://www.instagram.com/metalica_zuleta/"><img src={instagramicon} alt="instagram icon" /></a>
         </div>
        </div>
        <div className="WhatsappQR">
          <img src={WhatsappQR} alt="QR" />
        </div>
      </footer>
    </>
  );
}

export default App;
