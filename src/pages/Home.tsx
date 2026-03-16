/* Home.tsx */
import About from "./About";
import Strategy from "./Strategy";
import Contact from "./Contact";
import Services from "./Services";
import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";

export default function Home({ lang }: any) {
  return (
    <div className="page-wrapper">
      <div id="inicio">
        <Hero lang={lang} />
      </div>

      <div id="sobre">
        <About lang={lang} />
      </div>

      <div id="servicos">
        <Services lang={lang} />
      </div>

      <div id="estrategia">
        <Strategy lang={lang} />
      </div>

      <div id="contact">
        <Contact lang={lang} />
      </div>

      {/* Patrocinadores agora no final, abaixo dos contactos */}
      <Sponsors lang={lang} />
    </div>
  );
}