/* Sponsors.tsx */
import React from "react";
import "./Sponsors.css";

export default function Sponsors({ lang }: { lang: string }) {
  const title = lang === "en" ? "Partners" : "Parceiros";

  // Nomes atualizados para corresponder aos logos reais
  const sponsors = [
    { name: "CCIAM", logo: "/logos/CCIAM.jpeg" },
    { name: "Cavalinho", logo: "/logos/Logo.webp" },
    { name: "MINTTICS", logo: "/logos/MINTTICS.webp" },
    
  ];

  return (
    <section className="sponsors-bar">
      <div className="sponsors-container">
        <span className="sponsors-label">{title}:</span>
        <div className="sponsors-list">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-item">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="sponsor-logo"
                title={sponsor.name}
                // Se a imagem falhar, ela simplesmente não ocupa espaço
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}