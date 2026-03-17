import { FiTarget, FiEye, FiShield, FiStar } from "react-icons/fi";
import "./About.css";

export default function About({ lang }: { lang: string }) {
  const t = {
    pt: {
      slogan: "Conectando mentes, transformando o futuro.",
      title: "Sobre o Conecta Ella's",
      p1: "O Conecta Ella's é uma plataforma nacional de conexão, capacitação e visibilidade para mulheres nas áreas de tecnologia, inovação e negócios.",
      ambassadorLabel: "Embaixadora Conecta Ella's",
      ambassadorName: "Floripis Assis",
      missao: "Missão",
      missaoDesc: "Reduzir desigualdades e criar pontes reais entre o talento feminino e o ecossistema tecnológico nacional.",
      visao: "Visão",
      visaoDesc: "Ser o movimento de referência em Angola para o empoderamento feminino e sustentabilidade de negócios digitais.",
      valores: "Valores",
      valoresDesc: "Inovação, Inclusividade, Colaboração Estratégica e Empoderamento Feminino.",
      objetivo: "Objetivo 2026",
      objetivoDesc: "Promover a vanguarda tecnológica e certificar 300 bolsas em empreendedorismo digital.",
    },
    en: {
      slogan: "Connecting minds, transforming the future.",
      title: "About Conecta Ellas",
      p1: "Conecta Ella's is a national platform for connection, training, and visibility for women in technology, innovation, and business.",
      ambassadorLabel: "Conecta Ella's Ambassador",
      ambassadorName: "Floripis Assis",
      missao: "Mission",
      missaoDesc: "Reduce inequalities and create real bridges between female talent and the national tech ecosystem.",
      visao: "Vision",
      visaoDesc: "To be the benchmark movement in Angola for female empowerment and digital business sustainability.",
      valores: "Values",
      valoresDesc: "Innovation, Inclusivity, Strategic Collaboration, and Female Empowerment.",
      objetivo: "2026 Objective",
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
            <small>{content.ambassadorLabel}</small>
            <p><strong>{content.ambassadorName}</strong></p>
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