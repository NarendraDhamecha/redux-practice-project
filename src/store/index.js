import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showToggle: true },
  reducers: {
    incrementBy5(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrementBy5(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showToggle = !state.showToggle;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    logIn(state, action) {
      console.log(action.payload.email)
      state.isLoggedIn = true;
    },

    logOut(state) {
      state.isLoggedIn = false;
    },
  },
});

// const counterReducer = (state = {counter: 0}, action) => {
//   if(action.type === "incrementBy5"){
//     return {counter: state.counter + action.amount};
//   }
//   if(action.type === "decrementBy5"){
//     return {counter: state.counter - action.amount};
//   }
//   return state;
// }

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
