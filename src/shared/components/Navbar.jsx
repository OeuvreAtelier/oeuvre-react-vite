import React, { useEffect, useState } from "react"
import NavbarButton from "./NavbarButton"
import Logo from "./Logo"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import AvatarFB from "./AvatarFB"
import Drawer from "./Drawer"
import { useDispatch, useSelector } from "react-redux"
import { jwtDecode } from "jwt-decode"
import { fetchArtists } from "../../redux/features/profileSlice"
import secureLocalStorage from "react-secure-storage"

export default function Navbar() {
  const { data: artist } = useSelector((state) => state.artist)
  const { data: address } = useSelector((state) => state.address)
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  if (isLoggedIn === true) {
    useEffect(() => {
      const token = secureLocalStorage.getItem("token")
      const decodedToken = jwtDecode(token)
      const decodedUserId = decodedToken.sub
      
      dispatch(fetchArtists(decodedUserId))
    }, [dispatch])
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      {artist === null ? (
        <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      ) : (
        <Drawer
          isOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
          artist={artist}
          address={address}
        />
      )}

      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          <Logo
            onClick={() => {
              navigate("/")
            }}
          />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLoggedIn ? (
              <AvatarFB
                img={
                  "https://ik.imagekit.io/muffincrunchy/oeuvre-images/user-picture/default_picture.jpg"
                }
                username="Enigma"
                onClick={() => toggleDrawer()}
                size="full"
              />
            ) : (
              <button
                onClick={() => {
                  navigate("/login")
                }}
                type="button"
                className="text-white font-semibold bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Log In / Register
              </button>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-800">
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
              <NavbarButton
                title="Discover"
                onClick={() => {
                  navigate("/discover")
                }}
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
