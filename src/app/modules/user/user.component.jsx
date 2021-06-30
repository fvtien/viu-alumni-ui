import React from "react";

import MainLayout from "@/app/components/layout";
import User from "@/app/components/user";

const UserPage = () => {
  return (
    <MainLayout>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col--12">
              <h2 className="section__title">Sinh viên - Cựu sinh viên</h2>
            </div>
          </div>
          <div className="row">
            <div className="col--12">
              <User />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserPage;
