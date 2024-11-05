import { NextResponse } from "next/server";
import { connectDatabase, getAllDocuments, insertDocument } from "@/services/mongo";

export async function GET() {
  const client = await connectDatabase();
  const users = await getAllDocuments(client, "users");
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const newUser = await request.json();
  const client = await connectDatabase();
  const result = await insertDocument(client, "users", newUser);
  return NextResponse.json({ message: "User added", carId: result.insertedId });
}

