import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, username, email } = data;

    console.log(
      `Received the following information from user:\nname: ${name}\nusername: ${username}\nemail: ${email}`,
    );

    return NextResponse.json({ success: true, message: "Form received!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 },
    );
  }
}
