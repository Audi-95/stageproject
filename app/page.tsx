import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-black">
      <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
        <Image
          src="/geforce.jpg"
          height={0}
          width={3000}
          alt="carte graphique"
          className="pt-[10px] "
        />

        <button
          className="text-black rounded-3xl h-10
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mT-70"
        >
          Commander
        </button>

        <div className="flex space-x-4 m-auto text-center">
          <div>
            <Image
              src="/ecran.png"
              height={0}
              width={600}
              alt="écran"
              className="pt-[10px] "
            />

            <button
              className="text-black rounded-3xl h-10
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold"
            >
              Acheter
            </button>
          </div>

          <div>
            <Image
              src="/pc.jpg"
              height={0}
              width={400}
              alt="pc gamers"
              className="pt-[10px] mt-20"
            />

            <button
              className="text-black rounded-3xl h-10
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold m-[71px]"
            >
              Acheter
            </button>
          </div>
        </div>

        <div className="text-center ">
          <Image
            src="/piece.jpg"
            height={0}
            width={800}
            alt="piéce graphique"
            className="pt-[10px] mt-20 "
          />

          <button
            className="text-black rounded-3xl h-10
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-10 "
          >
            Acheter
          </button>
        </div>
      </main>
    </div>
  );
}
