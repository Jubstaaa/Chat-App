import React, { useEffect } from "react";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import { connect } from "react-redux";
import { addMessageToDatabase } from "../actions/messages";
import UserList from "./UserList";
import { logout } from "../actions/auth";
import { login } from "../actions/auth";
import notification from "../notification.mp3";
import { firebase } from "..//firebase/firebaseConfig";

let title = document.title;
let notificationCount = 1;

const MessageListPage = (props) => {
  useEffect(() => {
    setTimeout(() => {
      const msgArea = document.querySelector(".chat-history");
      msgArea.scrollTop = msgArea.scrollHeight;
    }, 100);
    if (firebase.auth().currentUser) {
      const userId = firebase.auth().currentUser.uid;
      const reference = firebase.database().ref(`/online/${userId}`);
      reference.set(true);
      reference.onDisconnect().remove();
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        } else {
          reference.remove();
        }
      });
    }
  });

  useEffect(() => {
    const msgInput = document.querySelector(".chat-message .input-group input");

    if (props.isAuthenticated) {
      msgInput.classList.remove("bg-warning");
      msgInput.placeholder = "Enter text here...";
      msgInput.removeAttribute("disabled", "");
    } else {
      msgInput.classList.add("bg-warning");
      msgInput.placeholder = "You have to login first";
      msgInput.setAttribute("disabled", "");
    }
  }, [props.auth]);

  useEffect(() => {
    let browser_active = (
      typeof document.hasFocus != "undefined" ? document.hasFocus() : 1
    )
      ? 1
      : 0;
    if (!browser_active) {
      if (notificationCount > 0) {
        document.title = `(${notificationCount}) ` + title;
        notificationCount++;
      } else {
        notificationCount++;
      }
      const audio = new Audio(notification);
      audio.play();
    } else {
      setTimeout(() => {
        const msgArea = document.querySelector(".chat-history");
        msgArea.scrollTop = msgArea.scrollHeight;
      }, 100);
    }
  }, [props.messages]);

  window.addEventListener("focus", () => {
    document.title = title;
    notificationCount = 1;
  });

  return (
    <div className="container ">
      <div className="row clearfix vh-100 justify-items-center align-items-center">
        <div className="col-lg-12  ">
          <div className="card chat-app  ">
            <div id="plist" className="people-list">
              <div className="list-unstyled chat-list mt-2 mb-0">
                {props.isAuthenticated ? (
                  <li className="clearfix ">
                    <div className="row">
                      <div className="col-6 col-md-8 p-0 ">
                        <img src={props.photoUrl} alt="avatar" />
                        <div className="about">
                          <div className="name">{props.displayName}</div>
                          <div className="status">
                            {" "}
                            <i className="fa fa-circle online"></i> online{" "}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex ml-auto justify-content-between p-0 col-6 col-md-4">
                        <button
                          className="align-self-center align-self-center btn btn-secondary p-2 btn-sm nav-link align-middle "
                          onClick={logout}
                        >
                          Logout
                        </button>
                        <a
                          onClick={() => {
                            const chatList = document.querySelector(
                              ".chat-app .people-list"
                            );

                            chatList.style.left = "-767px";
                          }}
                          className=" d-sm-block d-md-none align-self-center"
                        >
                          <i className="fas fa-arrow-right fa-3x text-dark"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                ) : (
                  <div className="d-flex  align-items-center justify-content-around">
                    <button
                      className="align-self-center btn btn-warning "
                      onClick={login}
                    >
                      Login
                    </button>
                    <a
                      onClick={() => {
                        const chatList = document.querySelector(
                          ".chat-app .people-list"
                        );

                        chatList.style.left = "-767px";
                      }}
                      className="align-self-center d-sm-block d-md-none"
                    >
                      <i className="fas fa-arrow-right fa-3x text-dark"></i>
                    </a>
                  </div>
                )}

                <hr></hr>
              </div>

              <UserList />
            </div>
            <div className="chat d-flex flex-column ">
              <div className="chat-header clearfix  ">
                <div className="row  justify-content-between ">
                  <div className="col-9">
                    <a href="https://github.com/Jubstaaa">
                      <img src="https://w7.pngwing.com/pngs/588/441/png-transparent-github-git-hub-repository-social-icons-circular-color-icon.png" />
                    </a>
                    <div className="chat-about">
                      <h6 className="m-b-0">Message App</h6>
                      <small>Jubstaa's Message App</small>
                    </div>
                  </div>
                  <div className="col-3 m-auto">
                    <a
                      onClick={() => {
                        const chatList = document.querySelector(
                          ".chat-app .people-list"
                        );

                        chatList.style.left = "0px";
                      }}
                      className="d-sm-block d-md-none"
                    >
                      <i className="fas fa-bars fa-2x text-dark"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="chat-history overflow-auto"
                style={{ height: "340px" }}
              >
                <ul className="m-b-0">
                  <MessageList />
                </ul>
              </div>
              <MessageForm
                onSubmit={(message) => {
                  props.dispatch(addMessageToDatabase(message));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.uid,
  displayName: state.auth.displayName,
  photoUrl: state.auth.photoUrl,
  users: state.users,
  messages: state.messages,
  auth: state.auth,
});

export default connect(mapStateToProps)(MessageListPage);
