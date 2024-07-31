import React, { useEffect, useState, useContext } from "react"
import TransactionCard from "../../../shared/components/TransactionCard"
import IconButton from "../../../shared/components/IconButton"
import { faCashRegister } from "@fortawesome/free-solid-svg-icons"
import { useLocation, useNavigate } from "react-router-dom"
import EmptyContentSmall from "../../../shared/components/EmptyContentSmall"
import Animation from "../../../assets/shopping-cart.json"
import TransactionConfirmationCard from "../../../shared/components/TransactionConfirmationCard"
import { useDispatch } from "react-redux"
import { fetchAddressesByUserId } from "../../../redux/features/addressSlice"
import { Label, Radio } from "flowbite-react"
import { CartContext } from "../../../context/CartContext"

export default function ShoppingConfirmation({ address }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext)
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (state !== null) {
      dispatch(fetchAddressesByUserId(state.artist.id))
      setFormData({
        userId: state.artist.id,
        addressId: "",
        transactionDetails: "",
      })
    } else {
      navigate("/discover")
    }
  }, [navigate, state])

  console.log("User ID CART:", state)

  const handleOpenModal = () => {
    setModalOpen(true)
  }
  const handleCloseModal = () => {
    setModalOpen(false)
    dispatch(fetchAddressesByUserId(state.artist.id))
  }

  useEffect(() => {
    if (state !== null) {
      console.log("State SHOPPING CART:", state)
      dispatch(fetchAddressesByUserId(state.artist.id))
    } else {
      navigate("/discover")
    }
  }, [navigate, state])

  const handleRadioChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
    console.log("Form:", formData)
  }

  const handleIncrement = () => {
    if (count === state.merchandise.stock) return
    setCount((prevCount) => prevCount + 1)
  }

  const handleDecrement = () => {
    if (count === 0) return
    setCount((prevCount) => prevCount - 1)
  }

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
          {/* <TransactionConfirmationCard
            seller={state.merchandise.user.displayName}
            title={state.merchandise.name}
            stock={state.merchandise.stock}
            quantity={count}
            initPrice={state.merchandise.price}
            leftClick={handleDecrement}
            rightClick={handleIncrement}
          /> */}
          <div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  className="flex justify-between items-center"
                  key={item.id}
                >
                  <div className="flex gap-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="rounded-md h-24"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-lg font-bold">{item.title}</h1>
                      <p className="text-gray-600">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        addToCart(item)
                      }}
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        removeFromCart(item)
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {cartItems.length > 0 ? (
              <div className="flex flex-col justify-between items-center">
                <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    clearCart()
                  }}
                >
                  Clear cart
                </button>
              </div>
            ) : (
              <h1 className="text-lg font-bold">Your cart is empty</h1>
            )}
          </div>
        </div>
        <div className="w-4/12">
          <div className="card-border-shadow flex flex-col ps-7 py-4 pe-4 mx-4">
            <h1 className="lg-semibold-black mt-2 mb-4 me-3">
              Shipment Address
            </h1>
            <div className="mb-4">
              <fieldset className="flex max-w-md flex-col gap-4">
                {address.length === 0 ? (
                  <p className="text-white py-2 ps-4 bg-red-500 rounded-lg">
                    No address found, you can create an address first.
                  </p>
                ) : (
                  <div className="flex flex-col gap-2 -mt-2">
                    {address.map((selectedAddress) => (
                      <div
                        className="flex items-center gap-4"
                        onChange={handleRadioChange}
                      >
                        <Radio
                          id={selectedAddress.id}
                          value={selectedAddress.id}
                          name="addressId"
                        />
                        <Label
                          htmlFor={selectedAddress.id}
                          className="sm-black"
                        >
                          {selectedAddress.detail}, {selectedAddress.city},{" "}
                          {selectedAddress.state} {selectedAddress.postalCode},{" "}
                          {selectedAddress.country}
                        </Label>
                      </div>
                    ))}
                  </div>
                )}
              </fieldset>
            </div>
          </div>
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
