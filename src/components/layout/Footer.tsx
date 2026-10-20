import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/journal" },
  { name: "Plant Library", href: "/library" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-cream">
      <nav>
        <ul className="font-satoshi">
          {footerLinks.map((link) => (
            <li key={link.name} className="border-t border-olive/20">
              <Link
                href={link.href}
                className="flex h-14 items-center px-5 text-[14px] uppercase tracking-[0.08em] text-[#1E1E1E] transition-colors duration-300 hover:text-olive"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col-reverse items-start justify-between md:justify-start md:flex-row md:items-center md:justify-start border-t border-olive/20 pt-2 px-0.5 md:gap-6">
        <Image
          src="/images/footer.svg"
          alt="Wildflora"
          width={162}
          height={40}
          sizes="(min-width: 1024px) 1257px, 100vw"
          className="h-auto w-auto max-w-full md:max-w-[667px] lg:max-w-[1257px]"
        />

        <div className="flex flex-row gap-4 self-center md:flex-col md:gap-3 md:self-auto mb-3 md:mb-0">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-olive hover:text-olive/80 w-[24px] h-[24px]" />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-olive hover:text-olive/80 w-[24px] h-[24px] md:mt-3" />
          </Link>
          <Link
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest className="text-olive hover:text-olive/80 w-[24px] h-[24px] md:mt-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
