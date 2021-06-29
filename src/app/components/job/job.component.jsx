import React from "react";
import { Link } from "react-router-dom";
import { AimOutlined, DollarOutlined } from "@ant-design/icons";

import "./job.component.scss";
import { mockJob } from "./mock/mock_job";

const Job = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col--12">
            <h2 className="section__title">VIỆC LÀM</h2>
          </div>
        </div>
        <div className="row">
          {mockJob.map(item => (
            <div key={item.job_id} className="col--12 col__md--4 job__item">
              <div className="row">
                <div className="col--4 pr-0">
                  <Link to={item.link}>
                    <div className="job__image">
                      <img
                        className="img-fluid"
                        alt={item.job_name}
                        src={item.image}
                      />
                    </div>
                  </Link>
                </div>
                <div className="col--8">
                  <div className="job__text">
                    <h3 className="job__title font-title">
                      <Link to={item.link}>{item.job_name}</Link>
                    </h3>
                    <h3 className="job__company-name">
                      <p>{item.company_name}</p>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="job__location">
                        <AimOutlined /> Hà Nội
                      </div>
                      <div className="job__salary">
                        <DollarOutlined /> {item.salary_min} - {item.salary_max}
                      </div>
                    </div>
                    <div className="job__date">
                      <span className="job__posted-date">
                        {item.date_begin} - {item.date_end}{" "}
                      </span>
                    </div>
                    <div className="job__skills">
                      {item.skills.map(skill => (
                        <span key={skill.id}>{skill.name}</span>
                      ))}
                    </div>
                    <div className="job__description font-description">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
