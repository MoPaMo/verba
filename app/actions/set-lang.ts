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
    if (!languages.includes(lang)) {
        return { error: "Invalid language." };
    }
    

}
