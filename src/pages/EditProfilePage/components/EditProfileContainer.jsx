import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "flowbite-react"
import TextInputWithHeaderFB from "../../../shared/components/TextInputWithHeaderFB"
import { updateArtist } from "../../../redux/features/profileSlice.js"

export default function EditProfileContainer() {
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    if (state !== null) {
      setFormData({
        id: state.artist.id,
        firstName: state.artist.firstName,
        lastName: state.artist.lastName,
        displayName: state.artist.displayName,
        email: state.artist.email,
        gender: "MALE",
        birthDate: state.artist.birthDate,
        phoneNumber: state.artist.phoneNumber,
      })
      console.log("Artist Details", state.artist)
    } else {
      navigate("/my-store")
    }
    // console.log(state)
  }, [navigate, state])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    console.log(formData)
  }

  const handleSubmit = async (e) => {
    // console.log("Form submitted", formData);
    e.preventDefault()
    try {
      const action = updateArtist(formData)
      await dispatch(action).unwrap()
      navigate("/my-store")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Error submitting form:", error)
    }
  }

  return (
    <div className="bg-fixed flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1482160549825-59d1b23cb208?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-400 bg-blend-multiply">
      <div className="mt-40 mb-20 w-full max-w-lg bg-white border border-gray-200 p-12 flex flex-col justify-center items-center rounded-3xl">
        <h1 className="xxl-semibold-black">Edit Profile</h1>
        <form
          className="flex w-full flex-col gap-4 pt-6 px-4"
          onSubmit={handleSubmit}
        >
          <TextInputWithHeaderFB
            isDisabled={false}
            id="firstName"
            nameLabel="First Name"
            nameInput="firstName"
            type="text"
            placeholder="Example: Kaedehara"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextInputWithHeaderFB
            isDisabled={false}
            id="lastName"
            nameLabel="Last Name"
            nameInput="lastName"
            type="text"
            placeholder="Example: Kazuha"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextInputWithHeaderFB
            isDisabled={false}
            id="displayName"
            nameLabel="Display Name"
            nameInput="displayName"
            type="text"
            placeholder="Example: My Anime Store"
            value={formData.displayName}
            onChange={handleChange}
          />
          <TextInputWithHeaderFB
            isDisabled={true}
            id="email"
            nameLabel="Email Address"
            nameInput="email"
            type="text"
            placeholder="Example: myartist@booth.art"
            value={formData.email}
            onChange={handleChange}
          />
          {/* <DualRadioFB
            id="gender"
            nameLabel="Gender"
            valueA="MALE"
            optionA="Male"
            valueB="FEMALE"
            optionB="Female"
            onChangeA={handleChange}
            onChangeB={handleChange}
          /> */}
          <TextInputWithHeaderFB
            isDisabled={false}
            id="birthDate"
            nameLabel="Date of Birth"
            nameInput="birthDate"
            type="text"
            placeholder="YYYY-MM-DD"
            value={formData.birthDate}
            onChange={handleChange}
          />
          <TextInputWithHeaderFB
            isDisabled={false}
            id="phoneNumber"
            nameInput="phoneNumber"
            nameLabel="Phone Number"
            type="number"
            placeholder="08765432100"
            value={formData.phoneNumber}
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
  )
}
