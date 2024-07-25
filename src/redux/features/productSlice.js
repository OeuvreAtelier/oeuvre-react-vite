import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance"

export const fetchMerchandises = createAsyncThunk(
  "merchandises/fetchMerchandises",
  async ({ page }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(`/products?page=${page}`)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const createProduct = createAsyncThunk(
  "merchandises/createMerchandises",
  async (merchandise, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.post("/products", merchandise, {
        headers: {},
      })
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const updateProduct = createAsyncThunk(
  "merchandises/updateMerchandises",
  async (merchandise, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.put("/products", merchandise)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  "merchandises/deleteMerchandises",
  async (id, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/products/${id}`)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

const productSlice = createSlice({
  name: "merchandises",
  initialState: {
    statusCode: null,
    message: null,
    data: [],
    totalPages: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMerchandises.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
        state.totalPages = action.payload.totalPages
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data.push(action.payload)
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (merchandise) => merchandise.id === action.payload.id
        )
        if (index !== -1) {
          state.data[index] = action.payload
        }
        state.status = "succeeded"
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
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

export default productSlice.reducer
