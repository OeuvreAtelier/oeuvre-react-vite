import React, { useEffect } from "react"
import TransactionCard from "../../../shared/components/TransactionCard"
import IconButton from "../../../shared/components/IconButton"
import { faCashRegister } from "@fortawesome/free-solid-svg-icons"
import { useLocation, useNavigate } from "react-router-dom"
import EmptyContentSmall from "../../../shared/components/EmptyContentSmall"
import Animation from "../../../assets/shopping-cart.json"
import TransactionConfirmationCard from "../../../shared/components/TransactionConfirmationCard"

export default function ShoppingConfirmation() {
  const { state } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (state !== null) {
      console.log("State SHOPPING CART:", state)
    } else {
      navigate("/discover")
    }
  }, [navigate, state])
  return (
    <div className="container mx-auto pt-28 pb-8">
      <h1 className="xxl-semibold-black mb-6 mx-16">My Shopping Cart</h1>
      <div className="flex flex-row justify-center mx-10">
        <div className="w-8/12 flex flex-col ps-4 pe-5">
          {/* <EmptyContentSmall
            title="No products yet..."
            middleText="You should add the products you really wanted to the cart first, because one day this product will be missing sooner or later!"
            lowerText="You will get your desired product after you pay and the item is shipped."
            animation={Animation}
          /> */}
          <TransactionConfirmationCard
            seller={state.merchandise.user.displayName}
            title={state.merchandise.name}
            stock={state.merchandise.stock}
            quantity={3}
            initPrice={state.merchandise.price}
            leftClick={() => {}}
            rightClick={() => {}}
          />
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
              <p className="md-gray">Convenience Fees</p>
              <p className="md-black">Rp1000</p>
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
