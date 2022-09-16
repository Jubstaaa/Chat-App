import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import messageReducer from "../reducers/messages";
import authReducer from "../reducers/auth";
import userReducer from "../reducers/users";
import thunk from "redux-thunk";

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      messages: messageReducer,
      auth: authReducer,
      users: userReducer,
    }),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnchancers(applyMiddleware(thunk))
  );
  return store;
};
