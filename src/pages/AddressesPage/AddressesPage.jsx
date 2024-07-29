import { useDispatch, useSelector } from "react-redux"
import Footer from "../../shared/components/Footer"
import ManageAddresses from "./components/ManageAddresses"
import { useEffect } from "react"
import { fetchAddressesByUserId } from "../../redux/features/addressSlice"
import secureLocalStorage from "react-secure-storage"
import { jwtDecode } from "jwt-decode"
import { fetchArtists } from "../../redux/features/profileSlice"

export default function AddressesPage() {
  const { data: artist } = useSelector((state) => state.artist)
  const { data: addresses } = useSelector((state) => state.address)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = secureLocalStorage.getItem("token")
    const decodedToken = jwtDecode(token)
    const decodedUserId = decodedToken.sub
    dispatch(fetchArtists(decodedUserId))
    dispatch(fetchAddressesByUserId(decodedUserId))
  }, [dispatch])
  return (
    <div className="bg-slate-100">
      <ManageAddresses artist={artist} addresses={addresses} />
      <Footer />
    </div>
  )
}
