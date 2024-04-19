// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './Nationalnews.css';
// import Navbar from '../Pages/Navbar';
// import Footer from '../MandatoryItems/Footer';

// const InternationalNews = () => {
//     const [internationalNews, setInternationalNews] = useState([]);

//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/internationalnews');
//                 const processedNews = processNews(response.data);
//                 setInternationalNews(processedNews);
//             } catch (error) {
//                 console.error('Error fetching international news:', error);
//             }
//         };

//         fetchNews();

//         // Set timer to fetch news periodically
//         const interval = setInterval(fetchNews, 24 * 60 * 60 * 1000);
//         return () => clearInterval(interval);
//     }, []);

//     // Function to process news data
//     const processNews = (newsData) => {
//         const today = new Date();
//         const todayDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

//         console.log('Today Date:', todayDate); // Log today's date for debugging

//         const filteredNews = newsData.filter(news => {
//             const newsDateParts = news.date.split('/').map(part => parseInt(part)); // Parse date string parts
//             if (newsDateParts.length === 3) {
//                 const [day, month, year] = newsDateParts;
//                 const newsDate = new Date(year, month - 1, day); // Construct date object
//                 const newsDateString = `${newsDate.getDate()}/${newsDate.getMonth() + 1}/${newsDate.getFullYear()}`;
//                 console.log('News Date:', newsDateString); // Log the news date for debugging
//                 return newsDateString === todayDate;
//             } else {
//                 return false; // Invalid date format
//             }
//         });

//         console.log('Filtered News:', filteredNews); // Log the filtered news for debugging

//         return filteredNews;
//     };

//     return (
//         <>
//         <Navbar/>
//             <div className="container">
//                 <div className="card-container">
//                     {internationalNews.length > 0 ? (
//                         internationalNews.map((news, index) => (
//                             <div className="card" key={index}>
//                                 <h3>{news.title}</h3>
//                                 <p>{news.article}</p>
//                                 {news.image && <img src={`http://localhost:3001/${news.image}`} alt="News Image" />}
//                                 {news.video && (
//                                     <video controls>
//                                         <source src={`http://localhost:3001/${news.video}`} type="video/mp4" />
//                                         Your browser does not support the video tag.
//                                     </video>
//                                 )}
//                                 <p>Highlight: {news.highlight}</p>
//                                 <p>Date: {news.date}</p>
//                                 <p>Name: {news.name}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No international news available for today.</p>
//                     )}
//                 </div>
//             </div>
//             <Footer/>
//             </>
//     );
// };

// export default InternationalNews;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Nationalnews.css';
import Navbar from '../Pages/Navbar';
import Footer from '../MandatoryItems/Footer';

const InternationalNews = () => {
    const [nationalNews, setNationalNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/internationalnews');
                const processedNews = processNews(response.data);
                setNationalNews(processedNews);
            } catch (error) {
                console.error('Error fetching national news:', error);
            }
        };

        fetchNews();

        // Set timer to fetch news periodically
        const interval = setInterval(fetchNews, 24 * 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    // Function to process news data
    const processNews = (newsData) => {
        const today = new Date();
        const todayDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        console.log('Today Date:', todayDate); // Log today's date for debugging

        const filteredNews = newsData.filter(news => {
            const newsDateParts = news.date.split('/').map(part => parseInt(part)); // Parse date string parts
            if (newsDateParts.length === 3) {
                const [day, month, year] = newsDateParts;
                const newsDate = new Date(year, month - 1, day); // Construct date object
                const newsDateString = `${newsDate.getDate()}/${newsDate.getMonth() + 1}/${newsDate.getFullYear()}`;
                console.log('News Date:', newsDateString); // Log the news date for debugging
                return newsDateString === todayDate;
            } else {
                return false; // Invalid date format
            }
        });

        console.log('Filtered News:', filteredNews); // Log the filtered news for debugging

        return filteredNews;
    };

    return (
        <>
            <Navbar />
            <div className="container" style={{margin:"3% 2% 3% 8%"}}>
                {nationalNews.length > 0 ? (
                    nationalNews.map((news, index) => (
                        <div className="news-item" key={index}>
                            <h3>{news.title}</h3>
                            {news.image && (
                                <img className="news-image" src={`http://localhost:3001/${news.image}`} alt="News Image" />
                                
                            )}
                            {news.video && (
                                <div className="video-container">
                                    <video controls className="news-video">
                                        <source src={`http://localhost:3001/${news.video}`} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}
                            
                            <p>{news.article}</p>
                        </div>
                    ))
                ) : (
                    <p>No International news available for today.</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default InternationalNews;

