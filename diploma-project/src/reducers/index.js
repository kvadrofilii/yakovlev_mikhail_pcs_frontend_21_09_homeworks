import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import inputReducer from "./inputReducer";

const rootReducer = combineReducers({
	user: userReducer,
	input: inputReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))