import {
  // asyncThunkCreator,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },

  reducers: {},
  // reducers: {
  //   setProducts(state, action) {
  //     state.data = action.payload;
  //   },

  //   setStatus(state, action) {
  //     state.status = action.payload;
  //   },
  // },
  // remove(state, action) {
  //   return state.filter((item) => item.id !== action.payload);
  // },

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

export const {} = productSlice.actions;

export default productSlice.reducer;

//Thunk
// this is one way to handle the Asynchronous Operation in redux we have some otehr methdos in specially in redyx toolkits

// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));

//     try {
//       const res = await fetch("https://fakestoreapi.com/products");

//       const data = await res.json();

//       console.log(data);

//       dispatch(setProducts(data));

//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.log(error);

//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }

// 2nd way to deal with Thunk and with Redux toolkits  in redux

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  const data = await res.json();

  console.log(data);

  return data;
});

// A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
