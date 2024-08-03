import React, { useEffect } from "react"
import Logo from "../../../shared/components/Logo"
import { Link, useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <section className="bg-top bg-no-repeat bg-[url('https://wallpapercave.com/wp/wp12471560.jpg')] bg-gray-700 bg-blend-multiply rounded-b-2xl">
      <div className="px-4 mx-auto max-w-screen-xl flex flex-col justify-start items-start py-48">
        <Logo onClick={() => navigate("/")} />
        <h1 className="mb-4 mt-8 text-6xl font-light tracking-wide text-white">
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
          <Link
            to="/view-store"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300"
          >
            Get started
          </Link>
          <Link
            to="/about"
            className="inline-flex justify-center hover:text-gray-800 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}
