import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  //   const { user } = UserContext(UserContext);
  const { user } = useContext(UserContext);

  if (!user) return <div>please login</div>;
  return <div>welcome: {user.username}</div>;
}

export default Profile;
