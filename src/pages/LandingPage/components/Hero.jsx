import React from "react";
import Logo from "../../../shared/components/Logo";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="bg-top bg-no-repeat bg-[url('https://wallpapercave.com/wp/wp12471560.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl flex flex-col justify-start items-start py-24 lg:py-56">
        <Logo onClick= {() => navigate("/")} />
        <h1 className="my-4 text-3xl font-light tracking-wide leading-none text-white md:text-5xl lg:text-6xl">
          Where arts meet culture.
        </h1>
        <p className="text-lg font-semibold text-gray-300">
          We are a marketplace with freedom, love, and playfulness that goes
          beyond simple buying and selling.
        </p>
        <p className="mb-8 text-lg font-semibold text-gray-300">
          OEUVRE is a creator's market that connects people through creativity.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="/my-store"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300"
          >
            Get started
          </a>
          <a
            href="/about"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
