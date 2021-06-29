import React from "react";
import { Link } from "react-router-dom";

import "./course.component.scss";
import { mockCourses } from "./mock/mock_course";

const Course = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col--12">
            <h2 className="section__title">NGÀNH ĐÀO TẠO</h2>
          </div>
        </div>
        <div className="row">
          {mockCourses.map(item => (
            <div
              key={item.course_id}
              className="col--12 col__md--3 course__item"
            >
              <Link to={item.link}>
                <div className="d-flex justify-content-center align-items-center">
                  <img src={item.image} alt={item.name} />
                </div>
                <p className="text-black text-center">{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
