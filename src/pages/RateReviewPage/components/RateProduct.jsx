import React, { useEffect, useState } from "react"
import TextAreaWithHeaderFB from "../../../shared/components/TextAreaWithHeaderFB"
import { Button, Rating } from "flowbite-react"
import Lottie from "lottie-react"
import ThankYou from "../../../../public/thanks.json"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createReview } from "../../../redux/features/reviewSlice"

export default function RateProduct() {
  const [rating, setRating] = useState(5)
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (state !== null) {
      console.log("State RATE PRODUCT:", state)
      setFormData({
        transactionDetailId: state.trxDetail.id,
        userId: state.artist.id,
        productId: state.trxDetail.product.id,
        rating: 5,
        review: "",
      })
    } else {
      navigate("/discover")
    }
  }, [navigate, state])

  const handleRating = (newRating) => {
    setRating(newRating)
    setFormData({
      ...formData,
      rating: newRating,
    })
    console.log("Form:", formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    console.log("Form:", formData)
  }

  const handleSubmit = async (e) => {
    console.log("Processing review:", formData)
    e.preventDefault()
    try {
      const action = createReview(formData)
      await dispatch(action).unwrap()
      navigate("/transaction-history")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Cannot submit review more than once!", error)
    }
  }

  return (
    <div className="bg-fixed flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-400 bg-blend-multiply">
      <div className="mt-40 mb-28 w-full max-w-4xl bg-white border border-gray-200 py-12 pe-12 ps-4 flex flex-row rounded-3xl">
        <div className="bg-white w-2/5 flex flex-col justify-start items-center text-center mx-4">
          <div style={{ width: 150, height: 150 }}>
            <Lottie animationData={ThankYou} />
          </div>
          <h1 className="xl-semibold-black">Your item has just arrived!</h1>
          <h1 className="lg-semibold-black mt-1">
            Thank you for shopping with us!
          </h1>
          <p className="md-black mt-4">
            How about giving the item some review? When you review an item, more
            and more people can decide and also buy it!
          </p>
        </div>

        <div className="flex flex-col w-3/5">
          <h1 className="xl-semibold-black mx-4 mb-2">Rate and Review</h1>
          <p className="md-semibold-black mx-4 mb-1">
            {state.trxDetail.product.name}
          </p>
          <p className="sm-black mx-4">Invoice: {state.trxDetail.invoice}</p>
          <p className="sm-black mx-4">
            Ordered by: {state.artist.firstName} {state.artist.lastName}
          </p>
          <form
            className="flex w-full flex-col gap-4 pt-4 px-4"
            onSubmit={handleSubmit}
          >
            <h1 className="sm-semibold-black">Overall, how was the item?</h1>
            <Rating size="lg" className="mb-3 -mt-2" id="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <Rating.Star
                  key={star}
                  color={star <= rating ? "#e0a910" : "gray"}
                  onClick={() => handleRating(star)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </Rating>
            <TextAreaWithHeaderFB
              id="review"
              nameInput="review"
              nameLabel="Describe a thing or two about the item here!"
              placeholder="Package arrived successfully, etc..."
              value={formData.review}
              onChange={handleChange}
            />
            <Button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-xl"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
