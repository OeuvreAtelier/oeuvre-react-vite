import React from 'react'
import ShoppingConfirmation from './components/ShoppingConfirmation'
import Footer from '../../shared/components/Footer'
import { useSelector } from 'react-redux'

export default function ShoppingCartPage() {
  const { data: address } = useSelector((state) => state.address)
  return (
    <div className="bg-slate-100">
    <ShoppingConfirmation address={address}/>
    <Footer />
  </div>
  )
}
