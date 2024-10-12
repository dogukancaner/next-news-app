import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-100 text-slate-900 py-8 mt-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Son Dakika</h2>
            <p className="text-sm mt-2">Güncel Haber Kaynağınız</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-4">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/haber" className="hover:text-blue-400">
                  Haber
                </Link>
              </li>
              <li>
                <Link href="/spor" className="hover:text-blue-400">
                  Spor
                </Link>
              </li>
              <li>
                <Link href="/ekonomi" className="hover:text-blue-400">
                  Ekonomi
                </Link>
              </li>
              <li>
                <Link href="/teknoloji" className="hover:text-blue-400">
                  Teknoloji
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Son Dakika. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
