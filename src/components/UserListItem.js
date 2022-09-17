import React from "react";
import { useEffect, useState } from "react";
import database from "../firebase/firebaseConfig";

const UserListItem = ({ displayName, email, photoUrl, uid }) => {
  const [checkOnline, setCheckOnline] = useState(null);
  useEffect(() => {
    database.ref("online").on("value", (snapshot) => {
      const users = [];
      snapshot.forEach((user) => {
        users.push(user.key);
      });

      setCheckOnline(users.includes(uid));
    });
  }, []);
  return (
    <li className="clearfix">
      <img src={photoUrl} alt="avatar" />
      <div className="about">
        <div className="name">{displayName}</div>
        <div className="status">
          {checkOnline ? (
            <>
              <i className="fa fa-circle online"></i> Online
            </>
          ) : (
            <>
              <i className="fa fa-circle offline"></i> Offline
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default UserListItem;
