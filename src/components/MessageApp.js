import React from "react";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import { connect } from "react-redux";
import { addMessageToDatabase } from "../actions/messages";
import UserList from "./UserList";
import { logout } from "../actions/auth";
import { login } from "../actions/auth";

const MessageListPage = (props) => {
  return (
    <div className="container ">
      <div className="row clearfix vh-100 justify-items-center align-items-center">
        <div className="col-lg-12  ">
          <div className="card chat-app  ">
            <div id="plist" className="people-list">
              <div className="list-unstyled chat-list mt-2 mb-0">
                {props.isAuthenticated ? (
                  <li className="clearfix p-0 d-flex justify-content-between">
                    <div>
                      <img src={props.photoUrl} alt="avatar" />
                      <div className="about">
                        <div className="name">{props.displayName}</div>
                        <div className="status">
                          {" "}
                          <i className="fa fa-circle online"></i> online{" "}
                        </div>
                      </div>
                    </div>
                    <button
                      className=" btn btn-secondary p-2 btn-sm nav-link align-middle "
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <div className="d-flex align-items-center justify-content-center">
                    <button className="btn btn-warning " onClick={login}>
                      Login
                    </button>
                  </div>
                )}

                <hr></hr>
              </div>

              <UserList />
            </div>
            <div className="chat d-flex flex-column ">
              <div className="chat-header clearfix  ">
                <div className="row ">
                  <div className="col-lg-6">
                    <a href="https://github.com/Jubstaaa">
                      <img src="https://w7.pngwing.com/pngs/588/441/png-transparent-github-git-hub-repository-social-icons-circular-color-icon.png" />
                    </a>
                    <div className="chat-about">
                      <h6 className="m-b-0">Message App</h6>
                      <small>Jubstaa's Message App</small>
                    </div>
                  </div>
                  <div className="col-lg-6 hidden-sm text-right">
                    <a className="btn btn-outline-primary">
                      <i className="fa fa-image"></i>
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
    // <div className="mt-3">
    //   <div className="container text-center">
    //     {props.isAuthenticated ? (
    //       <MessageForm
    //         onSubmit={(message) => {
    //           props.dispatch(addMessageToDatabase(message));
    //         }}
    //       />
    //     ) : (
    //       <div className="alert alert-warning" role="alert">
    //         Please login to leave message
    //       </div>
    //     )}
    //   </div>
    //   <div>
    //     <p className="display-4 text-white d-block text-center bg-primary p-5 ">
    //       Messages From People
    //     </p>
    //     <MessageList />
    //   </div>
    // </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.uid,
  displayName: state.auth.displayName,
  photoUrl: state.auth.photoUrl,
  users: state.users,
});

export default connect(mapStateToProps)(MessageListPage);
