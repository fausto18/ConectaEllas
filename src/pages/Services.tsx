import { FiCalendar, FiUsers, FiBookOpen, FiStar } from "react-icons/fi";
import "./Services.css";

export default function Services({ lang }: { lang: string }) {
  const isEn = lang === "en";

  const services = [
    {
      icon: <FiCalendar />,
      title: isEn ? "Events & Conferences" : "Eventos e Conferências",
      desc: isEn ? "High-impact tech gatherings and networking." : "Encontros tecnológicos de alto impacto e networking."
    },
    {
      icon: <FiStar />,
      title: isEn ? "Tech Workshops" : "Workshops Tecnológicos",
      desc: isEn ? "Hands-on training in modern software stacks." : "Formação prática em stacks modernas de software."
    },
    {
      icon: <FiUsers />,
      title: isEn ? "Mentorship" : "Mentoria",
      desc: isEn ? "Guidance from industry experts for your career." : "Orientação de especialistas da indústria para a sua carreira."
    },
    {
      icon: <FiBookOpen />,
      title: isEn ? "Tech Training" : "Formação em Tecnologia",
      desc: isEn ? "Specialized courses for the global market." : "Cursos especializados voltados ao mercado global."
    }
  ];

  return (
    <section id="servicos" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">{isEn ? "Services" : "Serviços"}</h2>
          <p className="section-subtitle">
            {isEn ? "Solutions for professional and technological growth." : "Soluções para o crescimento profissional e tecnológico."}
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