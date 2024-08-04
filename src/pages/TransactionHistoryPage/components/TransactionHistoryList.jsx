import React, { useEffect, useState } from "react"
import TransactionCard from "../../../shared/components/TransactionCard"
import { useNavigate } from "react-router-dom"
import TransactionCardParent from "../../../shared/components/TransactionCardParent"
import { useDispatch, useSelector } from "react-redux"
import { fetchTransactionsByUserId } from "../../../redux/features/transactionSlice"
import EmptyContentSmall from "../../../shared/components/EmptyContentSmall"
import Animation from "../../../assets/nothing.json"
import { fetchReviewsByUserId } from "../../../redux/features/reviewSlice"

export default function TransactionHistoryList() {
  const { data: artist } = useSelector((state) => state.artist)
  const { data: merchandises } = useSelector((state) => state.merchandises)
  const { data: transaction } = useSelector((state) => state.transaction)
  const { data: review } = useSelector((state) => state.review)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const { paging: totalPages } = useSelector((state) => state.transaction)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchReviewsByUserId(artist.id))
    setIsLoading(true)
    dispatch(
      fetchTransactionsByUserId({ userId: artist.id, page: currentPage })
    ).then(setIsLoading(false))

    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js"
    let scriptTag = document.createElement("script")
    scriptTag.src = midtransScriptUrl
    const myMidtransClientKey = "SB-Mid-client-jteTefOIUDR5NWJQ"
    scriptTag.setAttribute("data-client-key", myMidtransClientKey)
    document.body.appendChild(scriptTag)
    return () => {
      document.body.removeChild(scriptTag)
    }
  }, [artist, currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  const handlePayment = (selectedToken) => {
    try {
      const token = selectedToken
      if (!token) {
        throw new Error("Error getting token!")
      }
      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log("Payment successful:", result)
          clearCart()
          navigate("/discover")
        },
        onPending: function (result) {
          console.log("Payment pending:", result)
        },
        onError: function (result) {
          console.log("Payment error:", result)
        },
        onClose: function () {
          console.log("Customer closed the popup without finishing the payment")
        },
      })
    } catch (error) {
      console.error("Cannot pay for the selected transaction!", error)
      alert("Cannot pay for the selected transaction!", error)
    }
  }

  console.log("Transaction Length:", transaction.length)
  console.log("Total Pages:", totalPages)

  return (
    <div className="container mx-auto pt-28 pb-8">
      <div className="flex flex-row justify-center mx-10">
        <div className="w-1/4 px-5 flex flex-col gap-4"></div>
        <div className="w-3/4 flex flex-col ps-4">
          <h1 className="text-2xl font-semibold mb-5">Transaction History</h1>
          {transaction.length === 0 ? (
            <EmptyContentSmall
              title={"Nothing to show here..."}
              middleText={
                "Looks like you didn't buy anything from Oeuvre... yet. You can order something from our great sellers!"
              }
              lowerText={"Or perhaps, maybe you got something to do..."}
              animation={Animation}
            />
          ) : (
            <>
              <div>
                {transaction.map((trx) => (
                  <TransactionCardParent
                    key={trx.id}
                    trxId={trx.id}
                    trxDate={JSON.stringify(trx.transactionDate).slice(1, 11)}
                    paymentStatus={trx.payment.transactionStatus.toUpperCase()}
                    onClick={() => {
                      handlePayment(trx.payment.token)
                    }}
                    address={`${trx.address.detail}, ${trx.address.city}, ${trx.address.state}, ${trx.address.country} ${trx.address.postalCode}`}
                    children={
                      <>
                        {trx.transactionDetails.map((trxDetail) => (
                          <TransactionCard
                            invoiceNumber={trxDetail.invoice}
                            productName={trxDetail.product.name}
                            seller={trxDetail.product.user.displayName}
                            quantity={trxDetail.quantity}
                            initPrice={trxDetail.product.price}
                            isHidden={
                              trx.payment.transactionStatus === "settlement" &&
                              trxDetail.invoice !== review.transactionDetail
                                ? false
                                : true
                            }
                            onClick={() => {
                              navigate("/rate-review", {
                                state: {
                                  artist: artist,
                                  merchandises: merchandises,
                                  trxDetail: trxDetail,
                                },
                              })
                            }}
                          />
                        ))}
                      </>
                    }
                  />
                ))}
              </div>
              <div className="flex flex-row gap-2 mt-6 justify-end">
                {[...Array(totalPages.totalPages)].map((_, index) => (
                  <div
                    className={
                      currentPage === index + 1
                        ? `p-2 cursor-pointer rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold`
                        : `p-2 cursor-pointer rounded-lg bg-white hover:bg-gray-100 text-gray-600`
                    }
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={currentPage === index + 1}
                  >
                    {index + 1}
                  </div>
                ))}
                {console.log("Current Page:", currentPage)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
