import UserModel from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username } = await request.json();
  const user = await UserModel.findOne({ username: username });
  return NextResponse.json(user);
}
