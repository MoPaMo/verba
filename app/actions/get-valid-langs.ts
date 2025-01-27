"use server";

import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
const prisma = new PrismaClient();

export async function getLangs() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      error: "You must be signed in to pick a new language.",
      errType: "auth",
    };
  }

  try {
    const languages = await prisma.language.findMany({
      select: {
        code: true,
        flag: true,
        name: true,
        disabled: true,
        nativeName: true,
      },
    });

    const userLanguages = await prisma.userLanguage.findMany({
      where: {
        userId: session.user.id,
      },
      select: {
        language: true,
      },
    });
    console.log("User langs:", userLanguages);

    const langs = languages.map((lang) => ({
      ...lang,
      disabled:
        lang.disabled || userLanguages.some((e) => e.language === lang.code),
    }));

    return { success: true, langs };
  } catch (error) {
    console.error("Set lang error:", error);
    return {
      error: "An error occurred while fetching languages.",
      errType: "setLang",
    };
  }
}
