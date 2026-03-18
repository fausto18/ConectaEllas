import React from 'react';
import './Hero.css';
// Certifica-te de que a tua imagem VR/Tech está em src/assets/Tech.jpeg
import imagemVR from '../assets/I.A.jpeg'; 

interface HeroProps {
  lang: string;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const isEn = lang === 'en';
  
  return (
    <section id="inicio" className="hero-section">
      {/* CAMADAS DE FUNDO TECNOLÓGICO */}
      <div 
        className="hero-background-image" 
        style={{ backgroundImage: `url(${imagemVR})` }}
      ></div>
      <div className="hero-constellation-overlay"></div>
      <div className="hero-vignette-overlay"></div>

      {/* CONTEÚDO PRINCIPAL (Centralizado e Responsivo) */}
      <div className="hero-content">
        <h1 className="hero-title">
          Conecta <span>Ellas</span>
        </h1>
        
        {/* TEXTO DESCRITIVO (BRANCO E NEGRITADO) */}
        <p className="hero-description">
          {isEn 
            ? "Connecting talents and transforming realities through technology and business." 
            : "Angola Conecta Ellas é o início de um ciclo estratégico nacional orientado para mulheres que lideram o futuro de Angola."}
        </p>
        
        <div className="hero-buttons">
          <a href="#contacto" className="btn-primary-optic glossy-glow">
            {isEn ? "Join Now" : "✉️ Entrar em Contacto"}
          </a>
          <a href="#servicos" className="btn-outline-white">
            {isEn ? "Learn More" : "Saiba Mais"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;