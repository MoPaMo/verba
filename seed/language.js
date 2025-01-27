// seed.ts
import { PrismaClient } from "@prisma/client";
import languages from "../data/languages.js";
const prisma = new PrismaClient();

async function main() {
  await prisma.language.createMany({
    data: languages,
    skipDuplicates: true, // Skip if any language already exists
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
