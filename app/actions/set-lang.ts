"use server";

import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();

import languages from "@/data/languages";
export async function setLang(lang: string) {
  const session = await getSession();
  if (!session) {
    return { error: "You must be signed in to pick a new language." };
  }

  // check if lang is valid
  if (
    !languages.filter((e) => {
      return e.code === lang;
    }).length
  ) {
    return { error: "Invalid language." };
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
    return { error: "An error occurred during setting language." };
  }
}
