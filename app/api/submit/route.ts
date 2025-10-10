import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

export async function POST(req: NextRequest) {
  try {
    const prisma = new PrismaClient();
    const data = await req.json();
    const { name, username, email } = data;

    console.log(
      `Received the following information from user:\nname: ${name}\nusername: ${username}\nemail: ${email}`,
    );

    await prisma.$disconnect();



    return NextResponse.json({ success: true, message: "Form received!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 },
    );
  }
}
