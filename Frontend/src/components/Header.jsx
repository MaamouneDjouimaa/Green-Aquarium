import { Disclosure } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import FacebookLogo from "../assets/socials/FacebookLogo.png";
import InstagramLogo from "../assets/socials/InstagramLogo.png";
import TiktokLogo from "../assets/socials/TiktokLogo.png";
import SnapLogo from "../assets/socials/SnapLogo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-green-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        <span className="text-green-300">Green</span> Aquarium
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-green-300 transition">Accueil</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-300 transition">À Propos</Link>
          </li>
          <li>
            <Link to="/solutions" className="hover:text-green-300 transition">Solutions</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-300 transition">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* CTA Button */}
      <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
        Nous Contacter
      </Link>
    </header>
  );
};

export default Header;
