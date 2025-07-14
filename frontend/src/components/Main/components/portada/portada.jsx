import './portada.css';
import Yo from './yo1-1.jpeg';

export default function Portada() {
  return (
    <div className="portada-container">
      <div className="portada">
        <h1>Me llamo Carlos y soy</h1>
        <h2>Desarrollador Front-End</h2>
        <a className="btn" href="#redes">
          <input className="contact" type="button" value="Contáctame" />
        </a>
      </div>
      <div className="yo-container">
        <img className="yo" src={Yo} alt="yo" />
      </div>
    </div>
  );
}
