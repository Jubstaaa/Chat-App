import React from "react";
import { connect } from "react-redux";
import MessageListItem from "./MessageListItem";

const MessageList = (props) => {
  return (
    <ul className="p-1">
      {props.messages.map((message) => {
        return (
          <MessageListItem
            key={message.id}
            {...message}
            isAuthenticated={props.isAuthenticated}
          />
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    auth: state.auth,
    isAuthenticated: state.auth.uid,
  };
};

// Higher Order Component (HOC)
export default connect(mapStateToProps)(MessageList);
