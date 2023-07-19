"use server";
import { connectionBaseDeDonner } from "@/config/mongodb";

export const ValiderInscrit = async (
  nom: string,
  prenom: string,
  email: string,
  motDePasse: string
) => {
  try {
    const { client, db } = await connectionBaseDeDonner();

    const usersCollection = db.collection("users");

    await usersCollection.insertOne({
      nom,
      prenom,
      email,
      motDePasse,
    });

    client.close();

    console.log("inscription réussie");
  } catch (error) {
    console.log("une erreur s'est produite lors de l'inscription :", error);
  }
};
