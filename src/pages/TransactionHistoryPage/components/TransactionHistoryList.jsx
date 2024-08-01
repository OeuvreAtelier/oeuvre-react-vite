import React from "react"
import TransactionCard from "../../../shared/components/TransactionCard"
import IconButton from "../../../shared/components/IconButton"
import {
  faBookmark,
  faGear,
  faHistory,
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import TransactionCardParent from "../../../shared/components/TransactionCardParent"
export default function TransactionHistoryList() {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto pt-28 pb-8">
      <div className="flex flex-row justify-center mx-10">
        <div className="w-1/4 px-5 flex flex-col gap-4">
          <IconButton
            btnName="Bookmarks"
            btnIcon={faBookmark}
            color="bg-white"
            hoverColor="bg-slate-100"
            onClick={() => {
              navigate("/bookmarks")
            }}
          />
          <IconButton
            btnName="Transaction History"
            btnIcon={faHistory}
            color="bg-white"
            hoverColor="bg-slate-100"
            onClick={() => {
              navigate("/transaction-history")
            }}
          />
          <IconButton
            btnName="Settings"
            btnIcon={faGear}
            color="bg-white"
            hoverColor="bg-slate-100"
          />
        </div>
        <div className="w-3/4 flex flex-col ps-4">
          <h1 className="text-2xl font-semibold mb-5">Transaction History</h1>
          <TransactionCardParent
            trxId="jskwgkjewg-fjjfkf-3jfdknf-fn"
            trxDate="2022-01-01"
            paymentStatus="Ordered"
            children={
              <>
                <TransactionCard
                  invoiceNumber="OVR/20240801/JKT/1722504396623"
                  productName="Alan Walker's Walkerworld Album"
                  seller="My Anime Store"
                  quantity="3"
                  initPrice="100000"
                  isHidden={false}
                  onClick={() => {
                    navigate("/rate-review")
                  }}
                />
                <TransactionCard
                  invoiceNumber="OVR/20240801/JKT/1722504396623"
                  productName="Alan Walker's Walkerworld Album"
                  seller="My Anime Store"
                  quantity="3"
                  initPrice="100000"
                  isHidden={false}
                  onClick={() => {
                    navigate("/rate-review")
                  }}
                />
              </>
            }
          />
        </div>
      </div>
    </div>
  )
}
