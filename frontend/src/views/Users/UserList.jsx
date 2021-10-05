import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function UserList({ history }) {
  const { userInfo } = useSelector((state) => state.user.userLogin);
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  return <div>User List</div>;
}

export default UserList;
