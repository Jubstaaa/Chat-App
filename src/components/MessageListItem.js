import React, { Component } from "react";
import { connect } from "react-redux";
class MessageListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: props.message ? props.message.msg : "",
      isAuthenticated: props.isAuthenticated,
      id: props.id,
      msg: props.msg,
      displayName: props.displayName,
      photoUrl: props.photoUrl,
      uid: props.uid,
      isAuthenticated: props.isAuthenticated,
      messages: props.messages,
    };
  }

  render() {
    return (
      <>
        {this.state.isAuthenticated === this.state.uid ? (
          <li className="clearfix">
            <div className="message-data text-right">
              <span className="message-data-time mx-1">
                {this.state.displayName}
              </span>
              <img src={this.state.photoUrl} alt="avatar" />
            </div>
            <div className="message other-message float-right">
              {this.state.msg}
            </div>
          </li>
        ) : (
          <li className="clearfix">
            <div className="message-data">
              <span className="message-data-time mx-1">
                {this.state.displayName}
              </span>
              <img src={this.state.photoUrl} alt="avatar" />
            </div>
            <div className="message my-message">{this.state.msg}</div>
          </li>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps)(MessageListItem);
