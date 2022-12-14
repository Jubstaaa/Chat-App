import database from "../firebase/firebaseConfig";
import { store } from "../index";

export const addMessage = (message) => ({
  type: "ADD_MESSAGE",
  message,
});

export const addMessageToDatabase = (messageData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const displayName = getState().auth.displayName;
    const photoUrl = getState().auth.photoUrl;
    const { msg = "" } = messageData;
    const message = {
      msg,
      uid,
      displayName,
      photoUrl,
    };

    database.ref("messages").push(message);
  };
};

export const setMessages = (messages) => ({
  type: "SET_MESSAGES",
  messages,
});

export const getMessagesFromDatabase = () => {
  return (dispatch, getState) => {
    return database.ref("messages").on("value", (snapshot) => {
      const messages = [];

      snapshot.forEach((message) => {
        messages.push({
          id: message.key,
          ...message.val(),
        });
      });
      const arr1 = [
        { id: 1, name: "Tom" },
        { id: 2, name: "John" },
      ];
      const arr2 = [{ id: 1, name: "Tom" }];

      function getDifference(array1, array2) {
        return array1.filter((object1) => {
          return !array2.some((object2) => {
            return object1.id === object2.id;
          });
        });
      }
      const addMessage = getDifference(messages, store.getState().messages);

      dispatch(setMessages(addMessage));
    });
  };
};
