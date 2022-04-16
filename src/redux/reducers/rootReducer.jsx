import { combineReducers } from "redux";

import demoReducer from "./demoReducer";
// store tong ung dung
import taiXiuReducer from "./XucXacReducer/taixiuReducer"
export const rootReducer = combineReducers({
  // noi chua cac reducer cho nghiep vu
  demo: demoReducer,
  taixiu: taiXiuReducer,
});
