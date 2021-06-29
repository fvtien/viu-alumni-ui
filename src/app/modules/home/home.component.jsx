import React from "react";
import MainLayout from "@/app/components/layout";
import Banner from "@/app/components/banner";
import Course from "@/app/components/course";
import Job from "@/app/components/job";
import News from "@/app/components/news";

const HomePage = () => {
  return (
    <MainLayout>
      <Banner />
      <Course />
      <Job />
      <News />
    </MainLayout>
  );
};

export default HomePage;
