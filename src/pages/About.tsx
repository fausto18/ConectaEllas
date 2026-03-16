import { FiTarget, FiZap, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import "./About.css";

export default function About({ lang }: { lang: string }) {
  const t = {
    pt: {
      slogan: "Conectando mentes, transformando o futuro.",
      title: "Sobre o Conecta Ellas",
      p1: "O Conecta Ellas é uma plataforma de aceleração tecnológica e profissional que visa unir talentos de Angola ao ecossistema global, arquitetando soluções que transcendem o código.",
      purpose: "Propósito",
      purposeDesc: "Promover autonomia financeira e inclusão digital para mulheres, criando oportunidades no ecossistema tecnológico angolano.",
      metas: "Metas Iniciais",
      metasDesc: "Programa de formação e mentoria com foco em literacia digital e capacitação tecnológica.Certificar 300 bolsas formativas  em tecnologia e empreendedorismo digital até o final do ano.",
      servicos: "Produtos e Serviços",
      plano: "Plano Estratégico",
    },
    en: {
      slogan: "Connecting minds, transforming the future.",
      title: "About Conecta Ellas",
      p1: "Conecta Ellas is a tech and professional acceleration platform aiming to connect Angolan talent to the global ecosystem, architecting solutions that transcend code.",
      purpose: "Purpose",
      purposeDesc: " Promote financial autonomy and digital inclusion for women, creating opportunities in Angola's tech ecosystem.",
      metas: "Initial Goals",
      metasDesc: "Training and mentorship program focused on digital literacy and tech empowerment. Certify 300 training scholarships in technology and digital entrepreneurship by the end of the year.",
      servicos: "Products & Services",
      plano: "Strategic Plan",
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
        </div>
        
        <div className="about-grid">
          <div className="feature-card">
            <FiTarget className="feature-icon" />
            <h3>{content.purpose}</h3>
            <p>{content.purposeDesc}</p>
          </div>

          <div className="feature-card">
            <FiCheckCircle className="feature-icon" />
            <h3>{content.metas}</h3>
            <p>{content.metasDesc}</p>
          </div>

          <div className="feature-card">
            <FiZap className="feature-icon" />
            <h3>{content.servicos}</h3>
            <p>Consultoria técnica, Desenvolvimento de APIs e Mentorias Especializadas.</p>
          </div>

          <div className="feature-card">
            <FiTrendingUp className="feature-icon" />
            <h3>{content.plano}</h3>
            <p>Expansão modular focada em parcerias acadêmicas e hubs de inovação.</p>
          </div>
        </div>
      </div>
    </section>
  );
}