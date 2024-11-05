import { NextResponse } from "next/server";
import { connectDatabase, getAllDocuments, insertDocument } from "@/services/mongo";

export async function GET() {
  const client = await connectDatabase();
  const cars = await getAllDocuments(client, "cars");
  return NextResponse.json(cars);
}

export async function POST(request: Request) {
  const newCar = await request.json();
  const client = await connectDatabase();
  const result = await insertDocument(client, "cars", newCar);
  return NextResponse.json({ message: "Car added", carId: result.insertedId });
}

