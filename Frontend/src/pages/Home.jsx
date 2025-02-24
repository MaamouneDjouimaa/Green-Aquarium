import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Révolutionnons l'Agriculture avec l'Aquaponie</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Une solution durable pour une culture saine, respectueuse de l'environnement et économisant 90% d’eau.
          </p>
          <a href="/solutions" className="mt-6 inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-lg">
            Découvrir Nos Solutions
          </a>
        </div>
      </section>

      {/* Problèmes & Solutions */}
      <section className="py-16 px-6 container mx-auto">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-10">Les Défis de l'Agriculture & Notre Solution</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Problèmes */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-600">Les Problèmes Actuels</h3>
            <ul className="mt-4 space-y-2">
              <li>💧 <strong>Consommation excessive d’eau</strong></li>
              <li>🌱 <strong>Utilisation intensive de pesticides</strong></li>
              <li>🧪 <strong>Engrais chimiques nocifs</strong></li>
              <li>🌍 <strong>Occupation massive des terres agricoles</strong></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-800">Notre Solution Innovante</h3>
            <ul className="mt-4 space-y-2">
              <li>♻️ <strong>Aquaponie</strong> : une agriculture circulaire</li>
              <li>🚰 <strong>Économie de 90% d’eau</strong></li>
              <li>🍃 <strong>Sans pesticides ni engrais chimiques</strong></li>
              <li>⚡ <strong>Système automatisé et intelligent</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Rejoignez la Révolution Verte</h2>
        <p className="mt-2 text-lg">Adoptez une agriculture durable et contribuez à un avenir plus sain.</p>
        <a href="/contact" className="mt-6 inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-lg">
          Contactez-nous
        </a>
      </section>
    </main>
  );
};

export default Home;
