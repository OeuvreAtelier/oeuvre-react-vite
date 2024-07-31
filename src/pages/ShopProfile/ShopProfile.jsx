import React, { useEffect } from "react"
import Footer from "../../shared/components/Footer"
import ProfileHeader from "./components/ProfileHeader"
import ProductList from "./components/ProductList"
import { useDispatch, useSelector } from "react-redux"
import { fetchArtists } from "../../redux/features/profileSlice"
import { fetchMerchandisesByUserId } from "../../redux/features/productSlice"
import secureLocalStorage from "react-secure-storage"
import { jwtDecode } from "jwt-decode"

export default function ShopProfile() {
  const { data: artist } = useSelector((state) => state.artist)
  const { data: merchandises } = useSelector((state) => state.merchandises)
  const dispatch = useDispatch()

  console.log("Artist ID:", artist.id)
  useEffect(() => {
    const token = secureLocalStorage.getItem("token")
    const decodedToken = jwtDecode(token)
    const decodedUserId = decodedToken.sub
    dispatch(fetchArtists(decodedUserId))
    dispatch(fetchMerchandisesByUserId({ userId: artist.id, page: 1 }))
  }, [dispatch])

  return (
    <div className="bg-slate-100">
      <ProfileHeader artist={artist} />
      <ProductList artist={artist} merchandises={merchandises} />
      <Footer />
    </div>
  )
}
