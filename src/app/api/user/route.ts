import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/app/lib/mongodb";
import UserModel from "@/app/models/User";

export async function POST(
  request: Request,
  params: { params: { userId: string } }
) {
  const { username, email, password, name } = await request.json();
  await connectMongoDB();
  await UserModel.create({
    name,
    username,
    password,
    email,
  });
  return NextResponse.json(
    { message: "Created User Successfully" },
    { status: 200 }
  );
}
