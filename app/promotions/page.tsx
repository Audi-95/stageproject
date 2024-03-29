import Image from "next/image";
import Link from "next/link";

export default function Promotions() {
  return (
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

          <div className="float-right pl-[181px]">
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

          <div className="mt-[80px] pl-[60px]">
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

          <div className="mt-[70px] pl-[130px]">
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

      <div className="bg-black text-white pt-20 pb-[60px]">
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

          <div className="float-right pl-[168px]">
            <div className="mt-[50px] ">
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
    </div>
  );
}
