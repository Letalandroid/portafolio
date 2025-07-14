import { Fetching } from "./fetching";
import { useState } from "react";
import "./proyectos.css";

export default function Proyectos() {
  const [url] = useState(`${process.env.REACT_APP_API_URL}/proyectos`);
  const estado = Fetching(url);
  const { cargando, data } = estado;

  return (
    <>
      <section id="proyectos" className="proyects-container">
        <h2>Proyectos realizados:</h2>
        <div className="proyects">
          {cargando ? (
            <p>Un momento por favor...</p>
          ) : (
            data.map((_id, length) => (
              <div className="proyect" key={data[length]._id}>
                <img src={data[length].imagen} alt="proyecto1" />
                <h3>{data[length].titulo}</h3>
                <p>{data[length].descripcion}</p>
                <div className="links">
                  <a
                    href={data[length].link}
                    className="btn-site"
                    target="_blank"
                  >
                    <input type="button" value="Ver sitio" />
                  </a>
                  <a
                    href={data[length].linkRepo}
                    className="btn-repo"
                    target="_blank"
                  >
                    <input type="button" value="Ver repo" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
