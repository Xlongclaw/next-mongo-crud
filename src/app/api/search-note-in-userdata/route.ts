import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username } = await request.json();

  return NextResponse.json({ username: "j" });
}
