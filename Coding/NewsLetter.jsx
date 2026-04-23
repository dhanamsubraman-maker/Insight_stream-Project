import React, { useState } from 'react';
import '../styles/NewsLetter.css';

const NewsLetter = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setEmail('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="newsletter-container" aria-label="Newsletter subscription form">
      <h2 className="newsletter-title">Subscribe to our Newsletter</h2>
      <p className="newsletter-subtitle">
        Receive a weekly digest of our most important stories directly to your inbox.
      </p>

      <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
          className="newsletter-input"
        />
        <button type="submit" className="newsletter-button" aria-label="Subscribe to newsletter">
          Subscribe
        </button>
      </form>

      {showSuccess && (
        <div className="newsletter-success" role="alert" aria-live="polite">
          <p>Thank you for subscribing!</p>
          <p>You will receive a confirmation email shortly.</p>
        </div>
      )}

      <p className="newsletter-disclaimer">
        We respect your privacy. Your email will not be shared. Read our{' '}
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>.
      </p>
    </section>
  );
};

export default NewsLetter;
