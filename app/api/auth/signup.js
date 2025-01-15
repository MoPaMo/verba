import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).send({ error: "Method not allowed" });

  const { email, password, name } = req.body;

  if (!email || !password)
    return res.status(400).send({ error: "Email and password are required" });

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword, name },
    });
    res.status(201).json({ id: newUser.id, email: newUser.email });
  } catch (error) {
    res.status(500).send({ error: "User creation failed" });
  }
}
