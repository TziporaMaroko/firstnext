import { NextResponse } from "next/server";
import { connectDatabase, updateDocument, deleteDocument } from "@/services/mongo";

// PUT: Update a car
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const updatedUser = await request.json();
    const client = await connectDatabase();
    
    try {
        const result = await updateDocument(client, "users", params.id, updatedUser);

        if (result.modifiedCount === 0) {
            return NextResponse.json({ message: "No user was updated" }, { status: 404 });
        }

        return NextResponse.json({ message: "User updated successfully" });
    } catch (error) {
        client.close();
        console.error("Error updating user:", error);
        return NextResponse.json({ message: "Error updating user" }, { status: 500 });
    }
}

// DELETE: Remove a car
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const carId = params.id;

  const client = await connectDatabase();
  const result = await deleteDocument(client, "users", carId);

  if (result.deletedCount === 0) {
    return NextResponse.json({ message: "No user found to delete" }, { status: 404 });
  }

  return NextResponse.json({ message: "User deleted successfully" });
}
