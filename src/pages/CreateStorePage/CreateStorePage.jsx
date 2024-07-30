import React from "react"
import CreateEditStore from "./components/CreateEditStore"
import Navbar from "../../shared/components/Navbar"
import Footer from "../../shared/components/Footer"

export default function CreateStorePage() {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <CreateEditStore />
      <Footer />
    </div>
  )
}
