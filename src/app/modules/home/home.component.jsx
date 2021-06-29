import React from "react";
import MainLayout from "@/app/components/layout";
import Banner from "@/app/components/banner";
import Course from "@/app/components/course";
import Job from "@/app/components/job";
import News from "@/app/components/news";
import { mockJob } from "@/app/components/job/mock/mock_job";

const HomePage = () => {
  return (
    <MainLayout>
      <Banner />
      <Course />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col--12">
              <h2 className="section__title">VIỆC LÀM</h2>
            </div>
          </div>
          <div className="row">
            <Job job={mockJob} />
          </div>
        </div>
      </div>
      <News />
    </MainLayout>
  );
};

export default HomePage;
