import Image from "next/image";

export default function Produits() {
  return (
    <div className="bg-black text-white pt-[70px] pb-20">
      <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
        <Image
          src="/MSI-RTX-4080.png"
          height={0}
          width={300}
          alt=""
          className="ml-[40px] "
        />

        <div className="mt-[50px] ">
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
            <p>Fréquence Boost: 2.51 GHz</p>
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
        <div className="mt-[60px] ">
          <p className="ml-[110px] ">1,400€</p>
          <button
            className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px] ml-[60px]"
          >
            Acheter maintenant
          </button>
        </div>
      </div>

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] p-[5px]">
          <Image
            src="/ichill-RTX-4080.png"
            height={0}
            width={400}
            alt=""
            className="ml-[40px] "
          />

          <div className="mt-[70px] ">
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
              <p>Fréquence Boost: 2.51 GHz</p>
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
          <div className="mt-[70px] ">
            <p className="ml-[50px]">1,385€</p>
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
            alt="Processeur intel core i5"
            className="ml-[40px] "
          />

          <div className="mt-[40px] ">
            <p className="font-bold">Intel core i5</p>

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
          <div className="mt-[70px] pr-[83px]">
            <p className="ml-[50px]">384,99€</p>
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
            src="/GB-RTX-4080.png"
            height={0}
            width={300}
            alt=""
            className="ml-[40px] "
          />

          <div className="mt-[70px] ">
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
              <p>Fréquence Boost: 2.51 GHz</p>
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
          <div className="mt-[70px] pl-[60px]">
            <p className="ml-[50px]">1,300€</p>
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
            src="/the-last-of-us.webp"
            height={0}
            width={250}
            alt="Jeu The last of us"
            className="ml-[40px] "
          />

          <div className="mt-[70px] pl-[40px]">
            <p className="font-bold">The last of us</p>

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
              <p>Fréquence Boost: 2.51 GHz</p>
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
          <div className="mt-[70px] pl-[60px]">
            <p className="ml-[50px]">19,99€</p>
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
          <div className="mt-[70px] pr-[83px]">
            <p className="ml-[50px]">559,99€</p>
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
            src="/intel-i9.png"
            height={0}
            width={250}
            alt="Processeur intel core i9"
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
          <div className="mt-[70px] pr-[83px]">
            <p className="ml-[50px]">759,99€</p>
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
            width={250}
            alt="Jeu Grand theft auto 5"
            className="ml-[40px] "
          />

          <div className="mt-[70px] pl-[40px]">
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
              <p>Fréquence Boost: 2.51 GHz</p>
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
          <div className="mt-[70px] pl-[60px]">
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
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] p-[10px]">
          <Image
            src="/NBA-2K23.jpg"
            height={0}
            width={250}
            alt="Jeu NBA 2K23"
            className="ml-[40px] "
          />

          <div className="mt-[70px] pl-[40px]">
            <p className="font-bold">NBA 2K23</p>

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
              <p>Fréquence Boost: 2.51 GHz</p>
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
          <div className="mt-[70px] pl-[60px]">
            <p className="ml-[50px]">29,99€</p>
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
            src="/call-of-duty-MW.jpg"
            height={0}
            width={250}
            alt="Jeu call of duty moderne warfare"
            className="ml-[40px] "
          />

          <div className="mt-[70px] pl-[40px]">
            <p className="font-bold">Call of duty Moderne Warfare</p>

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
              <p>Fréquence Boost: 2.51 GHz</p>
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
          <div className="mt-[70px] pl-[60px]">
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
    </div>
  );
}
