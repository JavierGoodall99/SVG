import React, { useState } from 'react';
import './App.css';

interface SearchBarProps {
  onSearch: (searchTerm: string, category: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [showCategories, setShowCategories] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCategory(selectedCategory);
    } else {
      setCategory('');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSearch(searchTerm, category);
    setSearchTerm('');
  };

  const handleFilterButtonClick = () => {
    setShowCategories(!showCategories);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="custom-select" type="button" onClick={handleFilterButtonClick}>
        {showCategories ? 'Filter' : 'Filter'}
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="red-placeholder"
      />
      <button className="searchButton" type="submit">Search</button>
      {showCategories && (
        <div className="category-container"> {/* Added container */}
          <label className="category-label">
            <input
              type="checkbox"
              value="Category1"
              checked={category === 'Category1'}
              onChange={handleCategoryChange}
            />
            Category 1
          </label>
          <label className="category-label">
            <input
              type="checkbox"
              value="Category2"
              checked={category === 'Category2'}
              onChange={handleCategoryChange}
            />
            Category 2
          </label>
          <label className="category-label">
            <input 
              type="checkbox"
              value="Category3"
              checked={category === 'Category3'}
              onChange={handleCategoryChange}
            />
            Category 3
          </label>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
