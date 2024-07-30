import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance"

export const fetchMerchandises = createAsyncThunk(
  "merchandises/fetchMerchandises",
  async ({ page }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(`/products?page=${page}`)
      console.log("PAGE (SLICE):", page)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

// Fetch functions
// 1. By name
export const fetchProductsByName = createAsyncThunk(
  "merchandises/fetchProductsByName",
  async ({ productName, page }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/products/search?name=${productName}&page=${page}`
      )
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

// 2. By category (enum)
export const fetchProductsByCategory = createAsyncThunk(
  "merchandises/fetchProductsByCategory",
  async ({ category, page }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/products/search?category=${category}?page=${page}`
      )
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

// 3. By type (enum)
export const fetchProductsByType = createAsyncThunk(
  "merchandises/fetchProductByType",
  async ({ type, page }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/products/search?type=${type}?page=${page}`
      )
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

// 4. By name & category (enum)
export const fetchProductsByNameAndCategory = createAsyncThunk(
  "merchandises/fetchProductsByNameAndCategory",
  async ({ productName, category, page }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/products/search?name=${productName}&category=${category}&page=${page}`
      )
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

// 5. By name & type (enum)
export const fetchProductsByNameAndType = createAsyncThunk(
  "merchandises/fetchProductsByNameAndType",
  async ({ productName, type, page }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/products/search?name=${productName}&type=${type}&page=${page}`
      )
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

// 6. By category (enum) & type (enum)
export const fetchProductsByCategoryAndType = createAsyncThunk(
  "merchandises/fetchProductsByCategoryAndType",
  async ({ category, type, page }, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/products/search?category=${category}&type=${type}&page=${page}`
      )
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

// 7. By name, category (enum) & type (enum)
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
      .addCase(fetchProductsByName.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
        state.paging = action.payload.paging
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
        state.paging = action.payload.paging
      })
      .addCase(fetchProductsByType.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
        state.paging = action.payload.paging
      })
      .addCase(fetchProductsByNameAndCategory.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
        state.paging = action.payload.paging
      })
      .addCase(fetchProductsByNameAndType.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
        state.paging = action.payload.paging
      })
      .addCase(fetchProductsByCategoryAndType.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
        state.paging = action.payload.paging
      })
      .addCase(fetchProductsByNameCategoryAndType.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
        state.paging = action.payload.paging
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
