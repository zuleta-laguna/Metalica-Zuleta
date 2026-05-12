import React from "react";
import whatsappsvg from "../assets/whatsapp.svg"

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {project && (
          <div>
            <h2>{project.title}</h2>
            <img
              src={project.image}
              alt={project.title}
              className="modal-image"
            />
            <p>{project.description}</p>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3>{project.quation}</h3>
            <a className="button_whatsapp" href={project.url_quotation} target="_blank" rel="noreferrer noopener"><img src={whatsappsvg} alt="Whatsapp svg" /> Whatsapp</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
