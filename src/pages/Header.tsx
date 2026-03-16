import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css"; // Certifique-se de ter o CSS para o menu

export default function Header() {
  const [active, setActive] = useState("Início");

  const menuItems = [
    { name: "Início", path: "/#inicio", isHash: true },
    { name: "Galeria", path: "/galeria", isHash: false },
    { name: "Serviços", path: "/#servicos", isHash: true },
    { name: "Artigos", path: "/articles", isHash: false },
    { name: "Contacto", path: "/#contact", isHash: true },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Conecta Ellas</div>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} onClick={() => setActive(item.name)} className={active === item.name ? "active" : ""}>
              {item.isHash ? (
                <HashLink smooth to={item.path}>{item.name}</HashLink>
              ) : (
                <Link to={item.path}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}