import Image from "next/image";
import Link from "next/link";

export default function Produits2() {
  return (
    <div className="bg-black text-white pt-[70px] pb-[20px] ">
      <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
        <Image
          src="/pcGamer.png"
          height={0}
          width={300}
          alt="ordinateur"
          className="ml-[40px] p-[20px]"
        />

        <div className="mt-[60px] pl-[40px]">
          <p className="font-bold">PC gamer</p>

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
            <p>Core i5 13600KF</p>
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
            <p>GeForce RTX 4070 Ti</p>
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
            <p>Mémoire DDR4 32 Go</p>
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
            <p>SSD 1 To NVMe</p>
          </div>
        </div>

        <div className="mt-[90px] pl-[230px]">
          <p className="ml-[40px]">2 259,90€</p>
          <button
            className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
          >
            Acheter maintenant
          </button>
        </div>
      </div>

      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/macbook-air-13.png"
            height={0}
            width={300}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />
          <div className="mt-[70px] pl-[40px]">
            <p className="font-bold">Macbook Air 13 (Puce M2)</p>

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
              <p>Stockage SSD de 256 Go</p>
            </div>
          </div>

          <div className="float-right pl-[180px]">
            <div className="mt-[80px] ">
              <p className="ml-[40px]">1 299,00€</p>

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
            src="/macbook-air-13.png"
            height={0}
            width={300}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />
          <div className="mt-[70px] pl-[40px]">
            <p className="font-bold">Macbook Air 13 (Puce M2)</p>

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

          <div className="float-right pl-[170px]">
            <div className="mt-[50px] ">
              <p className="ml-[40px] line-through">1 649,00€</p>
              <p className="ml-[51px]">1 484,1€</p>

              <button
                className="text-black h-12
    w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px] "
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
          <div className="mt-[70px] pl-[30px]">
            <p className="font-bold">Macbook Pro 14 (Puce M2 pro)</p>

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

          <div className="float-right pl-[170px]">
            <div className="mt-[50px] ">
              <p className="ml-[40px] line-through">2 999,00€</p>
              <p className="ml-[51px]">2 399,2€</p>

              <button
                className="text-black h-12
    w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px] "
              >
                Acheter maintenant
              </button>

              <div>
                <Link href="/promotions">
                  <button
                    className="text-white
           bg-red-700 border-red-700 w-[144px] "
                  >
                    -20%
                  </button>
                </Link>
              </div>
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
          <div className="mt-[70px] pl-[30px]">
            <p className="font-bold">Macbook Pro 14 (Puce M2 max)</p>

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
              <p>CPU 12 cœurs / GPU 30 cœurs</p>
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

          <div className="float-right pl-[170px]">
            <div className="mt-[50px] ">
              <p className="ml-[40px] line-through">3 699,00€</p>
              <p className="ml-[51px]">3 329,1€</p>

              <button
                className="text-black h-12
    w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px] "
              >
                Acheter maintenant
              </button>

              <div>
                <Link href="/promotions">
                  <button
                    className="text-white
           bg-red-700 border-red-700 w-[144px] "
                  >
                    -10%
                  </button>
                </Link>
              </div>
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

      <div className="flex space-x-4 pl-[700px] mt-[70px] pb-[50px]">
        <div>
          <Link href="/produits" className="text-red-600">
            1
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
