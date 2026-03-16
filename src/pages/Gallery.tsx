import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Gallery.css";

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

interface GalleryProps {
  lang: "pt" | "en";
}

const Gallery: React.FC<GalleryProps> = ({ lang }) => {

  const navigate = useNavigate();

  const l: "pt" | "en" = lang === "en" ? "en" : "pt";

  const handleCardClick = (id: string) => {
    navigate(`/galeria/${id}`);
  };

  return (
    <section className="gallery-section">

      <p className="gallery-subtitle">
        {l === "pt"
          ? "Momentos, eventos e conquistas na minha jornada tecnológica"
          : "Moments, events and achievements in my technological journey"}
      </p>

      <div className="gallery-grid">
        const galleryData = [];

        {galleryData.map((item) => (

          <div
            key={item.id}
            className="gallery-card click-enabled"
            onClick={() => handleCardClick(item.id)}
          >

            <div className="card-image-wrapper">

              <img
                src={item.image}
                alt={item.title[l]}
                loading="lazy"
              />

              <span className="photo-count">
                +{item.extraImages?.length ?? 0} {l === "pt" ? "fotos" : "photos"}
              </span>

            </div>

            <div className="card-content">

              <div className="card-header">

                <span className="card-category">
                  {item.category[l]}
                </span>

                <span className="card-date">
                  📅 {item.date}
                </span>

              </div>

              <h3 className="card-title">
                {item.title[l]}
              </h3>

              <p className="card-description">
                {item.description[l]}
              </p>

              <div className="card-footer">

                <span className="card-location">
                  📍 {item.location}
                </span>

                <div className="view-event-btn">
                  {l === "pt" ? "Ver Mais →" : "View More →"}
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Gallery;