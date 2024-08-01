import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance"

const initialState = {
  statusCode: null,
  message: null,
  data: {},
}

export const fetchArtists = createAsyncThunk(
  "artists/fetchArtists",
  async (userAccountId, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/users/account/${userAccountId}`
      )
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const updateArtist = createAsyncThunk(
  "artists/updateArtist",
  async (user, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.put("/users", user)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const updateImage = createAsyncThunk(
  "artists/updateUserImage",
  async (user, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.put("/users/picture", user, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log("Response:", response.data)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const updateBanner = createAsyncThunk(
  "artists/updateUserBanner",
  async (user, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.put("/users/banner", user, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const registerArtist = createAsyncThunk(
  "artists/registerArtist",
  async (_, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/register-artist")
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

const profileSlice = createSlice({
  name: "artists",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtists.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
      })
      .addCase(updateArtist.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
        state.message = action.payload.message
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.payload
          state.status = "failed"
        }
      )
  },
})

export default profileSlice.reducer
