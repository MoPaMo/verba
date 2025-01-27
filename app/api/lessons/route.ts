"use server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

import { NextResponse } from "next/server";
import type { Unit } from "@/types/lessons";

import data from "@/data/courses/spanish.json";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const mockUnits: Unit[] = data;

export async function GET() {
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

  return NextResponse.json({ units: mockUnits });
}
