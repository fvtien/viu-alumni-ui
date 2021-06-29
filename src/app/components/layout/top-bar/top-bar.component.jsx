import React from "react";
import "./top-bar.component.scss";

import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

const TopBar = () => {
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
          <a href="/login">Đăng xuất</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
