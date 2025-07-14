import { semanas } from "./trabajos";
import "./styles.css";
import setTitle from "../../setTitle";

export const Tutoria = () => {
  setTitle("Tutoría");
  return (
    <>
      <header className="tutoria-header">
        <div>
          <img src="./assets/ucv-logo.png" alt="" />
          <h1>Tutoría</h1>
        </div>
      </header>
      <main className="tutoria-main">
        {semanas.map((e, index) => {
          return (
            <div key={index} className="semana">
              <h2>Semana {e.nroSemana}</h2>
              <div>
                <img src={e.image_link} alt="" />
                <h3>{e.title}</h3>
                <p>{e.description}</p>
                <a href={e.pdf_link} target="_blank" rel="noreferrer">
                  Ver producto
                </a>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};
