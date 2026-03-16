import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryData, GalleryItem } from './Gallery';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Gallery.css';

interface GalleryDetailsProps {
  lang: string;
  theme: string;
}

const GalleryDetails: React.FC<GalleryDetailsProps> = ({ lang, theme }) => {
  const { id } = useParams<{ id: string }>();
  
  // Garantir que o idioma seja 'pt' or 'en'
  const l = (lang === 'en' ? 'en' : 'pt') as 'pt' | 'en';
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const item = galleryData.find((i: GalleryItem) => i.id === id);

  if (!item) {
    return (
      <div className="error-msg" style={{ padding: '150px', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--text-color)' }}>
          {l === 'pt' ? 'Evento não encontrado.' : 'Event not found.'}
        </h2>
        <Link to="/galeria" style={{ color: 'var(--accent-color)', marginTop: '20px', display: 'block' }}>
          ← {l === 'pt' ? 'Voltar para a Galeria' : 'Back to Gallery'}
        </Link>
      </div>
    );
  }

  const allImages = [item.image, ...(item.extraImages || [])];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % allImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + allImages.length) % allImages.length);
    }
  };

  return (
    <div className={`gallery-details-page ${theme}`} style={{ paddingTop: '100px', minHeight: '100vh' }}>
      
      {/* --- LIGHTBOX (Ecrã Cheio) --- */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
              backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 5000,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
          >
            <button 
              onClick={() => setActiveIndex(null)}
              style={{
                position: 'absolute', top: '30px', right: '30px', background: 'none',
                border: 'none', color: 'white', fontSize: '35px', cursor: 'pointer', zIndex: 5010
              }}
            >
              &times;
            </button>

            <button className="nav-btn-lightbox" onClick={handlePrev} style={{ 
                position: 'absolute', left: '20px', background: 'none', border: 'none', 
                color: 'white', fontSize: '40px', cursor: 'pointer' 
            }}>
              &#10094;
            </button>

            <motion.img 
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              src={allImages[activeIndex]} 
              style={{ maxWidth: '90%', maxHeight: '85vh', borderRadius: '8px', objectFit: 'contain' }}
            />

            <button className="nav-btn-lightbox" onClick={handleNext} style={{ 
                position: 'absolute', right: '20px', background: 'none', border: 'none', 
                color: 'white', fontSize: '40px', cursor: 'pointer' 
            }}>
              &#10095;
            </button>

            <div style={{
              position: 'absolute', bottom: '40px', color: 'rgba(255,255,255,0.6)',
              fontSize: '0.9rem', fontWeight: '500'
            }}>
              {activeIndex + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Link to="/galeria" className="back-btn" style={{ marginBottom: '30px', display: 'inline-block', color: 'var(--text-color)', textDecoration: 'none', fontWeight: 'bold' }}>
          {l === 'pt' ? '← Voltar' : '← Back'}
        </Link>
        
        <div className="details-layout" style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
          
          <div className="details-info" style={{ flex: '1.2', minWidth: '320px' }}>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--text-color)', marginBottom: '20px' }}>
              {item.title[l]}
            </h1>
            
            <p style={{ opacity: 0.7, color: 'var(--text-color)', marginBottom: '20px' }}>
              📅 {item.date} | 📍 {item.location}
            </p>
            
            <p className="full-desc" style={{ color: 'var(--text-color)', lineHeight: '1.8', textAlign: 'justify' }}>
              {item.fullDescription[l]}
            </p>
          </div>

          <div className="details-images" style={{ flex: '1', minWidth: '320px' }}>
            {/* Imagem Principal: Preserva proporção original */}
            <div className="main-img-wrapper" onClick={() => setActiveIndex(0)} style={{ cursor: 'zoom-in', marginBottom: '15px' }}>
              <img src={item.image} alt={item.title[l]} style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
            </div>
            
            {/* Grade de Imagens Extras: Ajustada para não cortar */}
            <div className="extra-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
              gap: '15px' 
            }}>
              {item.extraImages?.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveIndex(idx + 1)}
                  style={{ 
                    width: '100%', 
                    aspectRatio: '4 / 3', /* Proporção fotográfica padrão para evitar cortes severos */
                    overflow: 'hidden', 
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    cursor: 'zoom-in' 
                  }}
                >
                  <img 
                    src={img} 
                    alt={`${item.title[l]} - ${idx}`} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', /* Preenche o espaço suavemente */
                      transition: 'transform 0.3s ease'
                    }} 
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDetails;