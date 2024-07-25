import React, { useState } from "react"
import TextInputForm from "../../../shared/components/TextInputForm"
import TextInputWithHeaderFB from "../../../shared/components/TextInputWithHeaderFB"
import Logo from "../../../shared/components/Logo"
import TextButton from "../../../shared/components/TextButton"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"
import ConfirmationModal from "../../../shared/components/ConfirmationModal"

export default function RegisterContainer() {
  const [invalidPassword, setInvalidPassword] = useState(false)
  const [lessPassword, setLessPassword] = useState(false)

  const [form, setForm] = useState({
    username: "",
    name: "",
    password: "",
    confirmPassword: "",
  })

  const [errorMessage, setErrorMessage] = useState("")
  const { register } = useAuth()

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
    console.log(form)
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    if (form.password.length < 6) {
      handleLessPassword()
    } else if (form.password !== form.confirmPassword) {
      handleInvalidPasswords()
    } else {
      try {
        const success = await register(form.username, form.name, form.password)
        if (success) {
          navigate("/login")
        } else {
          setErrorMessage("Failed to register. Please try again.")
        }
      } catch (error) {
        console.error(error)
        setErrorMessage(error.message)
      }
    }
  }

  const handleInvalidPasswords = () => {
    setInvalidPassword(true)
  }

  const handleLessPassword = () => {
    setLessPassword(true)
  }
  return (
    <>
      <ConfirmationModal
        show={invalidPassword}
        onClose={() => setInvalidPassword(false)}
        text="Passwords do not match!"
        isHidden={true}
      />
      <ConfirmationModal
        show={lessPassword}
        onClose={() => setLessPassword(false)}
        text="Password is less than 6 characters long!"
        isHidden={true}
      />
      <div className="bg-fixed flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1532522593358-9e5e2a22f231?q=80&w=1603&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-400 bg-blend-multiply">
        <div className="mt-20 mb-20 w-full max-w-lg bg-white border border-gray-200 p-12 flex flex-col justify-center items-center rounded-3xl">
          <Logo onClick={() => navigate("/")} />
          <form
            className="max-w-sm mx-auto flex flex-col w-full mt-8 gap-4"
            onSubmit={handleRegister}
          >
            <TextInputWithHeaderFB
              id="username"
              nameInput="username"
              nameLabel="Username"
              type="text"
              placeholder="dashataran"
              value={form.username}
              onChange={handleChange}
            />
            <TextInputWithHeaderFB
              id="name"
              nameInput="name"
              nameLabel="Store Name / Display Name"
              type="text"
              placeholder="Fantasy World"
              value={form.name}
              onChange={handleChange}
            />
            <TextInputWithHeaderFB
              id="password"
              nameInput="password"
              nameLabel="Password"
              type="password"
              placeholder="******"
              value={form.password}
              onChange={handleChange}
            />
            <TextInputWithHeaderFB
              id="confirmPassword"
              nameInput="confirmPassword"
              nameLabel="Confirm Password"
              type="password"
              placeholder="******"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <div className="login-register">
              <TextButton
                btnName="Register"
                btnColor="bg-sky-500"
                textColor="text-white"
                hoverColor={"bg-sky-600"}
              />
              <TextButton
                btnName="Log In"
                onClick={() => {
                  navigate("/login")
                }}
                btnColor="bg-gray-100"
                textColor="text-gray-800"
                hoverColor={"bg-slate-100"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
