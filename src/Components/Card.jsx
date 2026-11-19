import Image from "next/image";
import Link from "next/link";

const Card = ({ id, name, rating, image, cuisine, tags }) => {
  return (
    <div className="overflow-hidden rounded-[20px] bg-[#161616] transition-all duration-400 hover:-translate-y-2.5 hover:scale-[1.02]">
      <div className="relative h-[220px] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="p-[15px] text-[1.2rem] font-bold">
        {name}
      </h3>

      {tags.map((tag) =>
        <h4 key={tag} className="ml-2.5 inline-block rounded-[20px] bg-[#BB2026] px-3 py-1.5 font-bold text-white">
          {tag}
        </h4>
      )}

      <h5 className="px-[15px] py-2.5 text-sm font-bold">
        ✪ {rating}
      </h5>

      <p className="p-[15px]">
        {cuisine}
      </p>

      <Link
        href={`/recipe/${id}`}
        className="m-[15px] block rounded-[25px] border border-[#BB2026] p-2.5 text-center transition-all duration-300 hover:bg-[#BB2026]"
      >
        Ver más
      </Link>
    </div>
  );
};

export default Card;
