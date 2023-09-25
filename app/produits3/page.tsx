import Image from "next/image";
import Link from "next/link";

export default function Produits3() {
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

        <div className="bg-black text-white pt-20 ">
          <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
            <Image
              src="/KCX 3 [ Win11 - PC Gamer ].png"
              height={0}
              width={300}
              alt="jeu"
              className="ml-[40px] p-[20px]"
            />
            <div className="mt-[70px] pl-[30px]">
              <p className="font-bold">KCX 3 [ Win11 - PC Gamer ]</p>

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
                <p>Intel Core i5 13600KF</p>
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
                <p>Asus GeForce RTX 4070 Dual</p>
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
                <p>32 Go de mémoire DDR4</p>
              </div>
            </div>

            <div className="float-right pl-[181px]">
              <div className="mt-[50px] ">
                <p className="ml-[40px] line-through">1 999,00€</p>
                <p className="ml-[41px]">1 799,90€</p>

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
              src="/Megavolt [ Win11 - PC Gamer ].png"
              height={0}
              width={300}
              alt="jeu"
              className="ml-[40px] p-[20px]"
            />
            <div className="mt-[70px] pl-[30px]">
              <p className="font-bold">Megavolt [ Win11 - PC Gamer ]</p>

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
                <p>Ryzen 5 7600X</p>
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
                <p>Radeon RX 7900 XT</p>
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
                <p>20 Go de mémoire</p>
              </div>
            </div>

            <div className="float-right pl-[190px]">
              <div className="mt-[50px] ">
                <p className="ml-[40px] line-through">2 249,00€</p>
                <p className="ml-[41px]">2 049,90€</p>

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

        <div className="bg-black text-white pt-[70px] pb-[20px] ">
          <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
            <Image
              src="/CSL Sprint 5771 (Ryzen 7) - DLSS3.png"
              height={0}
              width={270}
              alt="ordinateur"
              className="ml-[40px] p-[20px]"
            />

            <div className="mt-[80px]">
              <p className="font-bold">CSL Sprint 5771 (Ryzen 7) - DLSS3</p>

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
                <p>AMD Ryzen 7 5700X, 8x 3400 MHz</p>
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
                <p>16 Go DDR4-RAM, 3200MHz</p>
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
                <p>1000 Go SSD, M.2 PCle, Kingston</p>
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
                <p>GeForce RTX 4070, 12 go GDDRr5x</p>
              </div>
            </div>

            <div className="mt-[70px] pl-[140px]">
              <p className="ml-[40px] line-through">1 999,90€</p>
              <p className="ml-[40px]">1 199,00€</p>
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
                    -40%
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white pt-20 ">
          <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
            <Image
              src="/MSI_Raider_GE77_HX.png"
              height={0}
              width={250}
              alt="jeu"
              className="ml-[60px] p-[20px]"
            />
            <div className="mt-[50px] pl-[60px]">
              <p className="font-bold">MSI Raider GE77 HX</p>

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
                <p>Intel Core i9-12900HX</p>
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
                <p>32 Go SSD 1 To 17.3&quot QHD 240 Hz</p>
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
                <p>NVIDIA GeForce RTX 3080 Ti 16 Go</p>
              </div>
            </div>

            <div className="float-right pl-[110px]">
              <div className="mt-[60px] ">
                <p className="ml-[40px]">2 999,95€</p>

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
              src="/MSI Stealth 16.jpg"
              height={0}
              width={300}
              alt="jeu"
              className="ml-[40px] p-[20px]"
            />
            <div className="mt-[50px] pl-[30px]">
              <p className="font-bold">MSI Stealth 16</p>

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
                <p>Intel Core i7 - 13700H</p>
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
                <p>32 GO RAM - 1 TO SSD NVME</p>
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
                <p>GEFORCE RTX 4060</p>
              </div>
            </div>

            <div className="float-right pl-[178px]">
              <div className="mt-[30px] ">
                <p className="ml-[40px] line-through">2 899,00€</p>
                <p className="ml-[41px]">2 199,00€</p>

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
                      -25%
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white pt-20 pb-[60px]">
          <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
            <Image
              src="/Katana_17.png"
              height={0}
              width={250}
              alt="jeu"
              className="ml-[90px] p-[20px]"
            />
            <div className="mt-[50px] pl-[30px]">
              <p className="font-bold">MSI Katana 17 B12</p>

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
                <p>Intel Core i5 -12450H</p>
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
                <p>SSD 1To, RAM 16 Go DDR5</p>
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
                <p>NVIDIA GeForce RTX 4060 GDDR6</p>
              </div>
            </div>

            <div className="float-right pl-[140px]">
              <div className="mt-[60px] ">
                <p className="ml-[40px]">1 149,99€</p>

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

      <div className="flex space-x-4 pl-[700px] mt-[70px] pb-[50px]">
        <div>
          <Link href="/produits" className="text-red-600">
            1
          </Link>
        </div>
        <div>
          <Link href="/produits2" className="text-red-600">
            2
          </Link>
        </div>
        <div>
          <Link href="/produits4" className="text-red-600">
            4
          </Link>
        </div>
      </div>
    </div>
  );
}
