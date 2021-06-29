import React from "react";
import { Link } from "react-router-dom";

import "./footer.component.scss";
import ViuLogo from "../../../assets/images/viu-logo.png";

import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col--12">
            <div className="footer__logo">
              <Link to="/">
                <img src={ViuLogo} alt={""} /> <span>VIET HUNG ALUMNI</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row block">
          <div className="col-12 col__md--3">
            <h2 className="block__title">OUR LINK</h2>
            <ul className="our-link">
              <li>
                <Link to="#">Giới thiệu</Link>
              </li>
              <li>
                <Link to="#">Ngành đào tạo</Link>
              </li>
              <li>
                <Link to="#">Tin tức &amp; sự kiện</Link>
              </li>
              <li>
                <Link to="#">Cựu sinh viên</Link>
              </li>
              <li>
                <Link to="#">Việc làm - Tuyển dụng</Link>
              </li>
              <li>
                <Link to="#">Liên hệ</Link>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <Link to="#">
                  <TwitterOutlined />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <YoutubeOutlined />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FacebookOutlined />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <InstagramOutlined />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col__md--3">
            <h2 className="block__title">Sơn Tây</h2>
            <ul className="place">
              <li>
                <p>Số 16 Hữu Nghị - Xuân Khanh - Sơn Tây - TP. Hà Nội</p>
              </li>
              <li>
                <p>
                  Điện thoại: <Link to="#">+84 2433 838 063 </Link>
                </p>
              </li>
              <li>
                <p>
                  Email: <Link to="#">vhalumni@gmail.com</Link>
                </p>
              </li>
            </ul>
          </div>
          <div className="col-12 col__md--3">
            <h2 className="block__title">Thạch Thất</h2>
            <ul className="place">
              <li>
                <p>Khu Công nghiệp Bình Phú - Thạch Thất - TP. Hà Nội</p>
              </li>
              <li>
                <p>
                  Điện thoại: <Link to="#">+84 2462 517 333 </Link>
                </p>
              </li>
              <li>
                <p>
                  Email: <Link to="#">vhalumni@gmail.com</Link>
                </p>
              </li>
            </ul>
          </div>
          <div className="col-12 col__md--3">
            <h2 className="block__title">Thanh Xuân</h2>
            <ul className="place">
              <li>
                <p>Số 27 Lê Văn Lương - Thanh Xuân - TP. Hà Nội</p>
              </li>
              <li>
                <p>
                  Điện thoại: <Link to="#">+84 2433 838 345 </Link>
                </p>
              </li>
              <li>
                <p>
                  Email: <Link to="#">vhalumni@gmail.com</Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col--12">
            <p className="copyright text-center">
              Copyright © 2021 Đại học Công nghiệp Việt-Hung. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
