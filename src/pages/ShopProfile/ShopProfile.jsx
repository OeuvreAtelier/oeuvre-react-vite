import React, { useEffect } from "react"
import Footer from "../../shared/components/Footer"
import ProfileHeader from "./components/ProfileHeader"
import ProductList from "./components/ProductList"
import { useDispatch, useSelector } from "react-redux"
import { fetchArtists } from "../../redux/features/profileSlice"
import { fetchMerchandises } from "../../redux/features/productSlice"
import secureLocalStorage from "react-secure-storage"
import { jwtDecode } from "jwt-decode"
import { useAuth } from "../../context/AuthContext"

export default function ShopProfile() {
  const { data: artist } = useSelector((state) => state.artist)
  const { data: merchandises } = useSelector((state) => state.merchandises)
  const { isLoggedIn } = useAuth()
  const dispatch = useDispatch()
  console.log("Logged In:", isLoggedIn)
  console.log("Artist SHOP PROFILE:", artist)

  if (isLoggedIn === true) {
    useEffect(() => {
      const token = secureLocalStorage.getItem("token")
      console.log("1. JWT Token:", token)

      // 2. Using decode JWT to get all the values
      const decodedToken = jwtDecode(token)
      console.log("2. Decoded Token:", decodedToken)

      // 3. Fetching only the "sub" value from the decoded token
      const decodedUserId = decodedToken.sub
      // console.log("3. User ID:", decodedUserId)

      dispatch(fetchArtists(decodedUserId))
      console.log("3. User ID After Update:", decodedUserId)
      console.log("Artist UseEffect:", artist)
      dispatch(fetchMerchandises())
    }, [dispatch])
  }

  return { isLoggedIn } ? (
    <div className="bg-slate-100">
      <ProfileHeader artist={artist} />
      <ProductList artist={artist} merchandises={merchandises} />
      <Footer />
    </div>
  ) : (
    <div className="bg-slate-100">
      <h1>You are not logged in!</h1>
    </div>
  )
}
