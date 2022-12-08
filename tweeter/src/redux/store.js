import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import app_reducer from "./app_reducer";
import auth_reducer from "./auth_reducer";


const rootReducer= combineReducers({auth_reducer,app_reducer})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store