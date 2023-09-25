import Image from "next/image";
import Link from "next/link";

export default function Commander() {
  return (
    <div className="bg-black text-white pt-20 pb-[180px]">
      <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
        <Image
          src="/RTX4080.png"
          height={0}
          width={350}
          alt="jeu"
          className="ml-[40px] p-[20px]"
        />
        <div className="mt-[30px] pl-[20px]">
          <p className="font-bold">NVIDIA GeForce RTX 4080</p>

          <div className="flex space-x-4 pt-[10px]">
            <div className="w-[10px] flex space-x-4 ">
              <Image
                src="/fleche-droite.png"
                height={0}
                width={100}
                alt="fleche-droite"
                className="w-full h-auto pt-[8px]"
              />
            </div>
            <p>Système de refroidissement: Fan</p>
          </div>

          <div className="flex space-x-4 pt-[10px]">
            <div className="w-[10px] flex space-x-4 ">
              <Image
                src="/fleche-droite.png"
                height={0}
                width={100}
                alt="fleche-droite"
                className="w-full h-auto pt-[8px]"
              />
            </div>
            <p>Fréquence Boost: 2.51 GHz</p>
          </div>

          <div className="flex space-x-4 pt-[10px]">
            <div className="w-[10px] flex space-x-4 ">
              <Image
                src="/fleche-droite.png"
                height={0}
                width={100}
                alt="fleche-droite"
                className="w-full h-auto pt-[8px]"
              />
            </div>
            <p>Taille de la mémoire GPU: 16 GB</p>
          </div>
        </div>

        <div className="float-right pl-[175px]">
          <div>
            <Link href="/nouveautes">
              <button
                className="text-black font-bold
     bg-yellow-400 border-yellow-400 w-[140px] ml-[120px]"
              >
                Nouveaux
              </button>
            </Link>
          </div>

          <div className="mt-[30px] ">
            <p className="ml-[50px]">1 400,00€</p>
            <button
              className="text-black h-12
    w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px] "
            >
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
