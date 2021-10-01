import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import { snackbarReducer } from "./snackbar/snackbar.reducer";

export default combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
});
