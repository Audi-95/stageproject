"use server";
import { connectionBaseDeDonner } from "../../config/mongodb";

export const ValiderConnexion = async (email: string, motDePasse: string) => {
  try {
    const { client, db } = await connectionBaseDeDonner();

    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ email, motDePasse });

    client.close();

    if (user) {
      console.log("Connexion réussie");
      console.log("Nom d'utilisateur :", user.nom);
      console.log("Mot de passe :", user.motDePasse);
    } else {
      console.log("Email ou mot de passe invalide");
    }
  } catch (error) {
    console.log("Une erreur s'est produite lors de la connexion :", error);
  }
};
