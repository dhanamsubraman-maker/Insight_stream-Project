import React, { useContext } from 'react';
import '../styles/TopStories.css';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';
import { Spinner } from 'react-bootstrap';

const TopStories = () => {
  const navigate = useNavigate();
  const { topNews } = useContext(GeneralContext);

  return (
    <section className="top-stories-container" aria-label="Top News Stories">
      <h3 className="top-stories-title">Top Stories</h3>

      {topNews && topNews.length > 0 ? (
        <>
          <div className="top-stories-list" role="list">
            {topNews.slice(6, 16).map((article, index) => (
              <article
                className="top-story-item"
                key={index}
                onClick={() => window.open(article.url, '_blank')}
                tabIndex={0}
                role="listitem link"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') window.open(article.url, '_blank');
                }}
                aria-label={`Open article: ${article.title}`}
              >
                <img
                  src={article.urlToImage || '/placeholder.png'}
                  alt={article.title || 'Top story image'}
                  className="top-story-image"
                />
                <p className="top-story-title" title={article.title}>
                  {article.title.length > 60 ? article.title.slice(0, 60) + '...' : article.title}
                </p>
              </article>
            ))}
          </div>

          <button
            className="top-stories-btn"
            onClick={() => navigate('/category/trending')}
            aria-label="View more top stories"
          >
            View More
          </button>
        </>
      ) : (
        <div className="top-stories-spinner" aria-live="polite" aria-busy="true">
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
        </div>
      )}
    </section>
  );
};

export default TopStories;
