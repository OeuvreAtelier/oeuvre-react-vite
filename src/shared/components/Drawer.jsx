import React from "react"
import IconButton from "./IconButton"
import {
  faBookmark,
  faGear,
  faHistory,
  faShop,
  faShoppingCart,
  faSignOut,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Drawer({ isOpen, toggleDrawer, artist }) {
  const { logout } = useAuth()
  const navigate = useNavigate()

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
          <div className="bg-white size-16 rounded-full me-4">
            <img
              src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
              alt="profile"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="lg-semibold-black">{artist.firstName}{" "}{artist.lastName}</p>
            <p className="md-gray">{artist.email}</p>
          </div>
        </div>
        <IconButton
          btnName="Profile"
          btnIcon={faUserCircle}
          color="bg-white"
          textColor="text-gray-800"
          onClick={() => {
            toggleDrawer()
            navigate("/my-store")
          }}
        />
        <IconButton
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
          btnName="My Cart"
          btnIcon={faShoppingCart}
          color="bg-white"
          textColor="text-gray-800"
          onClick={() => {
            toggleDrawer()
            navigate("/my-store")
          }}
        />
        <IconButton
          btnName="Bookmarks"
          btnIcon={faBookmark}
          color="bg-white"
          textColor="text-gray-800"
          onClick={() => {
            toggleDrawer()
            navigate("/bookmarks")
          }}
        />
        <IconButton
          btnName="Transaction History"
          btnIcon={faHistory}
          color="bg-white"
          textColor="text-gray-800"
          onClick={() => {
            toggleDrawer()
            navigate("/transaction")
          }}
        />
        <IconButton
          btnName="Settings"
          btnIcon={faGear}
          color="bg-white"
          textColor="text-gray-800"
          onClick={toggleDrawer}
        />
        <IconButton
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
