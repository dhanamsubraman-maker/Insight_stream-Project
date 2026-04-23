import React from 'react';
import '../styles/Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const footerCategories = [
    ['General', 'Technology', 'Science'],
    ['Lifestyle', 'Health', 'Fitness'],
    ['Business', 'Stock Markets', 'Exchanges'],
    ['Geo-Politics', 'Wars', 'Current-Affairs']
  ];

  return (
    <footer className="footer-container">
      <nav className="footer-links">
        {footerCategories.map((categoryGroup, index) => (
          <ul key={index}>
            {categoryGroup.map((category) => (
              <li key={category} onClick={() => navigate(`/category/${category === 'General' ? '' : category}`)}>
                {category}
              </li>
            ))}
          </ul>
        ))}
      </nav>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>Daily News &copy; {new Date().getFullYear()} – All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
