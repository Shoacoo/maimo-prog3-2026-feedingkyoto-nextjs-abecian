import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#161616] p-9">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">
        <div className="footer_logo">
          <Image
            src="/logo.png"
            width={125}
            height={125}
            alt="Logo"
            className="h-auto w-20 opacity-80"
          />
        </div>

        <ul className="m-0 flex list-none flex-wrap justify-center gap-8 p-0">
          <li>
            <Link
              href="#"
              className="
                text-[1.2rem]
                tracking-wide
                text-[#f5e6d3]
                no-underline
                opacity-70
                transition-all
                duration-300
                hover:text-[#BB2026]
                hover:opacity-100
              "
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="
                text-[1.2rem]
                tracking-wide
                text-[#f5e6d3]
                no-underline
                opacity-70
                transition-all
                duration-300
                hover:text-[#BB2026]
                hover:opacity-100
              "
            >
              Nosotros
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="
                text-[1.2rem]
                tracking-wide
                text-[#f5e6d3]
                no-underline
                opacity-70
                transition-all
                duration-300
                hover:text-[#BB2026]
                hover:opacity-100
              "
            >
              Servicios
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="
                text-[1.2rem]
                tracking-wide
                text-[#f5e6d3]
                no-underline
                opacity-70
                transition-all
                duration-300
                hover:text-[#BB2026]
                hover:opacity-100
              "
            >
              Contacto
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-5">
          <Link
            href="#"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              transition-all
              duration-300
              hover:border-[#BB2026]
              hover:bg-[#BB2026]
            "
          >
            <Image
              src="/logo_instagram.png"
              width={18}
              height={18}
              alt="Instagram"
              className=" object-contain brightness-90 transition-all duration-300"
            />
          </Link>

          <Link
            href="#"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              transition-all
              duration-300
              hover:border-[#BB2026]
              hover:bg-[#BB2026]
            "
          >
            <Image
              src="/logo_facebook.png"
              width={18}
              height={18}
              alt="Facebook"
              className=" object-contain brightness-90 transition-all duration-300"
            />
          </Link>

          <Link
            href="#"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              transition-all
              duration-300
              hover:border-[#BB2026]
              hover:bg-[#BB2026]
            "
          >
            <Image
              src="/logo_twitter.png"
              width={18}
              height={18}
              alt="Twitter"
              className=" object-contain brightness-90 transition-all duration-300"
            />
          </Link>
        </div>

        <div className="mt-5 text-center text-sm opacity-50">
          © 2026 Feeding Kyoto | Todos los derechos y copyright reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;