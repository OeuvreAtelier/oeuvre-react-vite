import React, { useEffect, useState } from "react"
import Footer from "../../shared/components/Footer"
import TransactionHistoryList from "./components/TransactionHistoryList"
import { useDispatch, useSelector } from "react-redux"
import { fetchTransactionsByUserId } from "../../redux/features/transactionSlice"

export default function TransactionHistoryPage() {
  const { data: artist } = useSelector((state) => state.artist)
  const { data: merchandises } = useSelector((state) => state.merchandises)
  const { data: transaction } = useSelector((state) => state.transaction)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchTransactionsByUserId(artist.id))
      .then(setIsLoading(false))
  }, [artist])

  if (isLoading) {
    return <p>Loading...</p>
  }

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
