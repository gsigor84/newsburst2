// src/app/api/recommendations/route.js
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = "AI-News-Project";
const COLLECTION_NAME = "trading_recommendations";

export async function GET() {
  let client;

  try {
    console.log("🟢 Connecting to MongoDB...");
    client = new MongoClient(MONGO_URI);
    await client.connect();

    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Fetch and project the relevant fields (excluding _id and timestamp)
    const data = await collection
      .find({}, {
        projection: {
          _id: 0,
          timestamp: 0,
        }
      })
      .sort({ token: 1 })
      .toArray();

    console.log(`📈 Fetched ${data.length} recommendations`);
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error("❌ Error fetching recommendations:", error);
    return NextResponse.json({ error: "Failed to fetch recommendations" }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
      console.log("🔴 MongoDB connection closed.");
    }
  }
}
