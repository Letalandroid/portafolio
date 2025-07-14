import { useEffect, useState } from "react";

export const Fetching = (url) => {
  const [resultado, setResultado] = useState({ cargando: true, data: null });

  useEffect(() => {
    getDatos(url);
  }, [url]);

  const getDatos = async (Url) => {
    setResultado({
      cargando: true,
      data: null,
    });

    const res = await fetch(Url);
    const data = await res.json();

    setResultado({ cargando: false, data });
  };

  return resultado;
};
