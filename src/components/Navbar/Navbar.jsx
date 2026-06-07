import { Link, useLocation } from "react-router-dom";
import logoImg from "../../assets/LogoPMHub.png";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();

  // Rotas onde os links do navbar ficam ocultos
  const rotasSemLinks = ["/login", "/cadastro"];
  const esconderLinks = rotasSemLinks.includes(pathname);

  return (
    <nav className="navegacao">
      <Link to="/" className="navegacao__logo">
        <img
          src={logoImg}
          alt="PM Hub Logo"
          className="logo-cabecalho"
        />
        <span className="navegacao__texto-logo">PM Hub</span>
      </Link>

      {!esconderLinks && (
        <ul className="navegacao__links">
          <li>
            <a href="#recursos">Recursos</a>
          </li>

          <li>
            <Link to="/login" className="navegacao__botao">
              Fazer Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}