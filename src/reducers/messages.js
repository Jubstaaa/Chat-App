const messageState = [];

const messageReducer = (state = messageState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, action.message];

    case "SET_MESSAGES":
      return [...state].concat(action.messages);

    default:
      return state;
  }
};

export default messageReducer;
