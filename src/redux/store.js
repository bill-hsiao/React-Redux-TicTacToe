import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
  game: Array(9).fill(null)
};

export default createStore(rootReducer, initialState);
