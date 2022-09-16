import React from "react";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import { connect } from "react-redux";
import { addMessageToDatabase } from "../actions/messages";

const UserListItem = ({ displayName, email, photoUrl, uid }) => {
  return (
    <>
      <li className="clearfix">
        <img src={photoUrl} alt="avatar" />
        <div className="about">
          <div className="name">{displayName}</div>
          <div className="status">
            <i className="fa fa-circle online"></i> online{" "}
          </div>
        </div>
      </li>
    </>
  );
};

export default UserListItem;
