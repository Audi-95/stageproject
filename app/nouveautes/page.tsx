import Image from "next/image";
import Link from "next/link";

export default function Nouveautes() {
  return (
    <div className="bg-black text-white pt-20 ">
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

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/macbook-air-15.png"
            height={0}
            width={300}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />
          <div className="mt-[60px] pl-[40px]">
            <p className="font-bold">Macbook Air 15 (Puce M2)</p>

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
              <p>CPU 8 cœurs / GPU 10 cœurs</p>
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
              <p>8 Go de mémoire unifiée</p>
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
              <p>Stockage SSD de 256 Go</p>
            </div>
          </div>

          <div className="float-right pl-[180px]">
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

            <div className="mt-[50px] ">
              <p className="ml-[50px]">1 599,00€</p>
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

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/macbook-air-15.png"
            height={0}
            width={300}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />
          <div className="mt-[60px] pl-[40px]">
            <p className="font-bold">Macbook Air 15 (Puce M2)</p>

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
              <p>CPU 8 cœurs / GPU 10 cœurs</p>
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
              <p>8 Go de mémoire unifiée</p>
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
              <p>Stockage SSD de 512 Go</p>
            </div>
          </div>

          <div className="float-right pl-[180px]">
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

            <div className="mt-[50px] ">
              <p className="ml-[50px]">1 829,00€</p>
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

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/macbook-pro.png"
            height={0}
            width={300}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />
          <div className="mt-[60px] pl-[30px]">
            <p className="font-bold">Macbook Pro 16 (Puce M2 pro)</p>

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
              <p>CPU 12 cœurs / GPU 19 cœurs</p>
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
              <p>16 Go de mémoire unifiée</p>
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
              <p>Stockage SSD de 1 To¹</p>
            </div>
          </div>

          <div className="float-right pl-[180px]">
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

            <div className="mt-[50px] ">
              <p className="ml-[50px]">3 229,00€</p>
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

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/macbook-pro.png"
            height={0}
            width={300}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />
          <div className="mt-[60px] pl-[25px]">
            <p className="font-bold">Macbook Pro 16 (Puce M2 max)</p>

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
              <p>CPU 12 cœurs / GPU 38 cœurs</p>
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
              <p>32 Go de mémoire unifiée</p>
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
              <p>Stockage SSD de 1 To¹</p>
            </div>
          </div>

          <div className="float-right pl-[180px]">
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

            <div className="mt-[50px] ">
              <p className="ml-[50px]">4 149,00€</p>
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
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/FC24.jpg"
            height={0}
            width={250}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />

          <div className="mt-[70px] pl-[35px]">
            <p className="font-bold">FC 24</p>

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
           bg-yellow-400 border-yellow-400 w-[140px] ml-[100px]"
                >
                  Nouveaux
                </button>
              </Link>
            </div>
            <div className="mt-[90px] ml-[130px]">
              <p className="ml-[50px]">79,99€</p>
              <button
                className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
              >
                Acheter maintenant
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/imac-24.png"
            height={0}
            width={250}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />
          <div className="mt-[50px] pl-[90px]">
            <p className="font-bold">iMac 24</p>

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
              <p>CPU 8 cœurs / GPU 8 cœurs</p>
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
              <p>8 Go de mémoire unifiée</p>
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
              <p>256 Go de stockage</p>
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
              <p className="ml-[50px]">1 779,00€</p>
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

      <div className="bg-black text-white pt-20 pb-[50px]">
        <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px]">
          <Image
            src="/imac-24.png"
            height={0}
            width={250}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />
          <div className="mt-[50px] pl-[90px]">
            <p className="font-bold">iMac 24</p>

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
              <p>CPU 8 cœurs / GPU 8 cœurs</p>
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
              <p>8 Go de mémoire unifiée</p>
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
              <p>512 Go de stockage</p>
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
              <p className="ml-[50px]">2 009,00€</p>
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
    </div>
  );
}
