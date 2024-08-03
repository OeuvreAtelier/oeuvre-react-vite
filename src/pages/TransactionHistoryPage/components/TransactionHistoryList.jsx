import React, { useEffect } from "react"
import TransactionCard from "../../../shared/components/TransactionCard"
import IconButton from "../../../shared/components/IconButton"
import {
  faBookmark,
  faGear,
  faHistory,
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import TransactionCardParent from "../../../shared/components/TransactionCardParent"
import { useDispatch } from "react-redux"
import { fetchTransactionsByUserId } from "../../../redux/features/transactionSlice"
import EmptyContentSmall from "../../../shared/components/EmptyContentSmall"
import Animation from "../../../assets/nothing.json"

export default function TransactionHistoryList({
  artist,
  merchandises,
  transaction,
}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTransactionsByUserId(artist.id))
  }, [dispatch])

  console.log("Artist ID HISTORY:", artist.id)
  console.log("Transaction Length:", transaction.length)
  return (
    <div className="container mx-auto pt-28 pb-8">
      <div className="flex flex-row justify-center mx-10">
        <div className="w-1/4 px-5 flex flex-col gap-4">
          <IconButton
          id="bookmark"
            btnName="Bookmarks"
            btnIcon={faBookmark}
            color="bg-white"
            hoverColor="bg-slate-100"
            onClick={() => {
              navigate("/bookmarks")
            }}
          />
          <IconButton
            id="history"
            btnName="Transaction History"
            btnIcon={faHistory}
            color="bg-white"
            hoverColor="bg-slate-100"
            onClick={() => {
              navigate("/transaction-history")
            }}
          />
          <IconButton
            id="settings"
            btnName="Settings"
            btnIcon={faGear}
            color="bg-white"
            hoverColor="bg-slate-100"
          />
        </div>
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
            <div>
              {transaction.map((trx) => (
                <TransactionCardParent
                  key={trx.id}
                  trxId={trx.id}
                  trxDate={JSON.stringify(trx.transactionDate).slice(1, 11)}
                  paymentStatus={trx.payment.transactionStatus.toUpperCase()}
                  onClick={() => {
                    alert("Clicked!")
                  }}
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
                            trx.payment.transactionStatus === "paid"
                              ? false
                              : true
                          }
                          onClick={() => {
                            navigate("/rate-review")
                          }}
                        />
                      ))}
                    </>
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
