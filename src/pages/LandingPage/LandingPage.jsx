import React from "react";
import Navbar from "../../shared/components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Footer from "../../shared/components/Footer";
import BestSeller from "./components/BestSeller";

export default function LandingPage() {
  return (
    <div className="bg-slate-100">
      <Hero />
      <BestSeller />
      <Category />
      <Footer />
    </div>
  );
}
