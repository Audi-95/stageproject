import { MongoClient, Db } from "mongodb";
const uri = "ton-uri";

export async function connectToDatabase(): Promise<{
  client: MongoClient;
  db: Db;
}> {
  if (!uri) {
    throw new Error("ajouter l'uri mongo à .env.local");
  }

  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db();
  return { client, db };
}
