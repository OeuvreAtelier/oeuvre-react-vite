import React from "react"
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react"
import ThankYou from "../../../../public/thanks.json"
import { Button } from "flowbite-react"

export default function SuccessfulPage() {
  const navigate = useNavigate()
  return (
    <div className="bg-fixed flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-400 bg-blend-multiply">
      <div className="mt-36 mb-28 w-full max-w-md bg-white border border-gray-200 p-4 flex flex-col rounded-3xl justify-center items-center">
        <div style={{ width: 150, height: 150 }}>
          <Lottie animationData={ThankYou} />
        </div>
        <h1 className="xl-semibold-black">Payment Successful!</h1>
        <h1 className="lg-semibold-black mt-1">
          Thank you for shopping with us!
        </h1>
        <p className="md-black mt-4">
          If it's a physical item, you can wait until it arrives.
        </p>
        <p className="md-black">
          If it's a digital item, you can download and save it now.
        </p>
        <Button
          onClick={() => navigate("/discover")}
          color="blue"
          className="my-5"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  )
}
