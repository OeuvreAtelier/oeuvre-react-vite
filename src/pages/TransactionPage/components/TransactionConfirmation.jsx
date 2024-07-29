import React from "react"
import TransactionCard from "../../../shared/components/TransactionCard"
import IconButton from "../../../shared/components/IconButton"
import { faCashRegister, faGear } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import EmptyContentSmall from "../../../shared/components/EmptyContentSmall"

export default function TransactionConfirmation({ transactions }) {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto pt-28 pb-8">
      <h1 className="text-2xl font-semibold mb-6">Transaction Confirmation</h1>
      {transactions.length === 0 ? (
        <EmptyContentSmall title="No Transaction" />
      ) : (
        <TransactionCard
          title="Lorem Ipsum: Dolor Sit Amet, Paperback Version, 2022 Edition"
          seller="My Anime Store"
          quantity="3"
          initPrice="100000"
          isHidden
        />
      )}
      <div className="flex flex-row justify-center mx-10">
        <div className="w-8/12 flex flex-col ps-4 pe-5">
          {/* {transactions.length === 0 ? ( */}
          <EmptyContentSmall title="No Transaction" />
          {/* ) : (
            <TransactionCard
              title="Lorem Ipsum: Dolor Sit Amet, Paperback Version, 2022 Edition"
              seller="My Anime Store"
              quantity="3"
              initPrice="100000"
              isHidden
            />
          )} */}
        </div>
        <div className="w-4/12">
          <div className="card-border-shadow flex flex-col ps-7 pt-4 pb-7 pe-4 mx-4">
            <h1 className="lg-semibold-black mt-2 mb-4 me-3">
              Payment Details
            </h1>
            <div className="flex flex-row justify-between mb-3 me-3">
              <p className="md-gray">Payment Method</p>
              <p className="md-black">MIDTRANS</p>
            </div>
            <div className="flex flex-row justify-between mb-3 me-3">
              <p className="md-gray">Subtotal Amount</p>
              <p className="md-black">Rp123456</p>
            </div>
            <div className="flex flex-row justify-between mb-3 me-3">
              <p className="md-gray">"Convenience" Fees</p>
              <p className="md-black">Rp12345</p>
            </div>
            <div className="flex flex-row justify-between mb-5 me-3">
              <p className="md-gray">11% VAT</p>
              <p className="md-black">Rp12345</p>
            </div>
            <div className="flex flex-row justify-between mb-5 me-3">
              <p className="md-semibold-gray">Total Amount</p>
              <p className="md-semibold-black">Rp12345678</p>
            </div>
            <IconButton
              btnName="Pay Now"
              btnIcon={faCashRegister}
              color="bg-indigo-700"
              textColor="text-white"
              onClick={() => {
                navigate("/success")
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
