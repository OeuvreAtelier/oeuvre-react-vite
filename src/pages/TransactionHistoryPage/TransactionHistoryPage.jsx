import React from "react"
import Footer from "../../shared/components/Footer"
import TransactionHistoryList from "./components/TransactionHistoryList"
import { useSelector } from "react-redux"

export default function TransactionHistoryPage() {
  const { data: artist } = useSelector((state) => state.artist)
  const { data: merchandises } = useSelector((state) => state.merchandises)
  const { data: transaction } = useSelector((state) => state.transaction)
  return (
    <div className="bg-slate-100">
      <TransactionHistoryList
        artist={artist}
        merchandises={merchandises}
        transaction={transaction}
      />
      <Footer />
    </div>
  )
}
