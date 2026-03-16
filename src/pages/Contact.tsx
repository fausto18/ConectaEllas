import React from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram, // Importado
  FaFacebook,  // Importado
} from "react-icons/fa";
import "./Contact.css";

export default function Contact({ lang }: any) {
  // 1. Traduções
  const t = {
    pt: { 
      title: "Contacto", 
      emailBtn: "Enviar Email",
      social: "Redes Sociais"
    },
    en: { 
      title: "Contact", 
      emailBtn: "Send Email",
      social: "Social Media"
    }
  };

  const content = lang === "en" ? t.en : t.pt;

  return (
    <section className="contact" id="contacto">
      <h2>{content.title}</h2>

      {/* Botões principais */}
      <div className="contact-actions">
        <a
          href="mailto:geral.conectaellas@gmail.com"
          className="contact-btn"
        >
          <FaEnvelope size={18} />
          <span>{content.emailBtn}</span>
        </a>

        <a
          href="https://wa.me/244952129544"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp"
        >
          <FaWhatsapp size={18} />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Cartões sociais - Atualizados para Instagram e Facebook */}
      <div className="contact-cards">
        <a
          href="https://www.instagram.com/conecta_ellas" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaInstagram size={22} />
          <div>
            <span>Instagram</span>
            <strong>@conecta_ellas</strong>
          </div>
        </a>

        <a
          href="https://www.facebook.com/conectaellas" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaFacebook size={22} />
          <div>
            <span>Facebook</span>
            <strong>Conecta Ella's</strong>
          </div>
        </a>
      </div>
    </section>
  );
}