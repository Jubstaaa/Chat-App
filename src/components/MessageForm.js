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
    if (this.state.isAuthenticated) {
      if (!this.state.msg) {
      } else {
        this.props.onSubmit({
          msg: this.state.msg,
        });
        this.setState(() => ({ msg: "" }));
      }
    } else {
      this.setState(() => ({ msg: "" }));
      e.target[0].classList.add("bg-warning");
      e.target[0].placeholder = "You have to login first";
      e.target[0].setAttribute("disabled", "");
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
              <i className="fa fa-send"></i>
            </button>
          </div>
        </div>
      </form>
      // <div>
      //   {this.state.error && (
      //     <div class="alert alert-warning">{this.state.error}</div>
      //   )}
      //   <form onSubmit={this.onSubmit}>
      //     <div className="input-group mb-3">
      //       <input
      //         className="form-control"
      //         placeholder="Title of Your Message"
      //         value={this.state.title}
      //         onChange={this.onTitleChange}
      //       />
      //     </div>
      //     <div className="input-group mb-3">
      //       <textarea
      //         rows={10}
      //         style={{ resize: "none" }}
      //         className="form-control"
      //         placeholder="Your Message"
      //         value={this.state.description}
      //         onChange={this.onDescriptionChange}
      //       ></textarea>
      //     </div>
      //     <div>
      //       <button
      //         className="btn btn-warning text-white p-2 btn-block mb-4"
      //         type="submit"
      //       >
      //         Leave a Message
      //       </button>
      //     </div>
      //   </form>
      // </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.uid,
  };
};

export default connect(mapStateToProps)(MessageForm);
