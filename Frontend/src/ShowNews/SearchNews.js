import '../index.css';
import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Navbar from '../Pages/Navbar';
import Footer from '../MandatoryItems/Footer';

const SearchNews = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Check if the search query matches the date format (YYYY-MM-DD)
      const isDate = /^\d{4}-\d{2}-\d{2}$/.test(searchQuery);
      // Set the search parameters based on whether it's a date or title search
      const params = isDate ? { date: searchQuery } : { title: searchQuery };
      const response = await axios.get('http://localhost:3001/api/search', {
        params: params
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching news:', error);
    }
    setLoading(false);
  };

  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div className='SearchBar_Button'>
      <form onSubmit={handleSubmit}>
        <div className='SearchItems'>
          <TextField className='Searchfield' type="text" value={searchQuery} onChange={handleChange} label="YYYY-MM-DD or Title" variant="outlined" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='SearchButton' type="submit" disabled={loading}>Search</button>
        </div>
      </form>
      <br/>
      {loading && <p>Loading...</p>}
      {Object.keys(searchResults).map((category, index) => (
        <div key={index} className='SearchContent'>
          <br/>
          <h3 style={{ fontFamily: 'Times New Roman',marginLeft:"35%"}}>{category.toUpperCase()}&nbsp;&nbsp;NEWS</h3><br/>
          {searchResults[category].length > 0 ? (
            <ul className="news-list">
              {searchResults[category].map((newsItem, newsIndex) => (
                <li key={newsIndex} className="news-item">
                  <h4>{newsItem.title}</h4>
                  <img className="searchnews-image" src={`http://localhost:3001/${newsItem.image}`} alt="News Image" />
                  <p> {newsItem.article}</p>
                  {/* Add more fields as needed */}
                  <br/>
                </li>
              ))}
            </ul>
          ) : (
            <p>No {category.toLowerCase()} news found</p>
          )}
        </div>
      ))}
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default SearchNews;