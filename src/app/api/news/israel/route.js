import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// ✅ MongoDB Connection String
const MONGO_URI = process.env.MONGO_URI;
const DATABASE_NAME = "AI-News-Project";
const COLLECTION_NAME = "israel_news";

export async function GET() {
  let client;

  try {
    console.log("🟢 Connecting to MongoDB...");
    client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // ✅ Fetch sorted news without _id
    const israelNews = await collection
      .find({}, { projection: { _id: 0 } })
      .sort({ timestamp: -1 })
      .toArray();

    console.log(`📢 Fetched ${israelNews.length} Israel news articles`);
    return NextResponse.json(israelNews, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching Israel news:", error);
    return NextResponse.json({ error: "Failed to fetch Israel news" }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
      console.log("🔴 MongoDB connection closed.");
    }
  }
}
