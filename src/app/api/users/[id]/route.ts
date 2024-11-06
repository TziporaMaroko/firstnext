import { NextResponse } from "next/server";
import { connectDatabase, updateDocument, deleteDocument } from "@/services/mongo";

// PUT: Update a user
export async function PUT(request: Request, context: any) {
    const updatedUser = await request.json();
    const client = await connectDatabase();

    try {
        const result = await updateDocument(client, "users", context.params.id, updatedUser);
        if (result.modifiedCount === 0) {
            return NextResponse.json({ message: "No user was updated" }, { status: 404 });
        }
        return NextResponse.json({ message: "User updated successfully" });
    } catch (error) {
        const e = error as Error; // Type assertion to Error
        console.error("Detailed error:", e.message); // Accessing error message
        return NextResponse.json({ message: "Error updating car", error: e.message }, { status: 500 });
    }
}


// DELETE: Remove a user
export async function DELETE(request: Request, context: any) {
    const client = await connectDatabase();

    try {
        const result = await deleteDocument(client, "users", context.params.id);

        if (result.deletedCount === 0) {
            return NextResponse.json({ message: "No user found to delete" }, { status: 404 });
        }

        return NextResponse.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ message: "Error deleting user" }, { status: 500 });
    } finally {
        client.close();
    }
}
