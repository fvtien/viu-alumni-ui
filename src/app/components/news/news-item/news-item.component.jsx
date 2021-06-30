/* eslint-disable eqeqeq */
import React from "react";
import { useParams, Link } from "react-router-dom";

import { mockNews } from "../mock/mock_news";
import "./news-item.component.scss";

const NewsItem = () => {
  const { newsId } = useParams();
  const newsItem = mockNews.find(news => news.news_id == newsId);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col--12 col__md--8">
            <div className="row">
              <div className="col--12">
                <p>Thời gian: {newsItem.date}</p>
              </div>
              <div className="col--12 col__md--12 news__item">
                <div className="news__text">
                  <h3 className="font-title">{newsItem.title}</h3>
                  <div className="font-description">
                    <p>{newsItem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col--12 col__md--4 news-list">
            <div className="row">
              <div className="col--12">
                <h2>Tin tức mới nhất</h2>
              </div>
            </div>
            {mockNews.map(item => (
              <div key={item.news_id} className="row mr-0 ml-0 news-list__item">
                <div className="col__md--3 pr-0 pl-0">
                  <Link to={`/news/${item.news_id}`}>
                    <div className="news-list__image">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </Link>
                </div>
                <div className="col__md--9 news-list__text">
                  <h4 className="news-list__title">
                    <Link to={`/news/${item.news_id}`}>{item.title}</Link>
                  </h4>
                  <Link
                    to={`/news/${item.news_id}`}
                    className="news-list__read-more"
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

export default NewsItem;
