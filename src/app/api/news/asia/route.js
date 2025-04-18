import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;
const DATABASE_NAME = "AI-News-Project";
const COLLECTION_NAME = "asia_news";

export async function GET() {
  let client;

  try {
    console.log("🟢 Connecting to MongoDB...");
    client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const asiaNews = await collection.find().toArray();
    console.log(`📢 Fetched ${asiaNews.length} Asia news articles`);

    return NextResponse.json(asiaNews, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching Asia news:", error);
    return NextResponse.json({ error: "Failed to fetch Asia news" }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
      console.log("🔴 MongoDB connection closed.");
    }
  }
}
