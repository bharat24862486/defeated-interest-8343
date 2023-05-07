
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import AdminReducer from "./admin/admin.reducer";

//
const rootReducer = combineReducers({
  AdminReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { reducer as productReducer } from "./ProductReducer/reducer"

const rootReducer=combineReducers({
    productReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

