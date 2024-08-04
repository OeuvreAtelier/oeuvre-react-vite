import React from "react"
import Footer from "../../shared/components/Footer"
import TransactionHistoryList from "./components/TransactionHistoryList"

export default function TransactionHistoryPage() {
  return (
    <div className="bg-slate-100">
      <TransactionHistoryList />
      <Footer />
    </div>
  )
}
