import "./Strategy.css";

export default function Strategy({ lang }: { lang: string }) {
  const isEn = lang === "en";

  return (
    <section id="estrategia" className="strategy-section">
      <div className="container">
        
        {/* Título da Seção */}
        <h2 className="section-main-title">
          {isEn ? "Strategic Planning" : "Planeamento Estratégico"}
        </h2>

        {/* Plano de Entrada */}
        <div className="strategy-group">
          <h3 className="group-title">{isEn ? "Market Entry Plan" : "Plano de Entrada no Mercado"}</h3>
          <div className="fases-grid">
            <div className="fase">
              <span className="phase-badge">Fase 1</span>
              <p>{isEn ? "Local awareness and core community building in Angola." : "Conscientização local e construção da comunidade core em Angola."}</p>
            </div>
            <div className="fase">
              <span className="phase-badge">Fase 2</span>
              <p>{isEn ? "Strategic partnerships with tech hubs and universities." : "Parcerias estratégicas com hubs de tecnologia e universidades."}</p>
            </div>
            <div className="fase">
              <span className="phase-badge">Fase 3</span>
              <p>{isEn ? "Global scaling and AI-driven service automation." : "Escalabilidade global e automação de serviços via IA."}</p>
            </div>
          </div>
        </div>

        {/* Estrutura e Hierarquia - Preenchida com os nomes */}
        <div className="strategy-group">
          <h3 className="group-title">{isEn ? "Organization & Hierarchy" : "Organização e Hierarquia"}</h3>
          <div className="org-card">
            <div className="hierarchy-box">
              {/* Nível 1: Liderança Executiva */}
              <div className="node master">
                <strong>Sandra Catraio</strong>
                <span>CEO & Founder</span>
              </div>
              
              <div className="connector"></div>
              
              {/* Nível 2: Direção */}
              <div className="sub-nodes">
                <div className="node">
                  <strong>Fausto Sacufundala</strong>
                  <span>CTO (Tech)</span>
                </div>
                <div className="node">
                  <strong>Conecta Ella's Team</strong>
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

        {/* Marketing */}
        <div className="strategy-group">
          <h3 className="group-title">{isEn ? "Marketing" : "Marketing e Divulgação"}</h3>
          <div className="marketing-card-simple">
            <p>
              {isEn 
                ? "Strategy focused on technical content, SEO for developers, and high-impact networking events." 
                : "Estratégia focada em marketing de conteúdo técnico, SEO para desenvolvedores e eventos de networking de alto impacto."}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}