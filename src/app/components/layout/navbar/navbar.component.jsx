import React from "react";
import { Link } from "react-router-dom";

import { AlignRightOutlined } from "@ant-design/icons";

import "./navbar.component.scss";
import ViuLogo from "@/app/assets/images/viu-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="navbar-brand">
          <Link to={"/"}>
            <img src={ViuLogo} alt={"VIU Alumni"} />{" "}
            <span>VIET HUNG ALUMNI</span>
          </Link>
        </div>
        <div className="menu-mobile d-md-none">
          <AlignRightOutlined />
        </div>
        <div className="menu-wrap d-none d-md-block">
          <ul className="menu d-flex justify-content-between">
            <li className="menu__item">
              <Link to={"/"} className="menu__link">
                Giới thiệu
              </Link>
              <ul className="sub-menu">
                <li className="menu__item">
                  <Link to={"/"} className="menu__link">
                    Về VIU
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to={"/"} className="menu__link">
                    Lãnh đạo, giảng viên
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to={"/"} className="menu__link">
                    Kết quả
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu__item">
              <Link to={"/"} className="menu__link">
                Ngành đào tạo
              </Link>
              <ul className="sub-menu">
                <li className="menu__item">
                  <Link to={"/"} className="menu__link">
                    Công nghệ kỹ thuật điện, điện tử
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Hệ thống điện
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Điện tử truyền thông
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Điện tử điện lạnh
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Điện tử y sinh
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Công nghệ kỹ thuật điện tử
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <Link to={"/"} className="menu__link">
                    Công nghệ kỹ thuật cơ khí
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Cơ - tin kỹ thuật
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Công nghệ chế tạo máy
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Thiết kế cơ khí
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Chế tạo khuôn mẫu
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <Link to={"/"} className="menu__link">
                    Công nghệ kỹ thuật xây dựng
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Xây dựng công nghiệp và dân dụng
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Quản lý xây dựng
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <Link to={"/"} className="menu__link">
                    Công nghệ kỹ ô tô
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Công nghệ ô tô
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Điện - điện tử ô tô
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Động cơ ô tô
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <Link to={"/"} className="menu__link">
                    Công nghệ thông tin
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Công nghệ thông tin
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Thương mại điện tử
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Thiết kế đồ họa
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Quảng cáo số
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Tin học - kế toán
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Công nghệ truyền thông đa phương tiện
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <Link to={"/"} className="menu__link">
                    Tài chính - Ngân hàng
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Tài chính - Ngân hàng
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Tài chính - Kế toán
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Tài chính doanh nghiệp
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Công nghệ tài chính
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <Link to={"/"} className="menu__link">
                    Quản trị kinh doanh
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Quản trị kinh doanh
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Quản trị nân lực
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Quản trị Marketing
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Quản trị khách sạn và du lịch
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Kinh doanh thương mại
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Kinh doanh quốc tế
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Quản trị bán lẻ
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Quản trị chuỗi dịch vụ kim khí, điện máy
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Quản trị chuỗi tạo mẫu và chăm sóc sắc đẹp
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Quản trị chuỗi cung ứng sản phẩm nông nghiệp sạch
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <Link to={"/"} className="menu__link">
                    Kinh tế
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Kinh tế quản lý
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Kế toán
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Logistics
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Kinh tế thương mại
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Kinh tế quản trị thương mại
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Kinh tế đầu tư
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Kinh tế hộ gia đình
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link to={"/"} className="menu__link">
                        Kinh tế xây dựng
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu__item">
              <Link to="/news" className="menu__link">
                Tin tức &amp; Sự kiện
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/alumni" className="menu__link">
                Cựu sinh viên
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/job" className="menu__link">
                Việc làm
              </Link>
            </li>
            <li className="menu__item">
              <Link to={"/"} className="menu__link">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
