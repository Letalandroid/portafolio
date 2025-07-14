class trabajo {
  constructor(nroSemana, image_link, title, description, pdf_link) {
    this.nroSemana = nroSemana;
    this.image_link = image_link;
    this.title = title;
    this.description = description;
    this.pdf_link = pdf_link;
  }
}

const semana1 = new trabajo(
  "1",
  "./assets/s1.png",
  "PRODUCTO N.° 01: FORO DE PRESENTACIÓN",
  "Espero que la Experiencia Curricular me ayude manteniendo una actitud positiva ante toda situación futura, ser constante en cada cosa que hago y no rendirme a la mitad del camino y conocer la sabiduría y el conocimiento para poder aprovechar el máximo de mi tiempo dejando por ejemplo el estar acostado sin hacer nada más que mirar el teléfono/celular.",
  "https://drive.google.com/file/d/19eD52OLRwcQFbyJ7yB37-c9RQGXVCGSZ/view?usp=sharing"
);

const semana2 = new trabajo(
  "2",
  "./assets/s2.png",
  "PRODUCTO N.° 02: MATRIZ DE LISTA DE PROBLEMAS",
  "Estimado estudiante, debes identificar 03 problemas (hábitos) que afecten tu desarrollo personal o académico y completa el siguiente cuadro según lo que se solicita.",
  "https://drive.google.com/file/d/1uGD9C2BVtJmdg8cbXWkk8EXbaZAj-omb/view?usp=sharing"
);

const semana7 = new trabajo(
  "7",
  "./assets/s7.png",
  "PRODUCTO N° 7 CAMBIO DE RUTINA",
  "¿Cómo cambio de hábitos?",
  "https://drive.google.com/file/d/1w2vqPyNIO0hhB8Q9QVqu8wx5h0y4jtXJ/view?usp=sharing"
);

const semana10 = new trabajo(
  "10",
  "./assets/s10.png",
  "PRODUCTO N°10 RECUPERACIÓN",
  "Elijo la flojera como problemática porque es un tema que varios jóvenes, aunque no se den cuenta pueden sufrir, desde levantarse tarde porque “la cama está muy rica”, “5 minutos más”, “hoy es sábado/domingo”, etc. Es algo que mejor se debería dar un alto de una buena vez ya que no es saludable a la larga, mal acostumbrarse a la flojera es algo que te puede perjudicar tanto física como mentalmente, me explico",
  "https://drive.google.com/file/d/1ShsmIsNWZqchP2xWinXAWAYORQiz1p0X/view?usp=sharing"
);

export const semanas = [
  semana1,
  semana2,
  semana7,
  semana10
];
