import { firebase, googleAuthProvider } from "..//firebase/firebaseConfig";
import database from "../firebase/firebaseConfig";

export const login = () => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const loginAction = (user) => ({
  type: "LOGIN",
  user,
});

export const logout = () => {
  return firebase.auth().signOut();
};

export const logoutAction = () => ({
  type: "LOGOUT",
});

export const addUserToDatabase = (user) => {
  return (dispatch) => {
    const userInfo = {
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      email: user.email,
    };
    return database
      .ref(`users/${user.uid}`)
      .set(userInfo)
      .then(() => {
        dispatch(loginAction(user));
      });
  };
};
