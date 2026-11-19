import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <Image
        src="/sushi2.0.jpg"
        alt="Hero Sushi"
        fill
        priority
        className="object-cover brightness-[40%]"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative text-center">
        <h1 className="mb-2.5 text-[4rem] font-bold text-[#f5e6d3] max-md:text-[2.5rem]">
          El concepto del Sushi
        </h1>

        <p className="mb-8 text-[1.2rem] text-[#f5e6d3]">
          El mejor sushi japones de BA
        </p>

        <Link
          href="#menu"
          className="
            rounded-full
            bg-[#BB2026]
            px-8
            py-3
            text-white
            no-underline
            transition-all
            duration-300
            hover:bg-[#8f151a]
          "
        >
          Ver menú
        </Link>
      </div>
    </div>
  );
};

export default Hero;