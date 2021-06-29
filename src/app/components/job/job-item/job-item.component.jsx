import React from "react";
import { useParams, Link } from "react-router-dom";

import "./job-item.component.scss";
import { mockJob } from "../mock/mock_job";

const JobItem = () => {
  const { jobId } = useParams();
  const jobItem = mockJob.find(job => job.job_id == jobId);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col--12 col__md--8">
            <div className="row">
              <div className="col--12 col__md--12 job__item">
                <div className="job__text">
                  <h3 className="font-title">{jobItem.job_name}</h3>
                  <p>
                    {jobItem.salary_min} - {jobItem.salary_max}
                  </p>
                  <p>
                    {jobItem.date_begin} - {jobItem.date_end}
                  </p>
                  <p className="job__skills">
                    Kỹ năng:{" "}
                    {jobItem.skills.map(skill => (
                      <span>{skill.name}</span>
                    ))}
                  </p>

                  <div className="font-description">
                    <p>Mô tả: {jobItem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col--12 col__md--4 job-list">
            <div className="row">
              <div className="col--12">
                <h2>Việc làm mới nhất</h2>
              </div>
            </div>
            {mockJob.map(item => (
              <div key={item.job_id} className="row mr-0 ml-0 job-list__item">
                <div className="col__md--3 pr-0 pl-0">
                  <Link to={`/job/${item.job_id}`}>
                    <div className="job-list__image">
                      <img src={item.image} alt={item.job_name} />
                    </div>
                  </Link>
                </div>
                <div className="col__md--9 job-list__text">
                  <h4 className="job-list__title">
                    <Link to={`/job/${item.job_id}`}>{item.job_name}</Link>
                  </h4>
                  <Link
                    to={`/job/${item.job_id}`}
                    className="job-list__read-more"
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
