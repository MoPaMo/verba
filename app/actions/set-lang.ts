"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();

export async function setLang(lang: string) {
  const session = await getSession();
  if (!session) {
    return { error: "You must be signed in to pick a new language." };
  }
  return { success: true };
}
