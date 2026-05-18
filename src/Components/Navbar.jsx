import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className=" fixed
        top-0
        z-[1000]
        flex
        w-full
        items-center
        justify-between
        bg-black/70
        px-[50px]
        py-[15px]
        backdrop-blur-[5px]
        max-md:flex-col
        max-md:gap-[10px]
      "
    >
      <div className="logo_container">
        <Image
          src="/logo.png"
          width={125}
          height={125}
          alt="Logo"
          className="h-auto w-[80px]"
          priority
        />
      </div>

      <nav>
        <ul
          className="
            header_ul
            flex
            gap-[30px]
            max-md:flex-wrap
            max-md:justify-center
          "
        >
          <li className="list-none">
            <Link
              href="#"
              className="
                font-medium
                text-[#f5e6d3]
                no-underline
                transition-all
                duration-300
                hover:text-[#BB2026]
              "
            >
              Home
            </Link>
          </li>

          <li className="list-none">
            <Link
              href="#"
              className="
                font-medium
                text-[#f5e6d3]
                no-underline
                transition-all
                duration-300
                hover:text-[#BB2026]
              "
            >
              Categories
            </Link>
          </li>

          <li className="list-none">
            <Link
              href="#"
              className="
                font-medium
                text-[#f5e6d3]
                no-underline
                transition-all
                duration-300
                hover:text-[#BB2026]
              "
            >
              About
            </Link>
          </li>

          <li className="list-none">
            <Link
              href="#"
              className="
                font-medium
                text-[#f5e6d3]
                no-underline
                transition-all
                duration-300
                hover:text-[#BB2026]
              "
            >
              Service
            </Link>
          </li>

          <li className="list-none">
            <Link
              href="#"
              className="
                font-medium
                text-[#f5e6d3]
                no-underline
                transition-all
                duration-300
                hover:text-[#BB2026]
              "
            >
              Menu
            </Link>
          </li>

          <li className="list-none">
            <Link
              href="#"
              className="
                font-medium
                text-[#f5e6d3]
                no-underline
                transition-all
                duration-300
                hover:text-[#BB2026]
              "
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;