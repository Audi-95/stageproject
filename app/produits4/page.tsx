import Image from "next/image";
import Link from "next/link";

export default function Produits4() {
  return (
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
          3
        </Link>
      </div>
    </div>
  );
}
