// src/app/api/news/global/route.js
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// ✅ MongoDB Configuration
const MONGO_URI = process.env.MONGO_URI; // Use env variable
const DATABASE_NAME = "AI-News-Project";
const COLLECTION_NAME = "news"; // Blog/Global News Collection

export async function GET() {
  let client;

  try {
    console.log("🟢 Connecting to MongoDB...");
    client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const blogNews = await collection.find().toArray();
    console.log(`📰 Fetched ${blogNews.length} Global news articles`);

    return NextResponse.json(blogNews, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching Global news:", error);
    return NextResponse.json({ error: "Failed to fetch Global news" }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
      console.log("🔴 MongoDB connection closed.");
    }
  }
}
