import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
  } catch (error) {
    console.error('Database connection failed', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
