import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import Contact from "./pages/Contact";

// Composant ScrollToTop
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll automatiquement en haut de la page
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Activation du ScrollToTop */}
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
