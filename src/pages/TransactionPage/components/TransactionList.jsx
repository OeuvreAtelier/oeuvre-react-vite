import React from "react"
import TransactionCard from "../../../shared/components/TransactionCard"
import IconButton from "../../../shared/components/IconButton"
import { faGear, faHeart, faHistory } from "@fortawesome/free-solid-svg-icons"
export default function TransactionList() {
  return (
    <div className="container mx-auto pt-28 pb-8">
      <div className="flex flex-row justify-center mx-10">
        <div className="w-1/4 px-5 flex flex-col gap-4">
          <IconButton
            btnName="Settings"
            btnIcon={faGear}
            color="bg-white"
            hoverColor="bg-slate-100"
          />
          <IconButton
            btnName="Wishlist"
            btnIcon={faHeart}
            color="bg-white"
            hoverColor="bg-slate-100"
          />
          <IconButton
            btnName="Transaction History"
            btnIcon={faHistory}
            color="bg-white"
            hoverColor="bg-slate-100"
          />
        </div>
        <div className="w-3/4 flex flex-col ps-4">
          <h1 className="text-2xl font-semibold mb-5">Transaction History</h1>
          <TransactionCard
            title="Lorem Ipsum: Dolor Sit Amet, Paperback Version, 2022 Edition"
            seller="My Anime Store"
            quantity="3"
            initPrice="100000"
            isHidden
          />
          <TransactionCard
            title="Lorem Ipsum: Dolor Sit Amet, Paperback Version, 2022 Edition"
            seller="My Anime Store"
            quantity="3"
            initPrice="100000"
          />
          <TransactionCard
            title="Lorem Ipsum: Dolor Sit Amet, Paperback Version, 2022 Edition"
            seller="My Anime Store"
            quantity="3"
            initPrice="100000"
            isHidden
          />
        </div>
      </div>
    </div>
  )
}
