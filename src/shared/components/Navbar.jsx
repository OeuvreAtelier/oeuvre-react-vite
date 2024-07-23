import React, { useState } from "react"
import NavbarButton from "./NavbarButton"
import Logo from "./Logo"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import AvatarFB from "./AvatarFB"
import Drawer from "./Drawer"

export default function Navbar() {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  // Drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Logo
            onClick={() => {
              navigate("/")
            }}
          />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLoggedIn ? (
              <AvatarFB
                img={
                  "https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
                }
                username="Enigma"
                width="10"
                onClick={() => toggleDrawer()}
              />
            ) : (
              <button
                onClick={() => {
                  navigate("/login")
                }}
                type="button"
                className="text-white font-semibold bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Log In
              </button>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-900">
              <NavbarButton
                title="Home"
                onClick={() => {
                  navigate("/")
                }}
              />
              <NavbarButton
                title="About"
                onClick={() => {
                  navigate("/about")
                }}
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
