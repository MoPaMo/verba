"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function createAccount(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    const masterPassword = formData.get("masterPassword") as string;

    if (!email || !password || !masterPassword) {
      return { error: "All fields are required." };
    }

    // Verify master password
    if (masterPassword !== process.env.ACCOUNT_CREATION_PWD) {
      return { error: "Invalid master password." };
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "User already exists." };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || null,
      },
    });

    return { success: true, user };
  } catch (error) {
    console.error("Signup error:", error);
    return { error: "An error occurred during signup." };
  }
}
