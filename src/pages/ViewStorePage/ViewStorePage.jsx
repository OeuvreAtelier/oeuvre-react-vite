import React, { useEffect } from "react"
import StoreHeader from "./components/StoreHeader"
import Footer from "../../shared/components/Footer"
import StoreProductList from "./components/StoreProductList"
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchArtists } from "../../redux/features/profileSlice"
import { fetchStoreByUserId } from "../../redux/features/storeSlice"

export default function ViewStorePage() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { viewedArtistId } = location.state

  console.log("Viewed Artist ID:", viewedArtistId) // DONE

  useEffect(() => {
    dispatch(fetchArtists(viewedArtistId))
  }, [dispatch, viewedArtistId])

  return (
    <div className="bg-slate-100">
      <StoreHeader artist={viewedArtistId} />
      {/* <StoreProductList artist={viewedArtistId} /> */}
      <Footer />
    </div>
  )
}
