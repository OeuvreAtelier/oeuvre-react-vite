import React, { useState } from "react"
import TextInputWithHeaderFB from "../../../shared/components/TextInputWithHeaderFB"
import TextButton from "../../../shared/components/TextButton"
import Logo from "../../../shared/components/Logo"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"

export default function EmailPasswordContainer() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const { login, isLoggedIn } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const success = await login(username, password)
      if (success) {
        // TODO
        // if (users.firstName === null) {
        //   navigate("/onboarding")
        // } else {
          navigate("/view-store")
        // }
      } else {
        setErrorMessage("Invalid username or password!")
      }
    } catch (error) {
      console.error(error)
      setErrorMessage(error.message)
      alert("Failed to login. Please try again.")
    }
  }

  return (
    <div className="bg-fixed flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1584505731268-3d498e37ee75?q=80&w=1560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-400 bg-blend-multiply">
      <div className="mt-32 mb-20 w-full max-w-lg bg-white border border-gray-200 p-12 flex flex-col justify-center items-center rounded-3xl">
        <Logo onClick={() => navigate("/")} />
        <form
          className="max-w-sm mx-auto flex flex-col w-full mt-8 gap-4"
          onSubmit={handleLogin}
        >
          <TextInputWithHeaderFB
            id="username"
            nameInput="username"
            nameLabel="Username"
            type="text"
            placeholder="dashataran"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextInputWithHeaderFB
            id="password"
            nameInput="password"
            nameLabel="Password"
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-register">
            <TextButton
              btnName="Log In"
              btnColor="bg-sky-500"
              textColor="text-white"
              hoverColor={"bg-sky-600"}
            />
            <TextButton
              btnName="Register"
              onClick={() => {
                navigate("/register")
              }}
              btnColor="bg-gray-100"
              textColor="text-gray-800"
              hoverColor={"bg-slate-100"}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
