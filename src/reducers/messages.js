const messageState = [];

const messageReducer = (state = messageState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, action.message];
    case "REMOVE_MESSAGE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_MESSAGE":
      return state.map((message) => {
        if (message.id === action.id) {
          return { ...message, ...action.updates };
        } else {
          return message;
        }
      });
    case "SET_MESSAGES":
      return [...state].concat(action.messages);

    case "CLEAR_MESSAGES":
      return [];
    default:
      return state;
  }
};

export default messageReducer;
