import { combineReducers } from "redux";
import cityReducer from "./city";
const rootReducer = combineReducers({
  city: cityReducer,
});
export default rootReducer;
