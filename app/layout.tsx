import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <header className="bg-black">
          <div className="text-white flex space-x-20">
            <Link href="/">
              <Image
                src="/logo.png"
                height={0}
                width={100}
                alt="Logo"
                className="md:h-[140px] md:w-[130px] max-md:h-[140px] max-md:w-[130px] "
              />
            </Link>

            <div className="flex space-x-4 text-center mt-10 ">
              <div className="flex space-x-4 text-center ">
                <Link href="/produits">
                  <button className="text-black rounded-3xl bg-heliotrope-300 border-heliotrope-300 text-s font-bold md:h-[40px] md:w-[130px] max-md:h-[40px] max-md:w-[130px]">
                    Produits
                  </button>
                </Link>

                <Link href="/nouveautes">
                  <button className="text-black rounded-3xl bg-heliotrope-300 border-heliotrope-300 text-s font-bold md:h-[40px] md:w-[130px] max-md:h-[40px] max-md:w-[130px]">
                    Nouveautés
                  </button>
                </Link>

                <Link href="/promotions">
                  <button className="text-black rounded-3xl bg-heliotrope-300 border-heliotrope-300 text-s font-bold md:h-[40px] md:w-[130px] max-md:h-[40px] max-md:w-[130px]">
                    Promotions
                  </button>
                </Link>
              </div>

              <div className="flex space-x-4 text-center pl-[570px]">
                <div className="h-10 w-10">
                  <Link href="/connexion">
                    <Image
                      src="/compte.png"
                      height={0}
                      width={100}
                      alt="compte"
                      className="w-full h-auto text-black "
                    />
                  </Link>
                </div>

                <div className="h-10 w-10">
                  <Image
                    src="/panier2.png"
                    height={0}
                    width={100}
                    alt="panier"
                    className="w-full h-auto "
                  />
                </div>

                <div className="h-10 w-10">
                  <Image
                    src="/materiel.png"
                    height={0}
                    width={100}
                    alt="materiel"
                    className="w-full h-auto "
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>

        <footer className="bg-white pb-10">
          <div className="flex space-x-4 text-center pl-[10px]">
            <ul>
              <li className="font-bold mt-[15px]">Aide</li>
            </ul>

            <ul>
              <li className="font-bold mt-[15px]">À propos de nous</li>
            </ul>

            <ul>
              <li className="font-bold mt-[15px]">Contact</li>
            </ul>

            <div className="flex space-x-4 text-center mt-[8px] pl-[900px]">
              <Link href="https://www.facebook.com">
                <Image
                  src="/facebook.png"
                  height={0}
                  width={40}
                  alt="logo facebook"
                  className="w-full h-auto"
                />
              </Link>

              <Link href="https://www.instagram.com/audibinks95/">
                <Image
                  src="/instagram.png"
                  height={0}
                  width={40}
                  alt="logo instagram"
                  className="w-full h-auto"
                />
              </Link>

              <Link href="https://twitter.com">
                <Image
                  src="/twitter.png"
                  height={0}
                  width={40}
                  alt="logo twitter"
                  className="w-full h-auto"
                />
              </Link>

              <Link href="https://discord.com">
                <Image
                  src="/discord.png"
                  height={0}
                  width={40}
                  alt="logo discord"
                  className="w-full h-auto"
                />
              </Link>
            </div>
          </div>

          <br></br>

          <p>Copyright © 2023 InformatiX Corporation</p>
        </footer>
      </body>
    </html>
  );
}
