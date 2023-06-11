import React, { useState } from 'react';
import "./App.css";

const ArrowUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 300); // Show the button when scrolling down 300 pixels
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`arrow-up-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <img src="https://i.postimg.cc/sx6MYGqk/up-arrow-button.png" alt="ArrowUpButton" />
    </button>
  );
};

export default ArrowUpButton;
