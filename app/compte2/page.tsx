import Image from "next/image";
import Link from "next/link";

export default function Compte2() {
  return (
    <body className="bg-melrose-300">
      <div className="pt-[120px] text-center ">
        <form className="bg-mine-shaft-800 text-white w-[450px] h-[550px] ml-[500px] mt-2 p-[40px] ">
          <p className="text-[25px] text-center pt-[20px]">Créer un compte</p>

          <label className="block pt-[20px]">
            <span className="block text-sm font-medium mr-[300px]">Nom</span>
            <input
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 bg-cod-gray-950 border border-cod-gray-950 rounded-3xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>

          <label className="block pt-[20px]">
            <span className="block text-sm font-medium mr-[300px]">Prénom</span>
            <input
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 bg-cod-gray-950 border border-cod-gray-950 rounded-3xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>

          <label className="block pt-[20px]">
            <span className="block text-sm font-medium mr-[300px]">E-mail</span>
            <input
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-cod-gray-950 border border-cod-gray-950 rounded-3xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>

          <label className="block pt-[20px]">
            <span className="block text-sm font-medium mr-[250px]">
              Mot de passe
            </span>
            <input
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-cod-gray-950 border border-cod-gray-950 rounded-3xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>

          <button className="bg-melrose-300 rounded-3xl h-10 w-36 mt-[30px]">
            Valider
          </button>
        </form>
      </div>
    </body>
  );
}
