import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./banner.component.scss";
import { mockBanner } from "./mock/mock_banner";

const Banner = () => {
  return (
    <div className="banner">
      <OwlCarousel
        className="owl-theme"
        loop
        nav={false}
        mouseDrag
        autoplay
        items={1}
      >
        {mockBanner.map(item => (
          <div key={item.banner_id} className="banner__item">
            <Link to={item.link}>
              <img src={item.image} alt={item.title} />
            </Link>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Banner;
