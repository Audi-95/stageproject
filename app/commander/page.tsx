import Image from "next/image";

export default function Commander() {
  return (
    <div className="bg-black text-white">
      <div className="flex space-x-20 text-center">
        <Image
          src="/RTX4080.png"
          height={0}
          width={400}
          alt="Carte graphique"
          className="ml-[200px]"
        />

        <div className="mt-[70px] ">
          <p className="font-bold">NVIDIA GeForce RTX 4080</p>
          <ul>
            <li>Système de refroidissement: Fan</li>
            <li>Fréquence Boost: 2.51 GHz</li>
            <li>Taille de la mémoire GPU: 16 GB</li>
          </ul>
        </div>

        <div className="mt-[70px] ">
          <p>1400€</p>
          <button
            className="text-black rounded-3xl h-10
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
          >
            Acheter maintenant
          </button>
        </div>
      </div>
    </div>
  );
}
