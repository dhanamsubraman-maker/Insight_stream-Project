import React, { useContext } from 'react';
import '../styles/HomeArticles.css';
import { GeneralContext } from '../context/GeneralContext';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const HomeArticles = () => {
  const navigate = useNavigate();
  const { businessNews, technologyNews, politicsNews } = useContext(GeneralContext);

  const sections = [
    { title: 'Business', news: businessNews, route: 'business' },
    { title: 'Technology', news: technologyNews, route: 'technology' },
    { title: 'Politics', news: politicsNews, route: 'politics' },
  ];

  return (
    <div className="home-articles-container">
      {sections.map(({ title, news, route }) => (
        <section key={title} className="home-articles-section">
          <div className="home-articles-head">
            <h2>{title}</h2>
            <p
              className="view-all"
              onClick={() => navigate(`/category/${route}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/category/${route}`)}
              aria-label={`View all ${title} articles`}
            >
              View all
            </p>
          </div>

          {news.length > 0 ? (
            <div className="home-articles">
              {news.slice(0, 3).map((article, idx) => (
                <article
                  key={idx}
                  className="home-article"
                  onClick={() => window.open(article.url, '_blank')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && window.open(article.url, '_blank')}
                  aria-label={`Read article: ${article.title}`}
                >
                  <img
                    src={article.urlToImage || '/placeholder.jpg'}
                    alt={article.title}
                    loading="lazy"
                  />
                  <p>{article.title}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="spinners" aria-label={`Loading ${title} news`}>
              <Spinner animation="grow" size="sm" />
              <Spinner animation="grow" size="sm" />
              <Spinner animation="grow" size="sm" />
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default HomeArticles;
