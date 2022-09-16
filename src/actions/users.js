import database from "../firebase/firebaseConfig";

export const setUsers = (users) => ({
  type: "SET_USERS",
  users,
});

export const getUsersFromDatabase = () => {
  return (dispatch, getState) => {
    return database.ref("users").on("value", (snapshot) => {
      const users = [];

      snapshot.forEach((user) => {
        users.push({
          ...user.val(),
        });
      });
      dispatch(setUsers(users));
    });
  };
};
