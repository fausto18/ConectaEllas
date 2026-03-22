/* Home.tsx */
import Hero from "../components/Hero";
import About from "./About";
import Strategy from "./Strategy";
import Contact from "./Contact";
import Services from "./Services";
import Sectores from "./Sectores";
import Registration from "./Registration"; // A barra com o link da Kukulalink
import Sponsors from "../components/Sponsors";
import Participate from "./Registration";

export default function Home({ lang }: any) {
  return (
    <div className="page-wrapper">
      {/* 1. SEÇÃO INICIAL */}
      <div id="inicio">
        <Hero lang={lang} />
      </div>

      {/* 2. CONTEXTO E ESTRATÉGIA (Pilares do PPT) */}
      <div id="sobre">
        <About lang={lang} />
        <Strategy lang={lang} />
      </div>

      
      {/* 4. ÁREAS DE ATUAÇÃO E SETORES PRIORITÁRIOS */}
      <div id="servicos">
        <Services lang={lang} />
      </div>

      <div id="sectores">
        <Sectores lang={lang} />
      </div>

     

      {/* 6. CONTACTO E LOCALIZAÇÃO (Memorial Agostinho Neto) */}
      <div id="contacto">
        <Contact lang={lang} />
      </div>

      {/* 7. APOIOS E PARCERIAS (Câmara de Comércio / Nexus Point) */}
      <Sponsors lang={lang} />
    </div>
  );
}