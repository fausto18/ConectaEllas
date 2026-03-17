import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Gallery.css';

// Interface para suportar múltiplos idiomas
export interface GalleryItem {
  id: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  fullDescription: { pt: string; en: string };
  date: string;
  location: string;
  category: { pt: string; en: string };
  image: string;
  extraImages: string[];
  tags: string[];
}

// Dados da Galeria Consolidados
export const galleryData: GalleryItem[] = [
  {
    id: "conecta-ellas-conferencia-2026",
    title: { 
      pt: "Conferência Nacional de Mulheres em Tecnologia e Negócio", 
      en: "National Conference of Women in Technology and Business" 
    },
    description: { 
      pt: "Um marco para o ecossistema de inovação em Angola, focado na inclusão digital e empreendedorismo feminino.", 
      en: "A milestone for Angola's innovation ecosystem, focused on digital inclusion and female entrepreneurship." 
    },
    fullDescription: { 
      pt: "Realizada no Memorial Dr. António Agostinho Neto (MAAN), a conferência reuniu líderes e especialistas para discutir a transformação digital. Eixos centrais: Literacia Digital, Acesso ao Financiamento e Networking.", 
      en: "Held at the Dr. António Agostinho Neto Memorial (MAAN), the conference brought together leaders and experts to discuss digital transformation." 
    },
    date: "2026-03-11",
    location: "Memorial Dr. António Agostinho Neto, Luanda, Angola",
    category: { pt: "Tecnologia e Negócios", en: "Tech & Business" },
    image: "/uploads/conectaEllas/WhatsApp Image 2026-03-12 at 2.24.44 PM (3).jpeg",
    extraImages: [
      "/uploads/conectaEllas/WhatsApp Image 2026-03-12 at 2.24.43 PM (2).jpeg", 
      "/uploads/conectaEllas/WhatsApp Image 2026-03-12 at 2.24.44 PM (1).jpeg", 
      "/uploads/conectaEllas/WhatsApp Image 2026-03-12 at 2.24.44 PM (2).jpeg",
      "/uploads/conectaEllas/WhatsApp Image 2026-03-12 at 12.13.33 PM.jpeg",
      "/uploads/conectaEllas/WhatsApp Image 2026-03-12 at 2.24.45 PM (1).jpeg", 
      "/uploads/conectaEllas/WhatsApp Image 2026-03-12 at 2.24.45 PM.jpeg",
      "/Eventos2026/WhatsApp Image 2026-03-12 at 12.48.46 AM.jpeg",
      "/uploads/conectaEllas/WhatsApp Image 2026-03-12 at 11.56.27 PM.jpeg",
      "/uploads/conectaEllas/WhatsApp Image 2026-03-12 at 2.24.43 PM (1).jpeg",
    ],
    tags: ["Mulheres em Tech", "Inovação", "Angola", "Empreendedorismo"] 
  },
  {
    id: "conecta-ellas-oradores-2026",
    title: { 
      pt: "Painel de Oradores e Estrategistas", 
      en: "Speakers and Strategists Panel" 
    },
    description: { 
      pt: `É com enorme satisfação que o projeto Conecta Ellas reúne um painel de excelência. Sob a liderança de Floripis Assis, contamos com figuras como Sandra Catraio, Kwaba Massocolo, Jessica Luís e especialistas como Fausto Sacufundala e Maria António.`, 
      en: "The Conecta Ellas project brings together a panel of excellence, featuring leaders like Floripis Assis and experts like Fausto Sacufundala." 
    },
    fullDescription: { 
      pt: "O evento foi enriquecido pelas vozes de Emília Alfredo Gomes Manuel, Josefa Lineth Miguel de Oliveira, Ângela Magalhães, Victorina Casimiro, Katla Gomes, Cláudia Nanga Francisco, Helena Sebastião, Verônica Teixeira,e Claudia Adricla.", 
      en: "A diverse group of professionals focused on empowering the female ecosystem in Angola." 
    },
    date: "2026-03-11",
    location: "Memorial Dr. António Agostinho Neto, Luanda, Angola",
    category: { pt: "Oradores", en: "Speakers" },
    image: "/Eventos2026/Conferencia.jpeg",
    extraImages: [
      "/Eventos2026/Lilhan Barbosa.jpeg", 
      "/Eventos2026/Louuise.jpeg", 
      "/Eventos2026/Mari Pongue.jpeg",
      "/Eventos2026/Maria Lima.jpeg",
      "/Eventos2026/Rosemere.jpeg", 
      "/Eventos2026/Venancio.jpeg",
      "/Eventos2026/Musica.jpeg",
    ],
    tags: ["Liderança", "Networking", "Angola", "Especialistas"] 
  }
];

interface GalleryProps {
  lang: string;
}

const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const navigate = useNavigate();
  const l = (lang === 'en' ? 'en' : 'pt') as 'pt' | 'en';

  const handleCardClick = (id: string) => {
    navigate(`/galeria/${id}`);
  };

  return (
    <div className="gallery-section">
      <p className="gallery-subtitle">
        {l === 'pt' 
          ? "Momentos, eventos e conquistas" 
          : "Moments, events and achievements"}
      </p>

      <div className="gallery-grid">
        {galleryData.map((item) => (
          <div 
            key={item.id} 
            className="gallery-card click-enabled"
            onClick={() => handleCardClick(item.id)}
          >
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.title[l]} />
              <span className="photo-count">
                +{item.extraImages.length} {l === 'pt' ? 'fotos' : 'photos'}
              </span>
            </div>
            
            <div className="card-content">
              <div className="card-header">
                <span className="card-category">{item.category[l]}</span>
                <span className="card-date">📅 {item.date}</span>
              </div>
              <h3 className="card-title">{item.title[l]}</h3>
              <p className="card-description">{item.description[l]}</p>
              
              <div className="card-footer">
                <span className="card-location">📍 {item.location}</span>
                <div className="view-event-btn">
                  {l === 'pt' ? 'Ver Mais →' : 'View More →'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;