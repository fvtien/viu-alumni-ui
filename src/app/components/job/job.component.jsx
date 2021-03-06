import React from "react";
import { Link } from "react-router-dom";
import { AimOutlined, DollarOutlined } from "@ant-design/icons";

import "./job.component.scss";

const Job = ({ job }) => {
  return (
    <>
      {job.map(item => (
        <div key={item.job_id} className="col--12 col__md--4 job__item">
          <div className="row">
            <div className="col--4 pr-0">
              <Link to={`/job/${item.job_id}`}>
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
                  <Link to={`/job/${item.job_id}`}>{item.job_name}</Link>
                </h3>
                <h3 className="job__company-name">
                  <p>{item.company_name}</p>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="job__location">
                    <AimOutlined /> {item.zone}
                  </div>
                  <div className="job__salary">
                    <DollarOutlined /> {item.salary_min} - {item.salary_max}
                  </div>
                </div>
                <div className="job__date">
                  <span className="job__posted-date">
                    {item.date_begin} - {item.date_end}
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
    </>
  );
};

export default Job;
