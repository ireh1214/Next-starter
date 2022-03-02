import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

// Check MongoDB URI
if (!MONGODB_URI) {
    throw new Error("Define MONGODB_URI in env.local.")
}

// Check MongoDB DB
if (!MONGODB_DB) {
    throw new Error("Define DB_NAME in env.local.")
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    // Check the cached
    if (cachedClient && cachedDb) {
        // Load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // Set connection options
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI, opts);
    await client.connect();
    let db = client.db(MONGODB_DB)

    // Set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}