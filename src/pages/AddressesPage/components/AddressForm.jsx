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

export default function AddressForm({ isOpen, onClose }) {
  if (!isOpen) return null

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
    } catch (error) {
      console.error("Error submitting form:", error)
    }

    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 shadow-lg relative max-h-[90vh] w-5/12 overflow-auto">
        <div
          className="absolute top-5 right-4 text-gray-300 hover:text-gray-500 cursor-pointer bg-slate-200 px-3 py-1 rounded-3xl text-white"
          onClick={onClose}
        >
          X
        </div>
        {state?.address ? (
          <h1 className="xl-semibold-black text-center">Edit Address</h1>
        ) : (
          <h1 className="xl-semibold-black text-center">Add Address</h1>
        )}
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
            className="w-full bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mb-4 rounded-xl"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}
