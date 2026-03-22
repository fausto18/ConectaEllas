import React, { useState, useEffect } from 'react';
import './Hero.css';

// Importações com os nomes exatos (Cuidado com espaços nos nomes dos ficheiros)
import img1 from '../assets/slide0.jpeg'; 
import img2 from '../assets/slide9.jpeg'; 
import img3 from '../assets/slide2.jpeg';
import img4 from '../assets/slide3.jpeg';
import img5 from '../assets/slide4.jpeg';
import img6 from '../assets/slide5.jpeg'; 
import img7 from '../assets/slide8.jpeg';
import img8 from '../assets/slide7.jpeg';
import img9 from '../assets/slide8.jpeg';

interface HeroProps {
  lang: string;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const isEn = lang === 'en';
  const [currentSlide, setCurrentSlide] = useState(0);

  // CORREÇÃO: Colocar as 3 imagens diferentes aqui
  const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9]; 

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="inicio" className="hero-section">
      {/* CAMADAS DE FUNDO COM SLIDESHOW */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`hero-background-image ${index === currentSlide ? 'active' : ''}`} 
          style={{ 
            backgroundImage: `url("${slide}")`, // Aspas duplas ajudam com nomes com espaços
            display: index === currentSlide ? 'block' : 'none' // Força a exibição
          }}
        ></div>
      ))}
      
      <div className="hero-constellation-overlay"></div>
      <div className="hero-vignette-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Angola Conecta <span>Ellas</span>
        </h1>
        
        <p className="hero-description">
          {isEn 
            ? "Angola Conecta Ellas is the beginning of a national strategic cycle oriented for women leading the future of Angola." 
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