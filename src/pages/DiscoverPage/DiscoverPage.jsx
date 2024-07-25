import React from "react"
import DiscoverProductList from "./components/DiscoverProductList"
import Footer from "../../shared/components/Footer"

export default function DiscoverPage() {
  return (
    <div className="bg-slate-100">
      <DiscoverProductList />
      <Footer />
    </div>
  )
}
