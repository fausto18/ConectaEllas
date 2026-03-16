import "../components/Footer.css";

export default function Footer({ lang }: any) {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>
        © {year} Conecta Ellas. {lang === "en" ? "All rights reserved." : "Todos os direitos reservados."}
      </p>
    </footer>
  );
}