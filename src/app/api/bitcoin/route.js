import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// ✅ Environment-based MongoDB URI
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = "AI-News-Project";
const COLLECTION_NAME = "crypto_prices";

export async function GET() {
  let client;

  try {
    console.log("🟢 Connecting to MongoDB...");
    client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // ✅ Only project symbol, price_usd, and change_24h
    const prices = await collection
      .find({}, { projection: { symbol: 1, price_usd: 1, change_24h: 1, _id: 0 } })
      .sort({ symbol: 1 })
      .toArray();

    console.log(`📊 Fetched ${prices.length} crypto prices from MongoDB`);
    return NextResponse.json(prices, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching crypto prices:", error);
    return NextResponse.json({ message: "Error fetching prices", error }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
      console.log("🔴 MongoDB connection closed.");
    }
  }
}
