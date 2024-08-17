import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "../features/accounts/accountSlice";
import customerReducer from "../features/customers/customerSlice";

//combining both reducers to createStore in single store
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
