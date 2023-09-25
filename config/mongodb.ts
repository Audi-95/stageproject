import { MongoClient, Db } from "mongodb";
const uri =
  "mongodb+srv://audic:5YYXPvU525L8AFCK@cluster0.nmggesf.mongodb.net/?retryWrites=true&w=majority";

export async function connectionBaseDeDonner(): Promise<{
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
