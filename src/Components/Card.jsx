import Image from "next/image";
import Link from "next/link";

const Card = ({ id, name, rating, image, cuisine }) => {
  return (
  
    <div
      className="
        w-full
        max-w-[320px]
        overflow-hidden
        rounded-[20px]
        bg-[#161616]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-[1.02]
        cursor-pointer
        flex
        flex-col
        h-full
      "
    >
      <div className="relative w-full h-[220px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="mb-3 text-[1.2rem] font-semibold text-[#f5e6d3] line-clamp-2">
          {name}
        </h3>

        <div className="mb-4 flex gap-2 flex-wrap">
          <span
            className="
              rounded-full
              bg-[#BB2026]
              px-3
              py-1
              text-sm
              text-white
            "
          >
            {cuisine}
          </span>

          <span
            className="
              rounded-full
              bg-[#BB2026]
              px-3
              py-1
              text-sm
              text-white
            "
          >
            ✪ {rating}
          </span>
        </div>

        <Link
          href={`/recipe/${id}`}
          className="
            w-full
            rounded-full
            border
            border-[#BB2026]
            p-2
            text-[#f5e6d3]
            transition-all
            duration-300
            hover:bg-[#BB2026]
            text-center
            mt-auto
          "
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};


export default Card;