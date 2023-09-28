"use client";
import React, { useState, useEffect } from "react";
import { AjouterProduit } from "./servercomponent";
import Link from "next/link";

export function Admin() {
  const [nom, setNom] = useState("");
  const [categorie, setCategorie] = useState("");
  const [prix, setPrix] = useState(0);
  const [description, setDescription] = useState("");
  const [caracteristiques, setCaracteristiques] = useState("");

  const handleAjouterProduit = async () => {
    const produit = {
      nom,
      categorie,
      prix,
      description,
      caracteristiques: caracteristiques.split(","),
    };

    await AjouterProduit(produit);
    setNom("");
    setCategorie("");
    setPrix(0);
    setDescription("");
    setCaracteristiques("");
  };

  return (
    <div className="bg-melrose-300">
      <div className="pt-[90px] text-center pb-[80px]">
        <form className="bg-mine-shaft-800 text-white w-[450px] h-[550px] ml-[500px] mt-2 p-[40px] ">
          <p className="text-[25px] text-center pt-[20px]">
            Ajouter un produit
          </p>

          <label className="block pt-[20px]">
            <span className="block text-sm font-medium mr-[300px]">Nom</span>
            <input
              type="text"
              required
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-cod-gray-950 border border-cod-gray-950 rounded-3xl text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>

          <label className="block pt-[20px]">
            <span className="block text-sm font-medium mr-[270px]">
              Catégorie
            </span>
            <input
              type="text"
              required
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-cod-gray-950 border border-cod-gray-950 rounded-3xl text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>

          <label className="block pt-[20px] pb-[15px]">
            <span className="block text-sm font-medium mr-[300px]">Prix</span>
            <input
              type="number"
              required
              value={prix}
              onChange={(e) => setPrix(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 bg-cod-gray-950 border border-cod-gray-950 rounded-3xl text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>

          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-5 block w-full px-3 py-2 bg-cod-gray-950 border border-cod-gray-950 rounded-3xl text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          ></textarea>

          <button
            type="button"
            onClick={handleAjouterProduit}
            className="bg-melrose-300 rounded-3xl h-10 w-36 mt-[30px] "
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
