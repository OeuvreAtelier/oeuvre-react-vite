import React, { useState } from "react"
import TextAreaWithHeaderFB from "../../../shared/components/TextAreaWithHeaderFB"
import { Button, Rating } from "flowbite-react"
import Lottie from "lottie-react"
import ThankYou from "../../../../public/thanks.json"
import { useNavigate } from "react-router-dom"

export default function RateProduct() {
  const [rating, setRating] = useState(5)

  const handleRating = (newRating) => {
    setRating(newRating)
  }

  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      navigate("/discover")
    } catch (error) {
      console.error("Error submitting form:", error)
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
          <h1 className="xl-semibold-black mx-4">Rate and Review</h1>
          <p className="sm-black mx-4">Order number: ASDFGHJKL1234567890</p>
          <form
            className="flex w-full flex-col gap-4 pt-6 px-4"
            onSubmit={handleSubmit}
          >
            <h1 className="md-semibold-black">Overall, how was the item?</h1>
            <Rating size="lg" className="mb-3">
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
              id="description"
              nameInput="description"
              nameLabel="Describe a thing or two about the item here!"
              placeholder="Package arrived successfully, etc..."
              value={formData.bio}
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
