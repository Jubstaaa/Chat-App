import React from "react";
import MessageForm from "./MessageForm";
import { connect } from "react-redux";
import { editMessageFromDatabase } from "../actions/messages";
import { removeMessageFromDatabase } from "../actions/messages";

const EditMessagePage = (props) => {
  return (
    <div className="container p-2">
      <h1 className="text-center">Edit Page</h1>
      <MessageForm
        message={props.message}
        onSubmit={(message) => {
          props.dispatch(editMessageFromDatabase(props.message.id, message));
          props.history.push("/");
        }}
      />
      <button
        className="btn btn-danger text-white p-2 btn-block mb-4"
        type="submit"
        onClick={() => {
          props.dispatch(removeMessageFromDatabase(props.message.id));
          props.history.push("/");
        }}
      >
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    message: state.messages.find((message) => {
      return message.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditMessagePage);
