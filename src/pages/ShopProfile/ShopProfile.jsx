import React, { useEffect } from "react"
import Footer from "../../shared/components/Footer"
import ProfileHeader from "./components/ProfileHeader"
import ProductList from "./components/ProductList"
import { useDispatch, useSelector } from "react-redux"
import { fetchArtists } from "../../redux/features/profileSlice"
import { fetchMerchandisesByUserId } from "../../redux/features/productSlice"
import secureLocalStorage from "react-secure-storage"
import { jwtDecode } from "jwt-decode"
import { fetchStoreByUserId } from "../../redux/features/storeSlice"

export default function ShopProfile() {
  const { data: artist } = useSelector((state) => state.artist)
  const { data: merchandises } = useSelector((state) => state.merchandises)
  const { data: store } = useSelector((state) => state.store)

  const dispatch = useDispatch()

  console.log("Artist ID:", artist.id)
  useEffect(() => {
    const token = secureLocalStorage.getItem("token")
    const decodedToken = jwtDecode(token)
    const decodedUserAccountId = decodedToken.sub
    dispatch(fetchArtists(decodedUserAccountId))
    dispatch(fetchStoreByUserId(artist.id))
    dispatch(fetchMerchandisesByUserId({ userId: artist.id, page: 1 }))
  }, [dispatch])

  console.log("Store Shop Profile:", store)

  return (
    <div className="bg-slate-100">
      <ProfileHeader artist={artist} store={store} />
      <ProductList artist={artist} merchandises={merchandises} />
      <Footer />
    </div>
  )
}
