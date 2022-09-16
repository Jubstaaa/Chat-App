import React, { Component } from "react";
import { connect } from "react-redux";
import notification from "../notification.mp3";
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

  componentDidMount() {
    const msgArea = document.querySelector(".chat-history");
    msgArea.scrollTop = msgArea.scrollHeight;
  }

  componentDidUpdate() {
    // let browser_active = (
    //   typeof document.hasFocus != "undefined" ? document.hasFocus() : 1
    // )
    //   ? 1
    //   : 0;
    // if (!browser_active) {
    // } else {
    //   const msgArea = document.querySelector(".chat-history");
    //   msgArea.scrollTop = msgArea.scrollHeight;
    //   const audio = new Audio(notification);
    //   audio.play();
    // }
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

      // <div className="card mb-3 container">
      //   <div className="card-body">
      //     <div className="d-flex flex-start">
      //       <img
      //         className="rounded-circle shadow-sm mr-3"
      //         src={photoUrl}
      //         alt="avatar"
      //         width="40"
      //         height="40"
      //       />
      //       <div className="w-100">
      //         <div className=" d-flex justify-content-between align-items-center mb-3">
      //           <div>
      //             <h6 className="text-dark ">{title}</h6>
      //             <span className="small text-primary fw-bold mb-0">
      //               {displayName}
      //             </span>
      //           </div>
      //           <p className="small mb-0" style={{ color: "#aaa" }}>
      //             {date}
      //           </p>
      //         </div>
      //         <div className="d-flex justify-content-between align-items-center">
      //           <p className="small p-1 mb-0">{description}</p>
      //           {uid === isAuthenticated ? (
      //             <div className="d-flex flex-row">
      //               <Link
      //                 to={{
      //                   pathname: `/edit/${id}`,
      //                   state: uid,
      //                 }}
      //               >
      //                 Edit
      //               </Link>
      //             </div>
      //           ) : (
      //             <></>
      //           )}
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

// const MessageListItem = ({
//   id,
//   msg,
//   displayName,
//   photoUrl,
//   uid,
//   isAuthenticated,
//   messages,
// }) => {
//   useEffect(() => {
//     const msgArea = document.querySelector(".chat-history");
//     msgArea.scrollTop = msgArea.scrollHeight;
//     console.log("test");
//     // const audio = new Audio(notification);
//     // audio.play();

//     // window.addEventListener("focus", function (event) {
//     // });

//     // window.addEventListener("blur", function (event) {
//     //   const notification = new Audio(".././notification.mp3");
//     //   notification.play();
//     // });
//     document.addEventListener("visibilitychange", function (event) {
//       if (document.hidden) {
//       } else {
//       }
//     });
//   }, [messages, id]);
//   return (
//     <>
//       <button>Play</button>

//       {isAuthenticated === uid ? (
//         <li className="clearfix">
//           <div className="message-data text-right">
//             <span className="message-data-time mx-1">{displayName}</span>
//             <img src={photoUrl} alt="avatar" />
//           </div>
//           <div className="message other-message float-right">{msg}</div>
//         </li>
//       ) : (
//         <li className="clearfix">
//           <div className="message-data">
//             <span className="message-data-time mx-1">{displayName}</span>
//             <img src={photoUrl} alt="avatar" />
//           </div>
//           <div className="message my-message">{msg}</div>
//         </li>
//       )}
//     </>

//     // <div className="card mb-3 container">
//     //   <div className="card-body">
//     //     <div className="d-flex flex-start">
//     //       <img
//     //         className="rounded-circle shadow-sm mr-3"
//     //         src={photoUrl}
//     //         alt="avatar"
//     //         width="40"
//     //         height="40"
//     //       />
//     //       <div className="w-100">
//     //         <div className=" d-flex justify-content-between align-items-center mb-3">
//     //           <div>
//     //             <h6 className="text-dark ">{title}</h6>
//     //             <span className="small text-primary fw-bold mb-0">
//     //               {displayName}
//     //             </span>
//     //           </div>
//     //           <p className="small mb-0" style={{ color: "#aaa" }}>
//     //             {date}
//     //           </p>
//     //         </div>
//     //         <div className="d-flex justify-content-between align-items-center">
//     //           <p className="small p-1 mb-0">{description}</p>
//     //           {uid === isAuthenticated ? (
//     //             <div className="d-flex flex-row">
//     //               <Link
//     //                 to={{
//     //                   pathname: `/edit/${id}`,
//     //                   state: uid,
//     //                 }}
//     //               >
//     //                 Edit
//     //               </Link>
//     //             </div>
//     //           ) : (
//     //             <></>
//     //           )}
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

// Higher Order Component (HOC)

export default connect(mapStateToProps)(MessageListItem);
