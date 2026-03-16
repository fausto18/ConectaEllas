import "./Hero.css";

export default function Hero({ lang }: { lang: string }) {
  const isEn = lang === "en";
  
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Conecta <span>Ella's</span>
        </h1>
        <p className="hero-description">
          {isEn 
            ? "Connecting talents and transforming realities through technology and business." 
            : "Conectando talentos e transformando realidades através da tecnologia e negócios."}
        </p>
        <div className="hero-buttons">
          <a href="#contacto" className="btn-primary">
            {isEn ? "Join Now" : "Participar Agora"}
          </a>
          
          <a href="#servicos" className="btn-secondary">
            {isEn ? "Learn More" : "Saiba Mais"}
          </a>
        </div>
      </div>
    </section>
  );
}