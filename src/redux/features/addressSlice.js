import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance"

export const fetchAddressesByUserId = createAsyncThunk(
    "addresses/fetchAddressesByUserId",
    async (userId, { rejectedWithValue }) => {
      try {
        const response = await axiosInstance.get(`/addresses/user/${userId}`)
        return response.data
      } catch (error) {
        return rejectedWithValue(error.response.data)
      }
    }
  )

export const createAddress = createAsyncThunk(
  "addresses/createAddress",
  async (address, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.post("/addresses", address, {
        headers: {},
      })
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const updateAddress = createAsyncThunk(
  "addresses/updateAddress",
  async (address, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.put("/addresses", address)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const deleteAddress = createAsyncThunk(
  "addresses/deleteAddress",
  async (id, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/addresses/${id}`)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

const addressSlice = createSlice({
  name: "addresses",
  initialState: {
    statusCode: null,
    message: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddressesByUserId.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
      })
      .addCase(createAddress.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data.push(action.payload)
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (address) => address.id === action.payload.id
        )
        if (index !== -1) {
          state.data[index] = action.payload
        }
        state.status = "succeeded"
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.data = state.data.filter((merch) => merch.id !== action.meta.arg)
        state.status = "succeeded"
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

export default addressSlice.reducer
