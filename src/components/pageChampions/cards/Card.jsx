import Image from "next/image";
import Link from "next/link";
export default function Card({ champion }) {
  return (
    <Link href={`/champions/${champion}`} className="group relative w-64 h-[425px] overflow-hidden">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`}
        alt={`${champion} splash art`}
        layout="fill"
        objectFit="cover"
        className="transform transition-transform duration-500 scale-110 group-hover:scale-125"
      />
      <p className="absolute bottom-0 left-0 right-0 bg-card p-2 text-white text-xl font-bold uppercase italic text-center group-hover:bg-cardHover">
        {champion}
      </p>
    </Link>
  );
}
