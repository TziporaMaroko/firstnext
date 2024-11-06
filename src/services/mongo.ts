"use server";
import { MongoClient, ObjectId } from "mongodb";

// Define `client` and `clientPromise` with proper types
let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

// Connect to the MongoDB database
export async function connectDatabase(): Promise<MongoClient> {
   if (!client) {
       const dbConnectionString = process.env.PUBLIC_DB_CONNECTION;
       if (!dbConnectionString) {
           throw new Error('Database connection string is not defined');
       }
       client = new MongoClient(dbConnectionString);
       clientPromise = client.connect();
   }
   return clientPromise!;
}

// Insert a document into a specified collection
export async function insertDocument(client: MongoClient, collection: string, document: object) {
    const db = client.db('db01');
    return await db.collection(collection).insertOne(document);
}

// Retrieve all documents from a specified collection
export async function getAllDocuments(client: MongoClient, collection: string) {
    const db = client.db('db01');
    return await db.collection(collection).find().toArray();
}

// Update a document in a specified collection by ID
export async function updateDocument(client: MongoClient, collection: string, id: string, updatedData: object) {
    const db = client.db("db01");
    const result = await db.collection(collection).updateOne(
        { _id: new ObjectId(id) }, 
        { $set: updatedData }
    );
    return result;
}
// Delete a document in a specified collection by ID
export async function deleteDocument(client: MongoClient, collection: string, id: string) {
    const db = client.db('db01');
    return await db.collection(collection).deleteOne({ _id: new ObjectId(id) });
}
