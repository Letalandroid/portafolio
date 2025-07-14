import './header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <li className="nav-menu">
          <a id="menu" href="#">
            <em className="fas fa-bars"></em>
          </a>
          <input type="checkbox" id="menu-check" />
        </li>
        <script src="/js/main.js"></script>
        <ul id="nav">
          <li>
            <a href="#root">Inicio</a>
          </li>
          <li>
            <a href="#tecnologias">Tecnologías</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#redes">Contáctame</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
