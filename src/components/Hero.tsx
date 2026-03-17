import "./Hero.css";

export default function Hero({ lang }: { lang: string }) {
  const isEn = lang === "en";
  
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Conecta <span>Ellas</span>
        </h1>
        <p className="hero-description">
          {isEn 
            ? "Connecting talents and transforming realities through technology and business." 
            : "Angola Conecta Ellas é o início de um ciclo estratégico nacional orientado para mulheres qu lideram o futuro de Angola."}
        </p>
        <div className="hero-buttons">
          <a href="#contacto" className="btn-primary">
            {isEn ? "Join Now" : "✉️Entrar em Contacto"}
          </a>
          
          <a href="#servicos" className="btn-secondary">
            {isEn ? "Learn More" : "Saiba Mais"}
          </a>
        </div>
      </div>
    </section>
  );
}