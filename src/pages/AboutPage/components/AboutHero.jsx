import React from 'react'
import Logo from '../../../shared/components/Logo'
import { useNavigate } from 'react-router-dom'

export default function AboutHero() {
    const navigate = useNavigate()
  return (
    <section className="bg-top bg-no-repeat bg-[url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-500 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl flex flex-col justify-center items-center py-24 lg:py-56">
        <p className="text-2xl font-semibold bg-white tracking-wide leading-none text-gray-800 p-4">
          The all-in-one platform for artists
        </p>
        <p className="my-4 text-2xl font-semibold bg-white tracking-wide leading-none text-gray-800 p-4">
          to enhance collaboration and creativity.
        </p>
        <Logo onClick={() => navigate("/")} />
      </div>
    </section>
  )
}
