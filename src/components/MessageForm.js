import React, { Component } from "react";
import { connect } from "react-redux";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: props.message ? props.message.msg : "",
      isAuthenticated: props.isAuthenticated,
    };
  }

  onMsgChange = (e) => {
    const msg = e.target.value;
    this.setState(() => ({ msg }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.msg) {
    } else {
      this.props.onSubmit({
        msg: this.state.msg,
      });
      this.setState(() => ({ msg: "" }));
    }
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className="chat-message clearfix position-sticky"
      >
        <div className="input-group mb-0">
          <input
            type="text"
            className="form-control"
            placeholder="Enter text here..."
            onChange={this.onMsgChange}
            value={this.state.msg}
          />
          <div className="input-group-prepend">
            <button type="submit" className="input-group-text">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.uid,
  };
};

export default connect(mapStateToProps)(MessageForm);
