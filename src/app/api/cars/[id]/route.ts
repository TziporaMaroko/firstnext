import { NextResponse } from "next/server";
import { connectDatabase, updateDocument, deleteDocument } from "@/services/mongo";

// PUT: Update a car
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const updatedCar = await request.json();
    const client = await connectDatabase();
    
    try {
        const result = await updateDocument(client, "cars", params.id, updatedCar);
        if (result.modifiedCount === 0) {
            return NextResponse.json({ message: "No car was updated" }, { status: 404 });
        }

        return NextResponse.json({ message: "Car updated successfully" });
    } catch (error) {
        client.close();
        console.error("Error updating car:", error);
        return NextResponse.json({ message: "Error updating car" }, { status: 500 });
    }
}

// DELETE: Remove a car
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const carId = params.id;

  const client = await connectDatabase();
  const result = await deleteDocument(client, "cars", carId);

  if (result.deletedCount === 0) {
    return NextResponse.json({ message: "No car found to delete" }, { status: 404 });
  }

  return NextResponse.json({ message: "Car deleted successfully" });
}
