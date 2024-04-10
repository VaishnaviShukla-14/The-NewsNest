// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchNews = () => {
//   const [formData, setFormData] = useState({
//     date: '',
//     title: ''
//   });
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:3001/api/search', {
//         params: formData
//       });
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error('Error searching national news:', error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div>
//       <h2>Search National News</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Date (YYYY-MM-DD):</label>
//           <input type="text" name="date" value={formData.date} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Title:</label>
//           <input type="text" name="title" value={formData.title} onChange={handleChange} />
//         </div>
//         <button type="submit" disabled={loading}>Search</button>
//       </form>
//       {loading && <p>Loading...</p>}
//       {searchResults.length > 0 && (
//         <div>
//           <h3>Search Results:</h3>
//           <ul>
//             {searchResults.map((newsItem, index) => (
//               <li key={index}>
//                 <p>Title: {newsItem.title}</p>
//                 <p>Article: {newsItem.article}</p>
//                 <p>Date: {newsItem.date}</p>
//                 {/* Add more fields as needed */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchNews;


import React, { useState } from 'react';
import axios from 'axios';

const SearchNews = () => {
  const [formData, setFormData] = useState({
    date: '',
    title: ''
  });
  const [searchResults, setSearchResults] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/api/search', {
        params: formData
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching news:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Search News</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date (YYYY-MM-DD):</label>
          <input type="text" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <button type="submit" disabled={loading}>Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {Object.keys(searchResults).map((category, index) => (
        <div key={index}>
          <h3>{category.toUpperCase()} News</h3>
          {searchResults[category].length > 0 ? (
            <ul>
              {searchResults[category].map((newsItem, newsIndex) => (
                <li key={newsIndex}>
                  <p>Title: {newsItem.title}</p>
                  <p>Article: {newsItem.article}</p>
                  <p>Date: {newsItem.date}</p>
                  {/* Add more fields as needed */}
                </li>
              ))}
            </ul>
          ) : (
            <p>No {category.toLowerCase()} news found</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchNews;
