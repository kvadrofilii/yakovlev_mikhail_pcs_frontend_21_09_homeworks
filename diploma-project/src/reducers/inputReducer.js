import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: 'input',
	initialState: {
		className: 'input'
	},
	reducers: {
		error: (state) => {
			state.className = 'input input_error';
		},
		valid: (state) => {
			state.className = 'input';
		}
	}
});

export const { error, valid } = counterSlice.actions;

export default counterSlice.reducer;
