import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      //redux says we cannot ditecty mutate the states
      //genarlly what we do is [...state  , action.payload ] this is how we cannpt change anythig at all just uodates the state without changing it

      // here the same work done by createSlice (it internnaly does the same thing thats why we can able to change the state like state.push(action.payload)) withthe hhelo of redux toolkit

      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = productSlice.actions;

export default productSlice.reducer;
