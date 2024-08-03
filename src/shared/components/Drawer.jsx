import React from "react"
import IconButton from "./IconButton"
import {
  faBookmark,
  faGear,
  faHistory,
  faShop,
  faShoppingCart,
  faSignOut,
  faStar,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Drawer({ isOpen, toggleDrawer, artist, address }) {
  const { logout } = useAuth()
  const navigate = useNavigate()

  // console.log("Address Drawer:", address)
  // console.log("Artist Drawer:", artist)

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }
  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>
      <div
        className={`fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-slate-50 w-80 flex flex-col gap-3`}
      >
        <div className="flex flex-row bg-white p-4 rounded-lg mb-2 me-3">
          <img
            className="bg-indigo-500 me-4 mt-1 size-12 rounded-full object-cover align-middle items-center"
            src={
              "https://ik.imagekit.io/muffincrunchy/oeuvre-images/user-picture/default_picture.jpg"
            }
            alt="profile"
          />
          <div className="flex flex-col justify-center">
            <p className="lg-semibold-black">
              {artist.firstName} {artist.lastName}
            </p>
            <p className="md-gray">{artist.email}</p>
          </div>
        </div>
        <IconButton
          id="btn-profile"
          btnName="Profile"
          btnIcon={faUserCircle}
          color="bg-white"
          textColor="text-gray-800"
          onClick={() => {
            toggleDrawer()
            navigate("/view-store")
          }}
        />
        <IconButton
          id="btn-discover"
          btnName="Discover Items"
          btnIcon={faShop}
          color="bg-white"
          textColor="text-gray-800"
          onClick={() => {
            toggleDrawer()
            navigate("/discover")
          }}
        />
        <IconButton
          id="btn-cart"
          btnName="My Cart"
          btnIcon={faShoppingCart}
          color="bg-white"
          textColor="text-gray-800"
          onClick={() => {
            toggleDrawer()
            navigate("/shopping-cart", {
              state: {
                artist: artist,
                address: address,
              },
            })
          }}
        />
        {/* <IconButton
          btnName="Bookmarks"
          btnIcon={faBookmark}
          color="bg-white"
          textColor="text-gray-800"
          onClick={() => {
            toggleDrawer()
            navigate("/bookmarks")
          }}
        /> */}
        <IconButton
          id="btn-history"
          btnName="Transaction History"
          btnIcon={faHistory}
          color="bg-white"
          textColor="text-gray-800"
          onClick={() => {
            toggleDrawer()
            navigate("/transaction-history")
          }}
        />
        <IconButton
          id="btn-rate-review"
          btnName="Rate & Review"
          btnIcon={faStar}
          color="bg-white"
          textColor="text-gray-800"
          onClick={() => {
            toggleDrawer()
            navigate("/rate-review")
          }}
        />
        <IconButton
          id="btn-logout"
          btnName="Log Out"
          btnIcon={faSignOut}
          color="bg-white"
          textColor="text-gray-800"
          onClick={() => {
            toggleDrawer()
            handleLogout()
            navigate("/")
          }}
        />
      </div>
    </>
  )
}
