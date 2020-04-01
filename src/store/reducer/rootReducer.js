import { combineReducers } from "redux";
import user from "./userReducer";
import practician from "./practicianReducer";
export default combineReducers({
  user,
  practician
});
