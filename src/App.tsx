import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ParticlesBackground from "./components/ParticlesBackground";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PÁGINAS E COMPONENTES
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import GalleryPage from "./pages/GalleryPage"; 
import GalleryDetails from "./components/GalleryDetails";

// Tipagem para as rotas animadas para evitar erros de TS
interface AnimatedRoutesProps {
  lang: string;
  theme: string;
}

function AnimatedRoutes({ lang, theme }: AnimatedRoutesProps) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Rota Principal */}
        <Route path="/" element={<Home lang={lang} />} />
        
        {/* Página da Galeria (Lista de Cards) */}
        <Route path="/galeria" element={<GalleryPage lang={lang} />} />
        
        {/* Rota dinâmica para os detalhes (Lightbox) */}
        <Route path="/galeria/:id" element={<GalleryDetails lang={lang} theme={theme} />} />
        
        {/* Rota de Artigos */}
        <Route path="/articles" element={<Articles lang={lang} />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  // Inicialização segura do estado com localStorage
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "pt");

  // Efeito para sincronizar o tema no HTML e LocalStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Efeito para sincronizar o idioma no LocalStorage
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <BrowserRouter>
      {/* Partículas ativas apenas no dark mode */}
      {theme === "dark" && <ParticlesBackground />}
      
      <ScrollToTop />
      
      <Navbar 
        toggleTheme={toggleTheme} 
        currentTheme={theme} 
        currentLang={lang} 
        setLang={setLang} 
      />

      {/* Main Content Area */}
      <main style={{ minHeight: '80vh' }}>
        <AnimatedRoutes lang={lang} theme={theme} />
      </main>
      
      <Footer lang={lang} />
    </BrowserRouter>
  );
}
