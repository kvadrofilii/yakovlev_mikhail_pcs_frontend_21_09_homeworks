import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuth: false
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 2;
		}
	}
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
