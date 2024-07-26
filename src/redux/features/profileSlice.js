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
      const response = await axiosInstance.get(`/users/account/${userAccountId}`)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const updateArtist = createAsyncThunk(
  "artists/updateArtist",
  async (artist, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.put("/users/account", artist)
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