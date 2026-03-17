import "./Strategy.css";

export default function Strategy({ lang }: { lang: string }) {
  const isEn = lang === "en";

  return (
    <section id="estrategia" className="strategy-section">
      <div className="container">
        
        <h2 className="section-main-title">
          {isEn ? "Strategic Planning" : "Planeamento Estratégico"}
        </h2>

        {/* Eixos Estratégicos */}
        <div className="strategy-group">
          <h3 className="group-title">{isEn ? "Strategic Pillars" : "Eixos Estratégicos"}</h3>
          <div className="fases-grid">
            <div className="fase">
              <span className="phase-badge">Invest Women Angola</span>
              <p><strong>{isEn ? "Investment Platform" : "Plataforma de Investimento"}</strong></p>
              <p>{isEn ? "Structured investment fund and Angel Investor Hub." : "Fundo estruturado de investimento e Hub de Investidores Anjo."}</p>
              <p>{isEn ? "Business mentorship network and banking partnerships." : "Rede de madrinhas empresariais e articulação bancária."}</p>
            </div>
            
            <div className="fase">
              <span className="phase-badge">Incuba Inova Women</span>
              <p><strong>{isEn ? "Innovation Center" : "Centro de Inovação"}</strong></p>
              <p>{isEn ? "National Innovation Contest and Sectoral Hackathons." : "Concurso Nacional de Inovação e Hackathons setoriais."}</p>
              <p>{isEn ? "Pitch competitions and provincial acceleration programs." : "Pitch competitions e programas de aceleração provinciais."}</p>
            </div>
            
            <div className="fase">
              <span className="phase-badge">Mentor Women Angola</span>
              <p><strong>{isEn ? "Leadership Hub" : "Hub de Liderança"}</strong></p>
              <p>{isEn ? "300 training scholarships and career development." : "300 Bolsas de capacitação e desenvolvimento de carreira."}</p>
              <p>{isEn ? "AI in business and personal branding positioning." : "Inteligência Artificial em negócios."}</p>
              <p>{isEn ? "AI in business and personal branding positioning." : "Marca pessoal Pessoal e posicionamento."}</p>
              <p>{isEn ? "AI in business and personal branding positioning." : "Empregabilidade via Kukulalink."}</p>
            </div>
          </div>
        </div>

        {/* Organização e Hierarquia com Embaixadora */}
        <div className="strategy-group">
          <h3 className="group-title">{isEn ? "Organization & Hierarchy" : "Organização e Hierarquia"}</h3>
          <div className="org-card">
            <div className="hierarchy-box">
              
              {/* Nível 1: Embaixadora (Novo Destaque) */}
              <div className="node ambassador">
                <strong>Floripis Assis</strong>
                <span>{isEn ? "Conecta Ella's Ambassador" : "Embaixadora Conecta Ella's"}</span>
              </div>

              <div className="connector"></div>

              {/* Nível 2: Liderança Executiva */}
              <div className="node master">
                <strong>Sandra Catraio</strong>
                <span>CEO & Founder</span>
              </div>
              
              <div className="connector"></div>
              
              {/* Nível 3: Direção */}
              <div className="sub-nodes">
                <div className="node">
                  <strong>Fausto Sacufundala</strong>
                  <span>CTO (Tech)</span>
                </div>
                <div className="node">
                  <strong>Conecta Ellas Team</strong>
                  <span>Operations (COO)</span>
                </div>
                <div className="node">
                  <strong>Marketing Dept</strong>
                  <span>CMO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing e Divulgação (Baseado no PDF) */}
        <div className="strategy-group">
          <h3 className="group-title">{isEn ? "Marketing & Outreach" : "Marketing e Divulgação"}</h3>
          <div className="marketing-card-simple">
            <p>
              {isEn 
                ? "Omnichannel strategy focused on institutional credibility (MINTTICS, ANJE) and high-impact digital presence via O Telegrama and viral partners." 
                : "Estratégia foca na credibilidade institucional (MINTTICS, ANJE) e presença digital de alto impacto via O Telegrama e parceiros de divulgação."}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}