import React from 'react';
import { FaSeedling, FaLaptopCode, FaIndustry, FaHandHoldingHeart, FaMicroscope } from 'react-icons/fa';
import "../styles/Sectores.css";

const Sectores = () => {
  const sectores = [
    { nome: "Agro-Indústria", desc: "Sustentabilidade e Segurança Alimentar", icon: <FaSeedling /> },
    { nome: "Tecnologia", desc: "Inovação Digital e Economia 4.0", icon: <FaLaptopCode /> },
    { nome: "Indústria & Logística", desc: "Produção Nacional e Distribuição", icon: <FaIndustry /> },
    { nome: "Saúde & Bem-Estar", desc: "Serviços e Cuidados Especializados", icon: <FaMicroscope /> },
    { nome: "Educação & Serviços", desc: "Capacitação e Empregabilidade", icon: <FaHandHoldingHeart /> }
  ];

  return (
    <section id="sectores" className="sectores-section">
      <div className="container">
        <h2 className="section-title">Sectores <span>Prioritários</span></h2>
        <p className="sectores-intro">Foco estratégico para a diversificação económica de Angola até 2030.</p>
        
        <div className="sectores-grid">
          {sectores.map((s, i) => (
            <div key={i} className="sector-card">
              <div className="sector-icon">{s.icon}</div>
              <div className="sector-info">
                <h3>{s.nome}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectores;