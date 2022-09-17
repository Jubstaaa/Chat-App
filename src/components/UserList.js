import React from "react";
import { connect } from "react-redux";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  return (
    <ul
      className="list-unstyled chat-list mt-2 mb-0  overflow-auto"
      style={{ height: "350px" }}
    >
      {props.users.map((user) => {
        if (user.uid != props.isAuthenticated) {
          return <UserListItem key={user.uid} {...user} />;
        } else {
        }
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    isAuthenticated: state.auth.uid,
  };
};

export default connect(mapStateToProps)(UserList);
