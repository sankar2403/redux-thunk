import { combineReducers ,applyMiddleware} from "redux";
import { legacy_createStore as createStore } from "redux";
import { Reducer } from "./Reducer"
import { thunk } from "redux-thunk";

const rootreducer = combineReducers({ userlist: Reducer })

const store = createStore(rootreducer, applyMiddleware(thunk))

export default store;