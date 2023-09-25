import Image from "next/image";
import Link from "next/link";

export default function Jeux() {
  return (
    <div className="bg-black text-white pt-[70px] pb-[250px] ">
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
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/cod-mw3.jpg"
            height={0}
            width={250}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />

          <div className="mt-[70px] pl-[35px]">
            <p className="font-bold">Call of duty Moderne Warfare III</p>

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

          <div className="float-right pl-[60px]">
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

            <div className="mt-[70px] ">
              <p className="ml-[50px]">79,99€</p>
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
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/spider-man-2.jpg"
            height={0}
            width={250}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />

          <div className="mt-[70px] pl-[35px]">
            <p className="font-bold">Spider man 2</p>

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
              <div className="w-[50px] ">
                <Image
                  src="/pegi-16.jpg"
                  height={0}
                  width={100}
                  alt="pegi 18"
                  className="w-full h-auto pt-[8px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-[80px] pl-[203px]">
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
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/god-of-war.jpg"
            height={0}
            width={250}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />

          <div className="mt-[50px] pl-[35px]">
            <p className="font-bold">God of war</p>

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
          <div className="mt-[80px] pl-[190px]">
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
        <div className="flex space-x-20 bg-mine-shaft-800 rounded-sm w-[1050px] ml-[200px] ">
          <Image
            src="/FFxvi.jpg"
            height={0}
            width={250}
            alt="jeu"
            className="ml-[40px] p-[20px]"
          />
          <div className="mt-[50px] pl-[35px]">
            <p className="font-bold">Final fantasy XVI</p>

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
              <p>Jeu de rôle</p>
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

            <div className="mt-[70px] ">
              <p className="ml-[50px]">79,99€</p>
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
