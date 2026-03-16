import React from 'react';
import Gallery from '../components/Gallery'; // Importa o componente com os cards
import { motion } from 'framer-motion';

const GalleryPage: React.FC<{ lang: string }> = ({ lang }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="page-wrapper"
      style={{ 
        paddingTop: '120px', // Espaço para a Navbar fixa
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* REAJUSTE AQUI: 
          Passamos a prop 'lang' recebida no GalleryPage para o componente Gallery 
      */}
      <Gallery lang={lang} /> 

    </motion.div>
  );
};

export default GalleryPage;