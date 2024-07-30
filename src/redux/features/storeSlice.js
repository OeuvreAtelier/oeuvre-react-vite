import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance"

export const createStore = createAsyncThunk(
  "store/createStore",
  async (store, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.post("/stores", store)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const updateStore = createAsyncThunk(
  "store/updateStore",
  async (store, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.put("/stores", store)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const fetchStores = createAsyncThunk(
  "store/fetchStores",
  async (_, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(`/stores`)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const fetchStoreById = createAsyncThunk(
  "store/fetchStoreById",
  async (storeId, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(`/stores/${storeId}`)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

export const fetchStoreByUserId = createAsyncThunk(
  "store/fetchStoreByUserId",
  async (userId, { rejectedWithValue }) => {
    try {
      const response = await axiosInstance.get(`/stores/user/${userId}`)
      return response.data
    } catch (error) {
      return rejectedWithValue(error.response.data)
    }
  }
)

const storeSlice = createSlice({
  name: "store",
  initialState: {
    statusCode: null,
    message: null,
    data: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStore.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
      })
      .addCase(updateStore.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
        state.message = action.payload.message
      })
      .addCase(fetchStores.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
      })
      .addCase(fetchStoreById.fulfilled, (state, action) => {
        state.statusCode = "succeeded"
        state.data = action.payload.data
      })
      .addCase(fetchStoreByUserId.fulfilled, (state, action) => {
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

export default storeSlice.reducer
