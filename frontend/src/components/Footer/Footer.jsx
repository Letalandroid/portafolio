import "./footer.css";
import "./index.css";

export default function Footer() {
  return (
    <>
      <form action={`${process.env.REACT_APP_API_URL}/send-email`} method="post">
        <div className="card position-static">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Nombre:</label>
            <div className="col-sm-10">
              <input
                name="nombre"
                type="text"
                className="form-control"
                id="inputEmail3"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input
                name="email"
                type="email"
                className="form-control"
                id="inputEmail3"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Asunto:</label>
            <div className="col-sm-10">
              <input
                name="asunto"
                type="text"
                className="form-control"
                id="inputEmail3"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Tu mensaje:</label>
            <div className="col-sm-10">
              <textarea
                name="mensaje"
                className="form-control"
                id="inputEmail3"
                rows={7}
              ></textarea>
            </div>
          </div>
          <input className="submit" type="submit" value="Enviar mensaje" />
        </div>
      </form>
      <footer id="redes">
        <h3>Letalandroid</h3>
        <div className="redes">
          <a href="https://github.com/Letalandroid" target="_blank">
            <img
              className="redes-logo"
              src="/img/logos/github.png"
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/letalandroid/" target="_blank">
            <img
              className="redes-logo linkedin"
              src="/img/logos/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href="https://twitter.com/letalandroid" target="_blank">
            <img
              className="redes-logo"
              src="/img/logos/twitter.png"
              alt="twitter"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
