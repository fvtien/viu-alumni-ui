import React from "react";
import { Link } from "react-router-dom";

import { mockNews } from "./mock/mock_news";

import "./news.component.scss";

const News = () => {
  return (
    <section className="section news-events">
      <div className="container">
        <div className="row">
          <div className="col--12">
            <h2 className="section__title">TIN TỨC - SỰ KIỆN</h2>
          </div>
        </div>
        <div className="row">
          {mockNews.map(item => (
            <div key={item.news_id} className="col--12 col__md--4 news__item">
              <Link to={item.link}>
                <div className="news__image">
                  <img
                    className="img-fluid"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </Link>
              <div className="news__text">
                <h3 className="news__title font-title">
                  <Link to={item.link}>{item.title}</Link>
                </h3>
                <div className="news__description font-description">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
