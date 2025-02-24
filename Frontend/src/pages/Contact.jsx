import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire (par exemple, envoi d'une requête API)
    console.log("Message soumis", formData);
    alert("Votre message a été envoyé avec succès !");
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-[#006983] mb-6">
          ✉️ Contactez-Nous
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Vous avez des questions ? Remplissez ce formulaire et nous reviendrons vers vous dans les plus brefs délais.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nom Complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#006983] focus:outline-none"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#006983] focus:outline-none"
                placeholder="Votre email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#006983] focus:outline-none"
              placeholder="Votre numéro de téléphone"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message ✍️
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#006983] focus:outline-none"
              placeholder="Détails de votre message"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#006983] text-white text-lg font-semibold rounded-full hover:bg-[#004d63] focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Envoyer le Message
            </button>
          </div>
        </form>
        
        {/* Informations de contact du garage */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-[#006983] mb-4">
            📍 Nos Coordonnées
          </h2>
          <p className="text-gray-600 mb-2">
            Garage Roubi - Spécialiste Audi et Volkswagen depuis 1981
          </p>
          <p className="text-gray-600 mb-2">
            Adresse : 10 Rue des Garages, 69001 Lyon, France
          </p>
          <p className="text-gray-600 mb-2">
            Téléphone : <strong>04 72 00 00 00</strong>
          </p>
          <p className="text-gray-600 mb-2">
            Email : <strong>contact@garageroubi.fr</strong>
          </p>
          <p className="text-gray-600 mb-2">
            Horaires : Lundi - Vendredi, 9h - 18h
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
