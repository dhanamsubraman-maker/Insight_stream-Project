import React from 'react';
import '../styles/NewsPage.css';

const NewsPage = () => {
  return (
    <main className="news-page">
      <article className="news-article">
        <h1 className="news-title">News Title Goes Here</h1>
        <p className="news-meta">Published on September 8, 2025 | Author Name</p>
        <img 
          className="news-image" 
          src="https://via.placeholder.com/900x400" 
          alt="News related visual" 
        />
        <section className="news-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. 
            Nulla facilisi. Sed at neque vitae sapien commodo suscipit. 
          </p>
          <p>
            Curabitur consequat, metus at suscipit varius, eros quam cursus purus, 
            eu suscipit nunc libero eget augue. Integer porttitor purus nec leo bibendum, 
            non bibendum lacus condimentum.
          </p>
        </section>
      </article>
    </main>
  );
};

export default NewsPage;
