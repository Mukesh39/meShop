import {
  // asyncThunkCreator,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";



//creating a thunk   - thunk ( middle ware to get the products data )

//createAsyncThunk will generate three Redux action creators using 
//createAction : pending , fulfilled , and rejected


export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
});

//createAsyncThunk: A function from Redux Toolkit that allows you to write logic that interacts
// with a Redux store asynchronously (like fetching data from an API).

//Statuses

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

// Then, handle actions in your reducers:

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },

  reducers: {// standard reducer logic, with auto-generated action types per reducer  read this for reference
    },
// Now here is hint :  // Add reducers for additional action types here, and handle loading state as needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;


