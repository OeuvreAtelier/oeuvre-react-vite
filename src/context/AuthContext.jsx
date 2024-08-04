import { createContext, useContext, useReducer } from "react"
import axiosInstance from "../api/axiosInstance"
import secureLocalStorage from "react-secure-storage"

const AuthContext = createContext()

const initialState = {
  isLoggedIn: !!secureLocalStorage.getItem("token"),
  token: secureLocalStorage.getItem("token"),
  username: secureLocalStorage.getItem("username"),
}

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      }
    case "LOGOUT":
      return { ...state, isLoggedIn: false, token: null, user: null }
    default:
      return state
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState)

  const login = async (username, password) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      })
      const { data } = response.data
      if (data) {
        secureLocalStorage.setItem("token", data.token)
        secureLocalStorage.setItem("username", data.username)
        secureLocalStorage.setItem("isLoggedIn", true)
        dispatch({
          type: "LOGIN",
          payload: { token: data.token, username: data.username },
        })
        return true
      }
    } catch (error) {
      console.error("Login Failed: ", error)
      throw error
    }
  }

  const logout = () => {
    secureLocalStorage.removeItem("token")
    secureLocalStorage.removeItem("isLoggedIn")
    secureLocalStorage.removeItem("username")
    localStorage.removeItem("cartItems")
    dispatch({ type: "LOGOUT" })
  }

  const register = async (username, displayName, email, password) => {
    try {
      const response = await axiosInstance.post("/auth/register-customer", {
        username,
        displayName,
        email,
        password,
      })
      if (response.status === 201) {
        return true
      } else {
        return false
      }
    } catch (error) {
      console.error("Register error:", error)
      return false
    }
  }

  const value = { ...authState, login, logout, register }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}