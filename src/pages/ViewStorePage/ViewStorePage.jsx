import React from "react"
import StoreHeader from "./components/StoreHeader"
import Footer from "../../shared/components/Footer"
import { useLocation } from "react-router-dom"

export default function ViewStorePage() {
  const location = useLocation()
  const { viewedArtistId, ownId } = location.state

  console.log("Viewed Artist ID:", viewedArtistId) // DONE

  return (
    <div className="bg-slate-100">
      <StoreHeader artist={ownId} viewedArtist={viewedArtistId} />
      {/* <StoreProductList artist={viewedArtistId} /> */}
      <Footer />
    </div>
  )
}
