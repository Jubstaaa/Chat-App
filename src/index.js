import React from "react";
import ReactDOM from "react-dom/client";
import MessageApp from "./components/MessageApp";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "./store/configureStore";
import { getMessagesFromDatabase } from "./actions/messages";
import "./firebase/firebaseConfig";
import { firebase } from "./firebase/firebaseConfig";
import { addUserToDatabase, loginAction, logoutAction } from "./actions/auth";
import "bootstrap/dist/css/bootstrap.css";
import { getUsersFromDatabase } from "./actions/users";

export const store = configureStore();

const result = (
  <Provider store={store}>
    <MessageApp />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="vh-100 d-flex align-items-center justify-content-center">
    <div
      style={{ width: "20rem", height: "20rem", borderWidth: "2em" }}
      className="spinner-border text-primary m-5"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch(getUsersFromDatabase());
  store.dispatch(getMessagesFromDatabase());

  if (user) {
    store.dispatch(addUserToDatabase(user));
    store.dispatch(loginAction(user));
    root.render(result);
  } else {
    store.dispatch(logoutAction());
    root.render(result);
  }
});
