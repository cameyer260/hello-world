import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { idea } = data;

    const post = await prisma.post.create({
      data: {
        content: idea,
      },
    });

    return NextResponse.json({ success: true, message: "Form received!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 },
    );
  }
}
