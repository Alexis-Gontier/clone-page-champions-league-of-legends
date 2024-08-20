import { Crimson_Pro } from "next/font/google";

const crimsonPro = Crimson_Pro({
  weight: ['400', '700'],
  style: ['italic'],
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <div className="w-full my-10 flex flex-col justify-center items-center gap-0 lg:max-w-screen-lg	lg:mx-auto">
      <p className="text-center text-base uppercase sm:text-xl">
        choisissez votre
      </p>
      <h1 className={`${crimsonPro.className} text-center text-5xl uppercase italic pb-5 font-bold sm:text-7xl`}>
        champion
      </h1>
      <p className="text-center text-sm sm:text-lg">
        Avec plus de 140 champions disponibles, vous en trouverez forcément un qui vous corresponde. Maîtrisez-en un, ou maîtrisez-les tous.
      </p>
    </div>
  )
}
