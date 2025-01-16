import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// app/api/hello/route.js
export async function GET(request: any) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(
      JSON.stringify({ message: "You must be signed in to see this page." }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(JSON.stringify({ message: "Hello from Next.js!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
} 
