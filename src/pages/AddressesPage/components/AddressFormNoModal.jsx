import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import {
  createAddress,
  updateAddress,
} from "../../../redux/features/addressSlice"
import TextInputWithHeaderFB from "../../../shared/components/TextInputWithHeaderFB"
import TextAreaWithHeaderFB from "../../../shared/components/TextAreaWithHeaderFB"
import { Button } from "flowbite-react"

export default function AddressFormNoModal() {
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    console.log("State Address:", state)
    if (state !== null) {
      if (state.address) {
        console.log("Address:", state.address)
        setFormData({
          id: state.address.id,
          userId: state.address.user.id,
          country: state.address.country,
          state: state.address.state,
          city: state.address.city,
          detail: state.address.detail,
          postalCode: state.address.postalCode,
          phoneNumber: state.address.phoneNumber,
        })
      } else {
        setFormData({
          userId: state.artist.id,
          country: "",
          state: "",
          city: "",
          detail: "",
          postalCode: "",
          phoneNumber: "",
        })
      }
    } else {
      navigate("/addresses")
    }
  }, [navigate, state])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    console.log("Form:", formData)
  }

  const handleNumber = (event) => {
    const { name, value } = event.target
    const updatedValue =
      name === "phoneNumber" && value < 0 && event.replace(/[^0-9]/g, "")
        ? 0
        : value
    setFormData({
      ...formData,
      [name]: updatedValue,
    })
    console.log("Form:", formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const action =
        formData.id === undefined
          ? createAddress(formData)
          : updateAddress(formData)
      await dispatch(action).unwrap()
      navigate("/addresses")
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div className="bg-fixed flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1482160549825-59d1b23cb208?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-400 bg-blend-multiply">
      <div className="mt-40 mb-20 w-full max-w-lg bg-white border border-gray-200 p-12 flex flex-col justify-center items-center rounded-3xl">
        <h1 className="xxl-semibold-black">Update Address</h1>
        <form
          className="flex w-full flex-col gap-4 pt-6 px-4"
          onSubmit={handleSubmit}
        >
          <TextInputWithHeaderFB
            id="country"
            nameInput="country"
            nameLabel="Country/Region"
            type="text"
            placeholder="Example: Indonesia"
            value={formData.country}
            onChange={handleChange}
          />
          <TextInputWithHeaderFB
            id="state"
            nameInput="state"
            nameLabel="State/Province"
            type="text"
            placeholder="Example: DKI Jakarta"
            value={formData.state}
            onChange={handleChange}
          />
          <TextInputWithHeaderFB
            id="city"
            nameInput="city"
            nameLabel="City"
            type="text"
            placeholder="Example: South Jakarta"
            value={formData.city}
            onChange={handleChange}
          />
          <TextAreaWithHeaderFB
            id="detail"
            nameInput="detail"
            nameLabel="Detailed Address"
            placeholder="Example: 10 Downing Street, Croydon Borough, Stamford Bridge, etc."
            value={formData.detail}
            onChange={handleChange}
          />
          <TextInputWithHeaderFB
            id="postalCode"
            nameInput="postalCode"
            nameLabel="Postal/Zip Code"
            type="text"
            placeholder="Example: 12345, SW1A 2AA, etc."
            value={formData.postalCode}
            onChange={handleChange}
          />
          <TextInputWithHeaderFB
            id="phoneNumber"
            nameInput="phoneNumber"
            nameLabel="Phone Number"
            type="number"
            placeholder="Example: 081234567890"
            value={formData.phoneNumber}
            onChange={handleNumber}
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
  )
}
