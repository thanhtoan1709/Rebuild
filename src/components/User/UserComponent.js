import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/actions/authAction";
import { apiGetOne } from "../api/userService";
import { useNavigate } from "react-router-dom";

const UserComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);

  const [userData, setUserData] = useState(null);
  const userName = userData ? userData.userData.name : "Người dùng";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await apiGetOne(token);
        setUserData(data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          dispatch(logOut());
          navigate("/login");
        }
      }
    };

    if (isLoggedIn) {
      fetchUserData();
    }
  }, [isLoggedIn, token, dispatch, navigate]);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Chào, {userName}!</h2> {/* Hiển thị tên người dùng */}
          <button onClick={handleLogout}>Đăng Xuất</button>
        </div>
      ) : (
        <button onClick={() => navigate("/login")}>Đăng Nhập</button>
      )}
    </div>
  );
};

export default UserComponent;
