import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import { LoginOutlined } from "@ant-design/icons";

import MainLayout from "@/app/components/layout";
import User from "@/app/components/user";
import StorageService from "@/core/services/storage";

const UserPage = () => {
  const [isToken, setToken] = useState(false);

  useLayoutEffect(() => {
    if (StorageService.get("token")) {
      setToken(true);
      return;
    }
  }, []);

  return (
    <MainLayout>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col--12">
              {isToken ? (
                <>
                  <h2 className="section__title">Sinh viên - Cựu sinh viên</h2>
                  <User />
                </>
              ) : (
                <p>
                  Vui lòng đăng nhập để xem các sinh viên/ cựu sinh viên{" "}
                  <Link to="/login">
                    <LoginOutlined /> Đăng nhập
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserPage;
