import Image from "next/image";
import Link from "next/link";

export default function Produits() {
  return (
    <div className="bg-black text-white pb-20">
      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/MSI-RTX-4080.png"
            height={0}
            width={300}
            alt="Carte graphique"
            className="ml-[40px] "
          />

          <div className="mt-[60px] pl-[30px]">
            <p className="font-bold">MSI GeForce RTX 4080</p>

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
              <div className="w-[10px] ">
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
          <div className="mt-[60px] pl-[160px]">
            <p className="ml-[52px]">1 400€</p>
            <button
              className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
            >
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/ichill-RTX-4080.png"
            height={0}
            width={300}
            alt="Carte graphique"
            className="ml-[40px] mt-[20px]"
          />

          <div className="mt-[45px] pl-[30px]">
            <p className="font-bold">Ichill GeForce RTX 4080</p>

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
              <div className="w-[10px] ">
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
          <div className="mt-[40px] pl-[160px]">
            <p className="ml-[52px]">1 385€</p>
            <button
              className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
            >
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/intel-i5.png"
            height={0}
            width={250}
            alt="Processeur intel core i7"
            className="ml-[40px] "
          />

          <div className="mt-[40px] ">
            <p className="font-bold">Intel core i5-13600KF</p>

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
              <p>Processeur 14 Cores / 20 Threads</p>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[17px] ">
                <Image
                  src="/fleche-droite.png"
                  height={0}
                  width={100}
                  alt="fleche-droite"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
              <p>
                6 Performance-Cores (3.5 GHz - 5.1 GHz) + 8 Efficient- Cores
                (2.6 GHz - 3.9 GHz)
              </p>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[10px] ">
                <Image
                  src="/fleche-droite.png"
                  height={0}
                  width={100}
                  alt="fleche-droite"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
              <p>Cache L3 24 Mo + Cache L2 20 Mo</p>
            </div>
          </div>
          <div className="mt-[60px] pr-[115px]">
            <p className="ml-[52px]">384,99€</p>
            <button
              className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
            >
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/GB-RTX-4080.png"
            height={0}
            width={250}
            alt="Carte graphique"
            className="ml-[40px] "
          />

          <div className="mt-[60px] pl-[90px]">
            <p className="font-bold">GigaByte GeForce RTX 4080</p>

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
              <div className="w-[10px] ">
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
          <div className="mt-[60px] pl-[150px]">
            <p className="ml-[52px]">1 300€</p>
            <button
              className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
            >
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-[70px] pb-[20px] ">
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/the-last-of-us.jpg"
            height={0}
            width={250}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />

          <div className="mt-[40px] pl-[35px]">
            <p className="font-bold">The las of us</p>

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
              <p>Action</p>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[50px] flex space-x-4 ">
                <Image
                  src="/bad-language.jpg"
                  height={0}
                  width={100}
                  alt="langage grossier"
                  className="w-full h-auto pt-[8px]"
                />
              </div>

              <div className="w-[50px] flex space-x-4 ">
                <Image
                  src="/violence.jpg"
                  height={0}
                  width={100}
                  alt="fleche-droite"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[50px] ">
                <Image
                  src="/pegi-18.jpg"
                  height={0}
                  width={100}
                  alt="pegi 18"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-[70px] pl-[190px]">
            <p className="ml-[50px] line-through">79,99€</p>
            <p className="ml-[50px]">55,99€</p>
            <button
              className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
            >
              Acheter maintenant
            </button>

            <div>
              <Link href="/promotions">
                <button
                  className="text-white
           bg-red-700 border-red-700 w-[144px] "
                >
                  -30%
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/intel-i7.png"
            height={0}
            width={250}
            alt="Processeur intel core i7"
            className="ml-[40px] "
          />

          <div className="mt-[40px] ">
            <p className="font-bold">Intel core i7-13700K</p>

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
              <p>Processeur 16 Cores / 24 Threads</p>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[17px] ">
                <Image
                  src="/fleche-droite.png"
                  height={0}
                  width={100}
                  alt="fleche-droite"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
              <p>
                8 Performance-Cores (3.4 GHz - 5.4 GHz) + 8 Efficient-Cores (2.5
                GHz - 4.2 GHz)
              </p>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[10px] ">
                <Image
                  src="/fleche-droite.png"
                  height={0}
                  width={100}
                  alt="fleche-droite"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
              <p>Cache L3 30 Mo + Cache L2 24 Mo</p>
            </div>
          </div>
          <div className="mt-[40px] pr-[115px]">
            <p className="ml-[50px] line-through">559,99€</p>
            <p className="ml-[52px]">391,99€</p>
            <button
              className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
            >
              Acheter maintenant
            </button>

            <div>
              <Link href="/promotions">
                <button
                  className="text-white
           bg-red-700 border-red-700 w-[144px] "
                >
                  -30%
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/intel-i9.png"
            height={0}
            width={250}
            alt="Processeur intel core i7"
            className="ml-[40px] "
          />

          <div className="mt-[40px] ">
            <p className="font-bold">Intel core i9-13900K</p>

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
              <p>Processeur 24 Cores / 32 Threads</p>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[17px] ">
                <Image
                  src="/fleche-droite.png"
                  height={0}
                  width={100}
                  alt="fleche-droite"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
              <p>
                8 Performance-Cores (3.0 GHz - 5.8 GHz) + 16 Efficient-Cores
                (2.2 GHz - 4.3 GHz)
              </p>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[10px] ">
                <Image
                  src="/fleche-droite.png"
                  height={0}
                  width={100}
                  alt="fleche-droite"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
              <p>Cache L3 36 Mo + Cache L2 32 Mo</p>
            </div>
          </div>
          <div className="mt-[60px] pr-[115px]">
            <p className="ml-[52px]">759,99€</p>
            <button
              className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
            >
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] p-[10px]">
          <Image
            src="/gta-5.jpg"
            height={0}
            width={220}
            alt="Jeu Grand theft auto 5"
            className="ml-[40px] "
          />

          <div className="mt-[35px] pl-[55px]">
            <p className="font-bold">Grand theft auto 5</p>

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
              <p>Action</p>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[50px] flex space-x-4 ">
                <Image
                  src="/bad-language.jpg"
                  height={0}
                  width={100}
                  alt="langage grossier"
                  className="w-full h-auto pt-[8px]"
                />
              </div>

              <div className="w-[50px] flex space-x-4 ">
                <Image
                  src="/violence.jpg"
                  height={0}
                  width={100}
                  alt="fleche-droite"
                  className="w-full h-auto pt-[8px]"
                />
              </div>

              <div className="w-[50px] flex space-x-4 ">
                <Image
                  src="/online.png"
                  height={0}
                  width={100}
                  alt="fleche-droite"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[50px] ">
                <Image
                  src="/pegi-18.jpg"
                  height={0}
                  width={100}
                  alt="pegi 18"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-[70px] pl-[125px]">
            <p className="ml-[50px]">24,99€</p>
            <button
              className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
            >
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px]">
          <Image
            src="/NBA-2K24.jpg"
            height={0}
            width={240}
            alt="Jeu NBA 2K23"
            className="ml-[40px] p-[10px]"
          />

          <div className="mt-[70px] pl-[125px]">
            <p className="font-bold">NBA 2K24</p>

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
              <p>Sport</p>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[50px] ">
                <Image
                  src="/pegi-3.jpg"
                  height={0}
                  width={100}
                  alt="pegi 3"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
            </div>
          </div>
          <div className="pl-[109px]">
            <div className="float-right pl-[150px]">
              <Link href="/nouveautes">
                <button
                  className="text-black font-bold
           bg-yellow-400 border-yellow-400 w-[140px] ml-[165px]"
                >
                  Nouveaux
                </button>
              </Link>
            </div>
            <div className="mt-[90px]">
              <p className="ml-[250px]">79,99€</p>
              <button
                className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px] ml-[197px]"
              >
                Acheter maintenant
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] p-[10px]">
          <Image
            src="/call-of-duty-MW.jpg"
            height={0}
            width={220}
            alt="Jeu call of duty moderne warfare"
            className="ml-[40px] "
          />

          <div className="mt-[40px] pl-[55px]">
            <p className="font-bold">Call of duty Moderne Warfare II</p>

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
              <p>Action</p>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[50px] flex space-x-4 ">
                <Image
                  src="/bad-language.jpg"
                  height={0}
                  width={100}
                  alt="langage grossier"
                  className="w-full h-auto pt-[8px]"
                />
              </div>

              <div className="w-[50px] flex space-x-4 ">
                <Image
                  src="/violence.jpg"
                  height={0}
                  width={100}
                  alt="Violence"
                  className="w-full h-auto pt-[8px]"
                />
              </div>

              <div className="w-[50px] flex space-x-4 ">
                <Image
                  src="/in-game-purchase.jpg"
                  height={0}
                  width={100}
                  alt="Achat en ligne"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
            </div>

            <div className="flex space-x-4 pt-[10px]">
              <div className="w-[50px] ">
                <Image
                  src="/pegi-18.jpg"
                  height={0}
                  width={100}
                  alt="pegi 18"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-[80px] pl-[65px]">
            <p className="ml-[50px]">59,99€</p>
            <button
              className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
            >
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 pl-[700px] mt-[70px]">
        <div>
          <Link href="/produits2" className="text-red-600">
            2
          </Link>
        </div>
        <div>
          <Link href="/produits3" className="text-red-600">
            3
          </Link>
        </div>
      </div>
    </div>
  );
}
