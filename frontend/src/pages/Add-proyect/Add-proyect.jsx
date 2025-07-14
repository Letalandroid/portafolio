import "./add-proyects.css";

export default function AddProyect() {
  return (
    <>
      <div className="form-proyect">
        <div className="card">
          <h2>Añadir proyecto</h2>
          <form
            action={`${process.env.REACT_APP_API_URL}/add-proyecto`}
            method="post"
          >
            <div className="card-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-image fs-2"></i>
                </span>
                <input
                  type="text"
                  className="form-control fs-5"
                  placeholder="Link de la imagen"
                  aria-label="imagen"
                  aria-describedby="basic-addon"
                  name="imagen"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text fs-5" id="basic-addon1">
                  Título:
                </span>
                <input
                  type="text"
                  className="form-control fs-5"
                  aria-label="title"
                  aria-describedby="basic-addon"
                  name="titulo"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text fs-5" id="basic-addon1">
                  Descripción:
                </span>
                <input
                  type="text"
                  className="form-control fs-5"
                  aria-label="descripcion"
                  aria-describedby="basic-addon"
                  name="descripcion"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-solid fa-globe fs-2"></i>
                </span>
                <input
                  type="text"
                  className="form-control fs-5"
                  placeholder="Link"
                  aria-label="Link"
                  aria-describedby="basic-addon"
                  name="link"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fab fa-github fs-3"></i>
                </span>
                <input
                  type="text"
                  className="form-control fs-5"
                  placeholder="Link repo"
                  aria-label="Link repo"
                  aria-describedby="basic-addon"
                  name="linkRepo"
                  required
                />
              </div>
              <div className="input-group mb-3 justify-content-center">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Subir proyecto"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
