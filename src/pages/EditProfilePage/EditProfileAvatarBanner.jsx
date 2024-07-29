import React from "react"
import AvatarBanner from "./components/AvatarBanner"
import Navbar from "../../shared/components/Navbar"

export default function EditProfileAvatarBanner() {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <AvatarBanner />
    </div>
  )
}
