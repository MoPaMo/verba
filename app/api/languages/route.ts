"use server";

// public api to get all languages

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  let enabled = !!request.nextUrl.searchParams.get("enabled");

  try {
    const languages = await prisma.language.findMany({
      select: {
        code: true,
        flag: true,
        name: true,
        disabled: true,
        nativeName: true,
      },
      where: enabled ? { disabled: false } : {},
    });

    return NextResponse.json({ success: true, languages });
  } catch (error) {
    console.error("Get langs error:", error);
    return NextResponse.json({
      error: "An error occurred while fetching languages.",
      errType: "getLangs",
    });
  }
}
