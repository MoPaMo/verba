"use server";

import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
const prisma = new PrismaClient();

import languages from "@/data/languages";
export async function setLang(lang: string) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      error: "You must be signed in to pick a new language.",
      errType: "auth",
    };
  }

  // check if lang is valid
  if (
    !languages.filter((e) => {
      return e.code === lang;
    }).length
  ) {
    return { error: "Invalid language.", errType: "invLang" };
  }
  try {
    const langRel = await prisma.userLanguage.create({
      data: {
        userId: session.user.id,
        language: lang,
      },
    });

    return { success: true, langRel };
  } catch (error) {
    console.error("Set lang error:", error);
    return {
      error: "An error occurred during setting language.",
      errType: "setLang",
    };
  }
}
