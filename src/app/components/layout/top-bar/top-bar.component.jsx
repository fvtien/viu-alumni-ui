import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

import StorageService from "@/core/services/storage";
import "./top-bar.component.scss";

const TopBar = () => {
  const [isToken, setToken] = useState(false);

  useEffect(() => {
    if (StorageService.get("token")) {
      setToken(true);
      return;
    }
  }, []);

  const history = useHistory();

  const handleLogout = useCallback(() => {
    history.push("/login");
    StorageService.set("token", "");
  }, [history]);

  return (
    <div className="top-bar">
      <div className="container d-flex justify-content-between">
        <ul className="top-bar__info">
          <li>
            <a href="tel:00000">
              <PhoneOutlined />
              &nbsp; +84 2433 838 345{" "}
            </a>
          </li>
          <li>
            <a href="mailto:vhalumni@gmail.com">
              <MailOutlined />
              &nbsp; vhalumni@gmail.com
            </a>
          </li>
        </ul>
        <div className="top-bar__user">
          {isToken ? (
            <Link to="/login" onClick={handleLogout}>
              Đăng xuất
            </Link>
          ) : (
            <Link to="/login">Đăng nhập</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
