import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance"

export const fetchMerchandises = createAsyncThunk(
  "merchandises/fetchMerchandises",
  async ({ page }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(`/products?page=${page}`)
      console.log("Page fetchMerchandises:", page)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const fetchMerchandisesByUserId = createAsyncThunk(
  "merchandises/fetchMerchandisesByUserId",
  async ({ userId, page }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/products/artist/${userId}?page=${page}`
      )
      console.log("Page fetchMerchandisesByUserId:", page)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const fetchProductsByNameCategoryAndType = createAsyncThunk(
  "merchandises/fetchProductsByNameAndCategoryAndType",
  async ({ productName, category, type, page }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/products/search?name=${productName}&category=${category}&type=${type}&page=${page}`
      )
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

export const updateProduct = createAsyncThunk(
  "merchandises/updateMerchandises",
  async (merchandise, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.put("/products", merchandise, {
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
    paging: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMerchandises.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
        state.paging = action.payload.paging
      })
      .addCase(fetchMerchandisesByUserId.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
        state.paging = action.payload.paging
      })
      .addCase(
        fetchProductsByNameCategoryAndType.fulfilled,
        (state, action) => {
          state.statusCode = "succeeded"
          state.data = action.payload.data
          state.paging = action.payload.paging
        }
      )
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
