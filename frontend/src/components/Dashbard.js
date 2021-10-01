import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/user/user.actions";

function Dashbard({ history }) {
  const dispatch = useDispatch();
  // USER INFO Selector
  const { userInfo } = useSelector((state) => state.user.userLogin);
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);
  return (
    <div>
      Dashboard
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default Dashbard;
