import React, { useEffect, useState, useContext } from "react"
import IconButton from "../../../shared/components/IconButton"
import { faCashRegister } from "@fortawesome/free-solid-svg-icons"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchAddressesByUserId } from "../../../redux/features/addressSlice"
import { Button, Label, Radio } from "flowbite-react"
import { CartContext } from "../../../context/CartContext"
import EmptyContentSmall from "../../../shared/components/EmptyContentSmall"
import Animation from "../../../assets/shopping-cart.json"
import TextButton from "../../../shared/components/TextButton"
import { createTransaction } from "../../../redux/features/transactionSlice"
import ConfirmationModal from "../../../shared/components/ConfirmationModal"

export default function ShoppingConfirmation({ address }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext)
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()
  const [confirmPayment, setConfirmPayment] = useState(false)

  const handleConfirmPayment = () => {
    setConfirmPayment(true)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  useEffect(() => {
    if (state !== null) {
      dispatch(fetchAddressesByUserId(state.artist.id))
      setFormData({
        userId: state.artist.id,
        addressId: "",
        transactionDetails: [],
      })
    } else {
      navigate("/discover")
    }
  }, [navigate, state])

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js"
    let scriptTag = document.createElement("script")
    scriptTag.src = midtransScriptUrl
    const myMidtransClientKey = "SB-Mid-client-jteTefOIUDR5NWJQ"
    scriptTag.setAttribute("data-client-key", myMidtransClientKey)
    document.body.appendChild(scriptTag)
    return () => {
      document.body.removeChild(scriptTag)
    }
  }, [])

  const handleRadioChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
    console.log("Form:", formData)
  }

  const appendLocalStorageData = () => {
    const storedCartItems = localStorage.getItem("cartItems")
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems)
      const trxDetail = parsedCartItems.map((item) => {
        return {
          productId: item.id,
          quantity: item.quantity,
        }
      })
      setFormData({
        ...formData,
        transactionDetails: trxDetail,
      })

      console.log("Form:", formData)
      handleConfirmPayment()
    }
  }

  const handleSubmit = async (e) => {
    setConfirmPayment(false)
    console.log("Processing transaction:", formData)
    e.preventDefault()
    try {
      const action = createTransaction(formData)
      const transactionResponse = await dispatch(action).unwrap()
      console.log("Transaction response:", transactionResponse)
      const token = transactionResponse.data.payment.token
      if (!token) {
        throw new Error("Error getting token!")
      }
      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log("Payment successful:", result)
          handleClearCart()
          navigate("/success")
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
      console.error("Error creating transaction!", error)
      alert("Error creating transaction!", error)
    }
  }

  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  // const addToTransactionDetails = (item) => {
  //   const isItemInDetails = formData.transactionDetails.find(
  //     (detail) => detail.productId === item.id
  //   )

  //   if (isItemInDetails) {
  //     addToCart(item)
  //     setFormData({
  //       ...formData,
  //       transactionDetails: formData.transactionDetails.map((detail) =>
  //         detail.productId === item.id
  //           ? { ...detail, quantity: detail.quantity + 1 }
  //           : detail
  //       ),
  //     })
  //     console.log("Form:", formData)
  //   } else {
  //     setFormData({
  //       ...formData,
  //       transactionDetails: [
  //         ...formData.transactionDetails,
  //         { productId: item.id, quantity: 1 },
  //       ],
  //     })
  //   }
  // }

  // const removeFromTransactionDetails = (item) => {
  //   const isItemInDetails = formData.transactionDetails.find(
  //     (detail) => detail.productId === item.id
  //   )

  //   if (isItemInDetails) {
  //     removeFromCart(item)
  //     setFormData({
  //       ...formData,
  //       transactionDetails: formData.transactionDetails.map((detail) =>
  //         detail.productId === item.id
  //           ? { ...detail, quantity: detail.quantity - 1 }
  //           : detail
  //       ),
  //     })
  //     console.log("Form:", formData)
  //   } else {
  //     setFormData({
  //       ...formData,
  //       transactionDetails: [
  //         ...formData.transactionDetails,
  //         { productId: item.id, quantity: 1 },
  //       ],
  //     })
  //   }
  // }

  const handleClearCart = () => {
    clearCart()
    setFormData({
      ...formData,
      transactionDetails: [],
    })
  }

  return (
    <>
      <ConfirmationModal
        show={confirmPayment}
        onClose={() => setConfirmPayment(false)}
        text="You will be redirected to Midtrans, where you can select which payment method you want to choose."
        leftClick="Cancel"
        rightClick="Okay"
        onLeftClick={() => setConfirmPayment(false)}
        onRightClick={handleSubmit}
        isHidden={false}
      />
      <div className="container mx-auto pt-28 pb-8">
        <h1 className="xxl-semibold-black mb-6 mx-16">My Shopping Cart</h1>
        <div className="flex flex-row justify-center mx-10">
          <div className="w-8/12 flex flex-col ps-4 pe-5">
            <div className="flex-col flex">
              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div
                    className="card-border-shadow p-5 flex justify-between items-center"
                    key={item.id}
                  >
                    <div className="flex flex-col">
                      <p className="sm-black">{item.user.displayName}</p>
                      <h1 className="md-semibold-black mb-1">{item.name}</h1>
                      <p className="sm-lightgray">
                        Available stock: {item.stock}
                      </p>
                      <p className="sm-lightgray">
                        Price per item: Rp{numberWithDots(item.price)}
                      </p>
                    </div>
                    <Button.Group className="my-2">
                      <Button
                        color="gray"
                        size={"sm"}
                        // onClick={() => removeFromTransactionDetails(item)}
                        onClick={() => {
                          removeFromCart(item)
                        }}
                      >
                        <div className="text-sm">-</div>
                      </Button>
                      <Button color="white" size={"sm"}>
                        <div className="text-sm">{item.quantity}</div>
                      </Button>
                      <Button
                        color="gray"
                        size={"sm"}
                        onClick={() => {
                          if (item.quantity > item.stock - 1) return
                          // addToTransactionDetails(item)
                          addToCart(item)
                        }}
                      >
                        <div className="text-sm">+</div>
                      </Button>
                    </Button.Group>
                  </div>
                ))}
              </div>
              {cartItems.length > 0 ? (
                <div className="flex flex-col items-center my-5">
                  <TextButton
                    id="clear-cart"
                    btnName="Clear Cart"
                    onClick={() => {
                      handleClearCart()
                    }}
                    btnColor={"bg-red-500"}
                    textColor={"text-white"}
                    hoverColor={"bg-red-600"}
                  />
                </div>
              ) : (
                <EmptyContentSmall
                  title="No products yet..."
                  middleText="You should add the products you really wanted to the cart first, because one day this product will be missing sooner or later!"
                  lowerText="You will get your desired product after you pay and the item is shipped."
                  animation={Animation}
                />
              )}
            </div>
          </div>
          <div className="w-4/12">
            <div className="card-border-shadow flex flex-col ps-7 py-4 pe-7 mx-4 mb-4">
              <h1 className="lg-semibold-black mt-2 mb-6 me-3">
                Shipment Address
              </h1>
              <div className="mb-4">
                <fieldset className="flex max-w-md flex-col gap-4">
                  {address.length === 0 ? (
                    (console.log("Address:", address),
                    (
                      <p className="text-white py-2 ps-4 bg-red-500 rounded-lg">
                        No address found, you can create an address in your
                        profile page.
                      </p>
                    ))
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
                            {selectedAddress.state} {selectedAddress.postalCode}
                            , {selectedAddress.country}
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
                <p className="md-black">Midtrans</p>
              </div>
              <div className="flex flex-row justify-between mb-5 me-3">
                <p className="md-semibold-gray">Total Amount</p>
                <p className="md-semibold-black">
                  Rp
                  {numberWithDots(getCartTotal())}
                </p>
              </div>
              <IconButton
                id="pay-button"
                btnName="Pay Now"
                btnIcon={faCashRegister}
                color="bg-indigo-700"
                textColor="text-white"
                onClick={appendLocalStorageData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
