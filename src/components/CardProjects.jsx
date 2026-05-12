import React from "react";
import Mesa1x1 from "../assets/Mesa1X1.jpeg";
import Escritorio from "../assets/Modelo de mesa 1.png";

export default function CardProjects({ onProjectClick }) {
  const getWhatsappLink = (title) => {
    const message_whatsapp = `Hola! 👋\nMe interesa este producto: ${title}\n\n ¿Cuál es el precio?`;
    return `https://wa.me/573197755386?text=${encodeURIComponent(message_whatsapp)}`;
  };

  const projects = [
    {
      title: "Mesa de lujo 1x1 c18",
      image: Mesa1x1,
      description:
        "Una mesa elegante y duradera, perfecta para espacios modernos.",
      features: [
        "💯 Material de alta calidad",
        "✨  Diseño ergonómico",
        ".🛠️  Fácil mantenimiento",
      ],
      quation: "COTIZA CON NOSOTROS AQUI 👇",
      url_quotation: getWhatsappLink(
        "Mesa de lujo 1x1 c18 con pintura dorado Champagne",
      ),
    },
    {
      title: "Escritorio 1x1 & 3/4 C18",
      image: Escritorio,
      description:
        "Un escritorio funcional y estilizado para oficinas o hogares.",
      features: [
        "🏠 Espacio amplio",
        "📐 Estilo contemporáneo",
        "🛡️ Resistente al desgaste",
      ],
      quation: "COTIZA CON NOSOTROS AQUI 👇",
      url_quotation: getWhatsappLink("Escritorio 1x1 & 3/4 C18 con pintura negro mate"),
    },
  ];

  return (
    <section className="cardSections">
      <div className="aling-card">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img
              className="img-projects"
              src={project.image}
              alt={project.title}
            />
            <h2>{project.title}</h2>
            <button onClick={() => onProjectClick(project)}>Saber Mas</button>
          </div>
        ))}
      </div>
    </section>
  );
}
