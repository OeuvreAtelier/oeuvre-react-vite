import React, { useEffect } from 'react'
import Footer from '../../shared/components/Footer'
import ProfileHeader from './components/ProfileHeader'
import ProductList from './components/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtists } from '../../redux/features/profileSlice'
import { fetchMerchandises } from '../../redux/features/productSlice'

export default function ShopProfile() {
  const { data: artist } = useSelector(state => state.artist);
  const { data: merchandises } = useSelector(state => state.merchandises);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArtists(localStorage.getItem("id")))
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
