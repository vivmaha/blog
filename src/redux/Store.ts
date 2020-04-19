import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./Reducer";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export { store as default };
