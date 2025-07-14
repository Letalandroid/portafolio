import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'Letalandroid',
      email: process.env.ADMIN_EMAIL || 'test@test.com',
      password: process.env.ADMIN_PASSWORD || 'admin123',
    },
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
