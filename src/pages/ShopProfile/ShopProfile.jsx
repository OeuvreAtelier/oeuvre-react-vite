import React, { useEffect } from "react"
import Footer from "../../shared/components/Footer"
import ProfileHeader from "./components/ProfileHeader"
import ProductList from "./components/ProductList"
import { useDispatch, useSelector } from "react-redux"
import { fetchArtists } from "../../redux/features/profileSlice"
import { fetchMerchandises } from "../../redux/features/productSlice"
import secureLocalStorage from "react-secure-storage"
import { jwtDecode } from "jwt-decode"

export default function ShopProfile() {
  const { data: artist } = useSelector((state) => state.artist)
  const { data: merchandises } = useSelector((state) => state.merchandises)
  const dispatch = useDispatch()

  useEffect(() => {
    // 1. Decoding the encrypted JWT token from secure storage
    const token = secureLocalStorage.getItem("token")
    // console.log("1. JWT Token:", token)

    // 2. Using decode JWT to get all the values
    const decodedToken = jwtDecode(token)
    // console.log("2. Decoded Token:", decodedToken)

    // 3. Fetching only the "sub" value from the decoded token
    const decodedUserId = decodedToken.sub
    // console.log("3. User ID:", decodedUserId)

    dispatch(fetchArtists(decodedUserId))
    dispatch(fetchMerchandises())
  }, [dispatch])

  return (
    <div className="bg-slate-100">
      <ProfileHeader artist={artist} />
      <ProductList artist={artist} merchandises={merchandises} />
      <Footer />
    </div>
  )
}
