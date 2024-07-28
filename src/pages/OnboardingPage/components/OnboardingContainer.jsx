import React, { useState } from "react"
import Logo from "../../../shared/components/Logo"
import TextInputWithHeaderFB from "../../../shared/components/TextInputWithHeaderFB"
import { useNavigate } from "react-router-dom"
import DualRadioFB from "../../../shared/components/DualRadioFB"

export default function OnboardingContainer() {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("")
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    phoneNumber: "",
    // description: "",
    isArtist: false,
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
    console.log(form)
  }
  const handleOnboarding = async (e) => {
    e.preventDefault()
    try {
      const success = await register(
        form.firstName,
        form.lastName,
        form.birthDate,
        form.gender,
        form.phoneNumber,
        // form.description,
        form.isArtist
      )
      if (success) {
        navigate("/login")
      } else {
        setErrorMessage("Failed to complete onboarding. Please try again.")
      }
    } catch (error) {
      console.error(error)
      setErrorMessage(error.message)
    }
  }

  return (
    <div className="bg-fixed flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1532522593358-9e5e2a22f231?q=80&w=1603&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-400 bg-blend-multiply">
      <div className="mt-20 mb-20 w-full max-w-lg bg-white border border-gray-200 p-12 flex flex-col justify-center items-center rounded-3xl">
        <Logo onClick={() => {}} />
        <form
          className="max-w-sm mx-auto flex flex-col w-full mt-8 gap-4"
          onSubmit={handleRegister}
        >
          <TextInputWithHeaderFB
            id="firstName"
            nameInput="firstName"
            nameLabel="First Name"
            type="text"
            placeholder="Dasha"
            value={form.firstName}
            onChange={handleChange}
          />
          <TextInputWithHeaderFB
            id="lastName"
            nameInput="lastName"
            nameLabel="Last Name"
            type="text"
            placeholder="Taran"
            value={form.lastName}
            onChange={handleChange}
          />
          <TextInputWithHeaderFB
            id="birthDate"
            nameInput="birthDate"
            nameLabel="Date of Birth"
            type="text"
            placeholder="1990-01-01"
            value={form.birthDate}
            onChange={handleChange}
          />
          <DualRadioFB
            id="gender"
            nameLabel="Gender"
            valueA="male"
            optionA="Male"
            valueB="female"
            optionB="Female"
          />
          <TextInputWithHeaderFB
            id="phoneNumber"
            nameInput="phoneNumber"
            nameLabel="Phone Number"
            type="number"
            placeholder="08765432101"
            value={form.phoneNumber}
            onChange={handleChange}
          />
          {/* <TextAreaWithHeaderFB
            id="description"
            nameInput="description"
            nameLabel="Description"
            placeholder="Write something about your store, whether if you're new in the field or already established."
            value={form.description}
            onChange={handleChange}
          /> */}
          <DualRadioFB
            id="isArtist"
            nameLabel="Switch to artist mode? With artist mode, you can also sell items to customers and get paid for it!"
            valueA={false}
            optionA="No"
            valueB={true}
            optionB="Yes"
          />
          <div className="login-register">
            <TextButton
              btnName="Complete Onboarding"
              btnColor="bg-sky-500"
              textColor="text-white"
              hoverColor={"bg-sky-600"}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
