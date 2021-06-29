import React from "react";
import { Carousel } from "antd";
import { mockBanner } from "./mock/mock_banner";
import "./banner.component.scss";

const Banner = () => {
  return (
    <Carousel autoplay draggable dotPosition="bottom">
      {mockBanner.map(banner => (
        <div key={banner.banner_id} className="banner__item">
          <img src={banner.image} alt={banner.name} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
