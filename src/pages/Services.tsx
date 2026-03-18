import { FiMic, FiCode, FiBriefcase, FiAward } from "react-icons/fi";
import "./Services.css";

export default function Services({ lang }: { lang: string }) {
  const isEn = lang === "en";

  const services = [
    {
      icon: <FiMic />,
      title: isEn ? "Panels & Debates" : "Painéis e Debates",
      desc: isEn ? "Strategic discussions on public policies and financial innovation." : "Debates estratégicos sobre políticas públicas e inovação financeira."
    },
    {
      icon: <FiCode />,
      title: isEn ? "Innovation Hackathon" : "Hackathon de Inovação",
      desc: isEn ? "A space dedicated to creating and developing tech solutions." : "Espaço dedicado à criação e desenvolvimento de soluções tecnológicas."
    },
    {
      icon: <FiBriefcase />,
      title: isEn ? "Recruitment & Selection" : "Recrutamento e Seleção",
      desc: isEn ? "Connecting female talent with technical and leadership roles." : "Conectando talentos femininos a cargos técnicos e de liderança."
    },
    {
      icon: <FiAward />,
      title: isEn ? "Tech & Business Gala" : "Gala Tech & Business",
      desc: isEn ? "High-level networking and celebration of women in technology." : "Networking de alto nível e celebração das mulheres na tecnologia."
    }
  ];

  return (
    <section id="servicos" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">{isEn ? "Activities" : "Actividades"}</h2>
          <p className="section-subtitle">
            {isEn 
              ? "Experience a complete ecosystem of innovation and empowerment." 
              : "Experiencie um ecossistema completo de inovação e empoderamento."}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}