import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SportsNews.css'; // Update the CSS file name if needed

const SportsNews = () => {
    const [sportsNews, setSportsNews] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/sportsnews');
            const processedNews = processNews(response.data);
            setSportsNews(processedNews);
        } catch (error) {
            console.error('Error fetching sports news:', error);
        }
    };

    const processNews = (newsData) => {
        const today = new Date();
        const todayDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        const filteredNews = newsData.filter(news => {
            const newsDateParts = news.date.split('/').map(part => parseInt(part));
            if (newsDateParts.length === 3) {
                const [day, month, year] = newsDateParts;
                const newsDate = new Date(year, month - 1, day);
                const newsDateString = `${newsDate.getDate()}/${newsDate.getMonth() + 1}/${newsDate.getFullYear()}`;
                return newsDateString === todayDate;
            } else {
                return false; // Invalid date format
            }
        });

        return filteredNews;
    };

    return (
        <div className="container">
            <div className="card-container">
                {sportsNews.length > 0 ? (
                    sportsNews.map((news, index) => (
                        <div className="card" key={index}>
                            <h3>{news.title}</h3>
                            <p>{news.article}</p>
                            {news.image && <img src={`http://localhost:3001/${news.image}`} alt="News Image" />}
                            {news.video && (
                                <video controls>
                                    <source src={`http://localhost:3001/${news.video}`} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No sports news available for today.</p>
                )}
            </div>
        </div>
    );
};

export default SportsNews;
