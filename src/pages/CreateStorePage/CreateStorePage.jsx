import React from "react"
import CreateEditStore from "./components/CreateEditStore"
import Navbar from "../../shared/components/Navbar"
import Footer from "../../shared/components/Footer"
import { useSelector } from "react-redux"

export default function CreateStorePage() {
  const { data: address } = useSelector((state) => state.address)
  return (
    <div className="bg-slate-100">
      <Navbar />
      <CreateEditStore address={address}/>
      <Footer />
    </div>
  )
}
