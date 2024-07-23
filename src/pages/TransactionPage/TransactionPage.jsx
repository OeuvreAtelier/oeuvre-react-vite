import React from "react"
import Footer from "../../shared/components/Footer"
import TransactionList from "./components/TransactionList"

export default function TransactionPage() {
  return (
    <div className="bg-slate-100">
      <TransactionList />
      <Footer />
    </div>
  )
}
