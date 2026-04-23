import React, { useContext } from 'react';
import '../styles/Hero.css';
import { GeneralContext } from '../context/GeneralContext';
import Spinner from 'react-bootstrap/Spinner';

const Hero = () => {
  const { topNews } = useContext(GeneralContext);

  if (!topNews || topNews.length <= 5) {
    return (
      <div className="hero-spinner" aria-label="Loading top news">
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
      </div>
    );
  }

  return (
    <div className="hero-container">

      {/* Featured Article */}
      <div
        className="hero-featured"
        onClick={() => window.open(topNews[1].url, '_blank')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') window.open(topNews[1].url, '_blank');
        }}
        aria-label={`Read featured article: ${topNews[1].title}`}
      >
        <img
          src={topNews[1].urlToImage || '/placeholder.jpg'}
          alt={topNews[1].title}
          loading="lazy"
        />
        <div className="hero-featured-text">
          <h2>{topNews[1].title}</h2>
        </div>
      </div>

      {/* Side Articles */}
      <div className="hero-side-articles">
        {topNews.slice(2, 6).map((article, index) => (
          <div
            key={index}
            className="hero-article-card"
            onClick={() => window.open(article.url, '_blank')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') window.open(article.url, '_blank');
            }}
            aria-label={`Read article: ${article.title}`}
          >
            <img
              src={article.urlToImage || '/placeholder.jpg'}
              alt={article.title}
              loading="lazy"
            />
            <p>{article.title}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Hero;
