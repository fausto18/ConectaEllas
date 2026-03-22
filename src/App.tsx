import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ParticlesBackground from "./components/ParticlesBackground";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PÁGINAS E COMPONENTES
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import GalleryPage from "./pages/GalleryPage"; 
import GalleryDetails from "./components/GalleryDetails";
import Participate from "./pages/Registration";

// Tipagem para as rotas animadas
interface AnimatedRoutesProps {
  lang: string;
  theme: string;
}

function AnimatedRoutes({ lang, theme }: AnimatedRoutesProps) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/galeria" element={<GalleryPage lang={lang} />} />
        <Route path="/galeria/:id" element={<GalleryDetails lang={lang} theme={theme} />} />
        <Route path="/participar" element={<Participate lang={lang} />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "pt");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <BrowserRouter>
      {theme === "dark" && <ParticlesBackground />}
      
      <ScrollToTop />
      
      <Navbar 
        toggleTheme={toggleTheme} 
        currentTheme={theme} 
        currentLang={lang} 
        setLang={setLang} 
      />

      {/* Removi a importação duplicada do Footer que estava no final do teu arquivo 
          para evitar o erro [BabelError] Identifier 'Footer' has already been declared.
      */}
      <main style={{ minHeight: '80vh' }}>
        <AnimatedRoutes lang={lang} theme={theme} />
      </main>
      
      <Footer lang={lang} />
    </BrowserRouter>
  );
}