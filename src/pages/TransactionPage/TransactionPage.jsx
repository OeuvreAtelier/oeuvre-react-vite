import React from 'react'
import TransactionConfirmation from './components/TransactionConfirmation'
import Footer from '../../shared/components/Footer'

export default function TransactionPage() {
  return (
    <div className="bg-slate-100">
    <TransactionConfirmation />
    <Footer />
  </div>
  )
}
