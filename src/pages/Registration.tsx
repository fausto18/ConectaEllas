import React from 'react';
import "../styles/Registration.css"; 

export default function Participate({ lang }: { lang: string }) {
  const isEn = lang === "en";

  return (
    <section className="registration-page">
      <div className="registration-card">
        <span className="registration-tag">
          {isEn ? "Global Talent Connection" : "A Ligar Talento Global"}
        </span>
        
        <h1>{isEn ? "Kukulalink Ecosystem" : "Ecossistema Kukulalink"}</h1>
        
        <p className="main-description">
          {isEn 
            ? "Kukulalink brings students, companies, and universities together, creating opportunities that drive global economic growth." 
            : "A Kukulalink aproxima estudantes, empresas e universidades, criando oportunidades que impulsionam o crescimento económico global."}
        </p>

        <div className="registration-action">
          <a 
            href="https://kukulalink.com/pt/onboarding" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-kukulalink-premium"
          >
            {isEn ? "Sign Up Now" : "Inscrever-se Agora"}
          </a>
        </div>
        
        <p className="footer-credits">
          {isEn ? "Kukulalink Platform" : "Plataforma da Kukulalink"}
        </p>
      </div>
    </section>
  );
}