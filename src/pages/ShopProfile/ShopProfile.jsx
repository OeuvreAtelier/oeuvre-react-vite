import React, { useEffect, useState } from "react"
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
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    const token = secureLocalStorage.getItem("token")
    const decodedToken = jwtDecode(token)
    const decodedUserAccountId = decodedToken.sub
    dispatch(fetchArtists(decodedUserAccountId))
      .then(dispatch(fetchStoreByUserId(artist.id)))
      .then(dispatch(fetchMerchandisesByUserId({ userId: artist.id, page: 1 })))
      .then(() => setIsLoading(false))
  }, [dispatch, artist])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-slate-100">
      <ProfileHeader artist={artist} store={store} />
      <ProductList artist={artist} merchandises={merchandises} />
      <Footer />
    </div>
  )
}
