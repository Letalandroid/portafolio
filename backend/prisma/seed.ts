import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.projects.createMany({
    data: [
      {
        image:
          'https://res.cloudinary.com/del5cxt4n/image/upload/v1663178235/portafolio/proyectos/proyecto1_svuijg.png',
        title: 'Portafolio',
        description: 'Proyecto realizado con HTML, CSS y JavaScript.',
        link: 'https://www.letalandroid.ml',
        linkRepo: 'https://github.com/Letalandroid/letalandroid.github.io',
      },
      {
        image:
          'https://res.cloudinary.com/del5cxt4n/image/upload/v1663178237/portafolio/proyectos/proyecto2_odtrzr.png',
        title: 'Red-S',
        description:
          'Bloque de comentarios públicos creado con MongoDB, Express y Node JS.',
        link: 'https://red-s.vercel.app',
        linkRepo: 'https://github.com/Letalandroid/red-s',
      },
      {
        image:
          'https://res.cloudinary.com/del5cxt4n/image/upload/v1663178238/portafolio/proyectos/proyecto3_ic18t1.png',
        title: 'Inith-With-Express',
        description:
          'App de contactos actualmente de servicio de una sola cuenta lo cuál será actualizado para que en cada cuenta tenga ciertos contactos creados por los usuarios.',
        link: 'https://init-with-express.vercel.app/',
        linkRepo: 'https://github.com/Letalandroid/init-with-express',
      },
      {
        image:
          'https://res.cloudinary.com/del5cxt4n/image/upload/v1663178238/portafolio/proyectos/proyecto4_lyljz0.png',
        title: 'Movies App',
        description:
          'Una aplicaciónn de recomendaciónn de películas hecha en React JS.',
        link: 'https://movies-app-sigma-one.vercel.app/',
        linkRepo: 'https://github.com/Letalandroid/movies-app',
      },
      {
        image:
          'https://res.cloudinary.com/del5cxt4n/image/upload/v1663178234/portafolio/proyectos/proyecto5_ovm7sj.png',
        title: 'Weather',
        description:
          'Una app de clima que gracias a la api de OpenWeatherMap se pudo lograr.',
        link: 'https://www.letalandroid.ml/weather/',
        linkRepo: 'https://github.com/Letalandroid/weather',
      },
      {
        image:
          'https://res.cloudinary.com/del5cxt4n/image/upload/v1663178238/portafolio/proyectos/proyecto6_tq3cl7.png',
        title: 'Upload-Your-Image',
        description: 'Un sitio donde puedes subir cualquier tipo de image.',
        link: 'https://upload-your-image.vercel.app/',
        linkRepo: 'https://github.com/Letalandroid/upload-your-image',
      },
      {
        image:
          'https://res.cloudinary.com/del5cxt4n/image/upload/v1676652801/portafolio/proyectos/proyecto7_ylw0ne.png',
        title: 'Music Player',
        description:
          'Es un proyecto dedicado al tema de la música, un reproductor con un atractivo diseño para el usuario.',
        link: 'https://music-player-lta.vercel.app/',
        linkRepo: 'https://github.com/Letalandroid/music-player',
      },
    ],
  });

  console.log('🌱 Seeds cargados correctamente con todos los productos.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
