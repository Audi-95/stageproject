"use server";
import { connectionBaseDeDonner } from "../../config/mongodb";
export const AjouterProduit = async (produit: any) => {
  try {
    const { client, db } = await connectionBaseDeDonner();
    const productsCollection = db.collection("Products");
    await productsCollection.insertOne(produit);
    client.close();

    console.log("ajout du produit réussi");
  } catch (error) {
    console.log(
      "une erreur s'est produite lors de l'ajout du produit :",
      error
    );
  }
};
