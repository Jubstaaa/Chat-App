const userState = [];

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return action.users;
    default:
      return state;
  }
};

export default userReducer;
