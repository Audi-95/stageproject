import Image from "next/image";
import Link from "next/link";

export default function Produits4() {
  return (
    <div>
      <div className="bg-black text-white pt-20 ">
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/Cooler Master.png"
            height={0}
            width={250}
            alt="Processeur intel core i7"
            className="ml-[40px] "
          />

          <div className="mt-[40px] ">
            <p className="font-bold">
              Cooler Master MasterLiquid ML240L V2 RGB
            </p>

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
              <p>PTDP : 200W</p>
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
                2 ventilateurs 120 mm PWM LED RGB - Pression statique 2.36 mmH2O
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
              <p>Vitesses ventilateur : 650-1800 RPM ± 10%</p>
            </div>
          </div>
          <div className="mt-[60px] pr-[115px]">
            <p className="ml-[52px]">79,94€</p>
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
            src="/Corsair ICUE H150i.png"
            height={0}
            width={250}
            alt="Processeur intel core i7"
            className="ml-[40px] "
          />

          <div className="mt-[40px] ">
            <p className="font-bold">Corsair ICUE H150i RGB ELITE</p>

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
              <p>Module Corsair Link (USB interne)</p>
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
                TWaterblock avec base en cuivre, pour une meilleure conductivité
                de la chaleur
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
              <p>Waterblock Capellix RGB avec 33 LED</p>
            </div>
          </div>
          <div className="mt-[60px] pr-[115px]">
            <p className="ml-[52px]">219,95€</p>
            <button
              className="text-black h-12
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold mt-[20px]"
            >
              Acheter maintenant
            </button>
          </div>
        </div>

        <div>
          <div className="bg-black text-white pb-20">
            <div className="text-white pt-20 ">
              <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
                <Image
                  src="/Asus ROG Crosshair X670E Hero.png"
                  height={0}
                  width={300}
                  alt="jeu"
                  className="ml-[40px] p-[20px]"
                />
                <div className="mt-[70px] pl-[30px]">
                  <p className="font-bold">Asus ROG Crosshair X670E Hero</p>

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
                    <p>Socket AMD AM5 pour processeur AMD Ryzen 7000</p>
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
                    <p>4 Slots mémoire DDR5 6400 MHz (O.C.) Dual-Channel</p>
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
                    <p>Réseaux LAN 2.5 GbE + Wi-FI 6E & Bluetooth 5.2</p>
                  </div>
                </div>

                <div className="float-right pl-[40px]">
                  <div className="mt-[80px] ">
                    <p className="ml-[40px]">739,96€</p>

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

          <div className="bg-black text-white pb-20">
            <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
              <Image
                src="/Asus ROG STRIX B550-XE.png"
                height={0}
                width={300}
                alt="jeu"
                className="ml-[40px] p-[20px]"
              />
              <div className="mt-[70px] pl-[30px]">
                <p className="font-bold">Asus ROG STRIX B550-XE GAMING WIFI</p>

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
                  <p>Socket AMD AM4 pour processeur AMD Ryzen 5000</p>
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
                  <p>4 Slots mémoire DDR4 5100 MHz Dual-Channel (O.C)</p>
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
                  <p>6 ports SATA 6Gb/s + 2 x M.2 PCIe 4.0 4x</p>
                </div>
              </div>

              <div className="float-right pl-[40px]">
                <div className="mt-[80px] ">
                  <p className="ml-[40px]">359,95€</p>

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

          <div className="bg-black text-white pb-20">
            <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
              <Image
                src="/Asus ROG STRIX B650-A.png"
                height={0}
                width={300}
                alt="jeu"
                className="ml-[40px] p-[20px]"
              />
              <div className="mt-[70px] pl-[30px]">
                <p className="font-bold">Asus ROG STRIX B650-A</p>

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
                  <p>Socket AMD AM5 pour processeur AMD Ryzen 7000</p>
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
                  <p>4 Slots mémoire DDR5 6400 MHz (O.C.) Dual-Channel</p>
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
                  <p>Réseaux LAN Intel 2.5 GbE + Wi-Fi 6E & Bluetooth</p>
                </div>
              </div>

              <div className="float-right pl-[40px]">
                <div className="mt-[80px] ">
                  <p className="ml-[40px]">289,96€</p>

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

          <div className="bg-black text-white pb-20 ">
            <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
              <Image
                src="/Fox Spirit Akura.png"
                height={0}
                width={300}
                alt="jeu"
                className="ml-[40px] p-[20px]"
              />
              <div className="mt-[80px] pl-[30px]">
                <p className="font-bold">Fox Spirit Akura RGB</p>

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
                  <p>16 Go (2x 8 Go) DDR4</p>
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
                  <p>Fréquence : 3600 MHz CL18</p>
                </div>
              </div>

              <div className="pl-[230px]">
                <div className="mt-[80px] ">
                  <p className="ml-[50px]">69,95€</p>

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

          <div className="bg-black text-white pb-20 ">
            <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
              <Image
                src="/Corsair Dominator Platinum noir.png"
                height={0}
                width={300}
                alt="jeu"
                className="ml-[40px] p-[20px]"
              />
              <div className="mt-[80px] pl-[30px]">
                <p className="font-bold">Corsair Dominator Platinum RGB Noir</p>

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
                  <p>DDR5 32 Go (2 x 16 Go)</p>
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
                  <p>5600 MHz CL36</p>
                </div>
              </div>

              <div className="pl-[175px]">
                <div className="mt-[80px] ">
                  <p className="ml-[50px]">198,95€</p>

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

          <div className="bg-black text-white pb-20 ">
            <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
              <Image
                src="/Corsair Dominator Platinum blanc.png"
                height={0}
                width={300}
                alt="jeu"
                className="ml-[40px] p-[20px]"
              />
              <div className="mt-[80px] pl-[30px]">
                <p className="font-bold">
                  Corsair Dominator Platinum RGB blanc
                </p>

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
                  <p>DDR5 32 Go (2 x 16 Go)</p>
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
                  <p>5600 MHz CL36</p>
                </div>
              </div>

              <div className="pl-[165px]">
                <div className="mt-[80px] ">
                  <p className="ml-[50px]">198,95€</p>

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

          <div className="bg-black text-white pb-20">
            <div className="flex space-x-[0px] bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
              <Image
                src="/Gigabyte B650 AORUS ELITE.png"
                height={0}
                width={300}
                alt="jeu"
                className="ml-[40px] p-[20px]"
              />
              <div className="mt-[80px] pl-[25px]">
                <p className="font-bold">Gigabyte B650 AORUS ELITE AX</p>

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
                  <p>Socket AMD AM5 pour processeur AMD Ryzen 7000</p>
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
                  <p>Wi-Fi 6E et Bluetooth 5.2 + LAN 2.5 GbE</p>
                </div>
              </div>

              <div className="pl-[60px]">
                <div className="mt-[80px] ">
                  <p className="ml-[40px]">229,95€</p>

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
              <Link href="/produits2" className="text-red-600">
                2
              </Link>
            </div>
            <div>
              <Link href="/produits3" className="text-red-600">
                3
              </Link>
            </div>
            <div>
              <Link href="/produits5" className="text-red-600">
                5
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
