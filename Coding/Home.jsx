import React from 'react';
import '../styles/Home.css';
import Hero from '../components/Hero';
import TopStories from '../components/TopStories';
import HomeArticles from '../components/HomeArticles';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <main className="home">
      <Hero />

      <section className="home-section top-stories-section" aria-label="Top Stories Section">
        <TopStories />
      </section>

      <section className="home-section articles-section" aria-label="Articles Section">
        <HomeArticles />
      </section>

      <section className="home-section newsletter-section" aria-label="Newsletter Subscription Section">
        <NewsLetter />
      </section>
    </main>
  );
};

export default Home;
