import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import '../styles/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState('');

  const currentPath = location.pathname.toLowerCase();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'General', path: '/category/general' },
    { label: 'Technology', path: '/category/technology' },
    { label: 'Politics', path: '/category/politics' },
    { label: 'Health', path: '/category/health' },
    { label: 'Art & Culture', path: '/category/art&culture' },
  ];

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/category/${search.trim().toLowerCase()}`);
      setSearch('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <button
        className="navbar__logo"
        onClick={() => navigate('/')}
        aria-label="Go to Home page"
      >
        <h2>Daily News</h2>
      </button>

      <ul className="navbar__links">
        {navLinks.map(({ label, path }) => {
          const isActive = currentPath === path || (path !== '/' && currentPath.startsWith(path));
          return (
            <li key={label} className="navbar__item">
              <button
                onClick={() => navigate(path)}
                className={`navbar__link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Go to ${label} category`}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="navbar__search" role="search">
        <input
          className="search-input"
          type="search"
          placeholder="Search category..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Search categories"
          autoComplete="off"
        />
        <button
          className="search-button"
          onClick={handleSearch}
          aria-label="Search"
          type="submit"
        >
          <IoSearch size={20} />
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
