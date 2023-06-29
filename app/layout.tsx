import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-black">
        <div className="text-white flex space-x-20">
          <Image
            src="/logo.png"
            height={0}
            width={100}
            alt="Logo"
            className="pt-[10px] "
          />

          <div className="flex space-x-4 text-center mt-10 ">
            <div className="flex space-x-4 text-center ">
              <Link href="/produits">
                <button
                  className="text-black rounded-3xl h-10
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold "
                >
                  Produits
                </button>
              </Link>

              <Link href="/nouveautes">
                <button
                  className="text-black rounded-3xl h-10
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold 
          "
                >
                  Nouveautés
                </button>
              </Link>

              <Link href="/promotions">
                <button
                  className="text-black rounded-3xl h-10
          w-36 bg-heliotrope-300 border-heliotrope-300 text-s font-bold 
          "
                >
                  Promotions
                </button>
              </Link>
            </div>

            <div className="flex space-x-4 text-center pl-[400px]">
              <button
                className="text-black rounded-3xl h-10
          w-36 bg-heliotrope-300 border-heliotrope-300 text-xs font-bold "
              >
                Inscription/connexion
              </button>

              <Image
                src="/panier.png"
                height={0}
                width={100}
                alt="panier"
                className="rounded-3xl h-10
            w-10 bg-heliotrope-300 border-heliotrope-300 "
              />
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

          <div className="flex space-x-4 text-center mt-[8px] pl-[800px]">
            <Image
              src="/facebook.png"
              height={0}
              width={40}
              alt="logo facebook"
            />

            <Link href="https://www.instagram.com">
              <Image
                src="/instagram.png"
                height={0}
                width={40}
                alt="logo instagram"
              />
            </Link>

            <Image
              src="/twitter.png"
              height={0}
              width={40}
              alt="logo twitter"
            />
            <Image
              src="/discord.png"
              height={0}
              width={40}
              alt="logo discord"
            />
          </div>
        </div>

        <br></br>

        <p>Copyright © 2023 BERSERK Corporation</p>
      </footer>
    </>
  );
}
