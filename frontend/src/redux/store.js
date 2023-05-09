import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import AdminReducer from "./admin/admin.reducer";
import {reducer as ProductReducer} from "../redux/ProductReducer/reducer"
import {reducer as UserReducer} from "./user/reducer"
const rootReducer = combineReducers({
  ProductReducer,
  AdminReducer,UserReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));