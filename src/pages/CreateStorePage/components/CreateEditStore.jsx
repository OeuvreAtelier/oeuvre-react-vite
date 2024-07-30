import Lottie from "lottie-react"
import React, { useEffect, useState } from "react"
import CreateStore from "../../../assets/create-store.json"
import { Button } from "flowbite-react"
import TextAreaWithHeaderFB from "../../../shared/components/TextAreaWithHeaderFB"
import TextInputWithHeaderFB from "../../../shared/components/TextInputWithHeaderFB"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"

export default function CreateEditStore() {
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    console.log("State CREATE/MANAGE STORE:", state)
    // if (state !== null) {
    //   setFormData({
    //     id: state.merchandise.id,
    //     description: state.merchandise.description,
    //     pixiv: state.merchandise.pixiv,
    //     twitter: state.merchandise.twitter,
    //   })
    // } else {
    //   setFormData({
    //     description: "",
    //     pixiv: "",
    //     twitter: "",
    //   })
    // }
  }, [state])

  return (
    <div className="bg-fixed flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-400 bg-blend-multiply">
      <div className="mt-40 mb-28 w-full max-w-4xl bg-white border border-gray-200 pt-6 pb-12 pe-12 ps-4 flex flex-row rounded-3xl">
        <div className="bg-white w-2/5 flex flex-col justify-start items-center text-center mx-4">
          <div style={{ width: 250, height: 250 }}>
            <Lottie animationData={CreateStore} />
          </div>
          <h1 className="lg-semibold-black mt-1">
            Start selling products with us!
          </h1>
          <p className="md-black mt-2">
            You can do what you love and make money at the same time! Besides,
            you'll get exposure to other markets and grow your brand there!
          </p>
        </div>

        <div className="flex flex-col w-3/5">
          <h1 className="xl-semibold-black mx-4 mt-4">Create Store</h1>
          <form
            className="flex w-full flex-col gap-4 pt-6 px-4"
            // onSubmit={handleSubmit}
          >
            <TextAreaWithHeaderFB
              id="description"
              nameInput="description"
              nameLabel="Store Description (required)"
              placeholder="Example: This store was established in 2020 when the pandemic hits, and now we are the #1 anime store in Indonesia, etc..."
              //   value={formData.detail}
              //   onChange={handleChange}
            />
            <TextInputWithHeaderFB
              id="pixiv"
              nameInput="pixiv"
              nameLabel="Pixiv ID (numbers only, optional)"
              type="number"
              placeholder="Example: 123456789"
              // value={formData.price}
              // onChange={handleNumber}
            />
            <TextInputWithHeaderFB
              id="twitter"
              nameInput="twitter"
              nameLabel="Twitter Username (without @, optional)"
              type="text"
              placeholder="Example: taaarannn"
              // value={formData.price}
              // onChange={handleNumber}
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
