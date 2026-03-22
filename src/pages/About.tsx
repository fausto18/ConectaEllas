import { FiTarget, FiEye, FiShield, FiStar } from "react-icons/fi";
import "./About.css";

export default function About({ lang }: { lang: string }) {
  const t = {
    pt: {
      slogan: "Conectando mentes, transformando o futuro.",
      title: "Quem Somos",
      p1: "O Conecta Ellas é uma plataforma nacional de conexão, capacitação e visibilidade para mulheres nas áreas de tecnologia, inovação e negócios.",
      missao: "Missão",
      missaoDesc: "Fortalecer de forma sustentável a participação femenina na economia angolana, criando um ecossistema integrado de capacitação, incubação, investimento e empregabilidde.",
      visao: "Visão",
      visaoDesc: "Ser o movimento de referência em Angola para o empoderamento feminino e sustentabilidade de negócios digitais.",
      valores: "Valores",
      valoresDesc: "Inovação, Inclusividade, Colaboração Estratégica e Empoderamento Feminino.",
      objetivo: "Objectivo",
      objetivoDesc: "Promover a vanguarda tecnológica e certificar 300 bolsas em empreendedorismo digital.",
    
    },
    en: {
      slogan: "Connecting minds, transforming the future.",
      title: "Who we are",
      p1: "Conecta Ellas is a national platform for connection, training, and visibility for women in technology, innovation, and business.",
      missao: "Mission",
      missaoDesc: "Reduce inequalities and create real bridges between female talent and the national tech ecosystem.",
      visao: "Vision",
      visaoDesc: "To be the benchmark movement in Angola for female empowerment and digital business sustainability.",
      valores: "Values",
      valoresDesc: "Innovation, Inclusivity, Strategic Collaboration, and Female Empowerment.",
      objetivo: "Objective",
      objetivoDesc: "Promote technological vanguard and certify 300 scholarships in digital entrepreneurship.",
      
    }
  };

  const content = lang === "en" ? t.en : t.pt;

  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        
        <div className="about-header">
          <span className="slogan-badge">{content.slogan}</span>
          <h2 className="about-title">{content.title}</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-main-card">
          <p>{content.p1}</p>
          <div className="ambassador-mention">
           
          </div>
        </div>
        
        <div className="about-grid">
          <div className="feature-card">
            <FiTarget className="feature-icon" />
            <h3>{content.missao}</h3>
            <p>{content.missaoDesc}</p>
          </div>

          <div className="feature-card">
            <FiEye className="feature-icon" />
            <h3>{content.visao}</h3>
            <p>{content.visaoDesc}</p>
          </div>

          <div className="feature-card">
            <FiShield className="feature-icon" />
            <h3>{content.valores}</h3>
            <p>{content.valoresDesc}</p>
          </div>

          <div className="feature-card">
            <FiStar className="feature-icon" />
            <h3>{content.objetivo}</h3>
            <p>{content.objetivoDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}