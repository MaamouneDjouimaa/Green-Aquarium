import React from "react";
import logo from "../assets/logo.png"; // Si le logo est dans src/assets
import FacebookLogo from "../assets/socials/FacebookLogo.png"; // Logo Facebook
import InstagramLogo from "../assets/socials/InstagramLogo.png"; // Logo Instagram
import TiktokLogo from "../assets/socials/TiktokLogo.png"; // Logo TikTok
import SnapLogo from "../assets/socials/SnapLogo.png"; // Logo Snapchat

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 px-6">
      <div className="container mx-auto text-center">
        {/* Logo et Slogan */}
        <h2 className="text-2xl font-bold">
          <span className="text-green-300">Green</span> Aquarium
        </h2>
        <p className="mt-2 text-sm">L’aquaponie pour une agriculture durable et innovante.</p>

        {/* Liens de Navigation */}
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="/about" className="hover:text-green-300 transition">À Propos</a>
            </li>
            <li>
              <a href="/solutions" className="hover:text-green-300 transition">Solutions</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-300 transition">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Réseaux Sociaux */}
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="hover:text-green-300 transition">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#" className="hover:text-green-300 transition">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="hover:text-green-300 transition">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm opacity-75">© 2024 Green Aquarium. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
