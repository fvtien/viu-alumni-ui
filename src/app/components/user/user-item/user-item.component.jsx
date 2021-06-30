import React from "react";
import { useParams } from "react-router-dom";
import { mockUser } from "../mock/mock_user";

const UserItem = () => {
  const { userId } = useParams();
  const userItem = mockUser.find(user => user.user_id == userId);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col--12 col__md--8">
            <div className="row">
              <div className="col--12 col__md--12 user__item">
                <div className="user__text">
                  <p>Mã sinh viên: {userItem.user_id}</p>
                  <h3 className="font-title">{userItem.name}</h3>
                  <p>
                    <img src={userItem.image} alt="" />
                  </p>
                  <p>Khoa: {userItem.faculty}</p>
                  <p>Chuyên ngành {userItem.majors}</p>
                  <p>Lĩnh vực làm việc: {userItem.filed_work}</p>
                  <p>Lớp: {userItem.user_class}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
