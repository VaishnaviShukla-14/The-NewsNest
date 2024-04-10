import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HighInterNews = () => {
    const [highlightInternationalNews, setHighlightInternationalNews] = useState([]);

    useEffect(() => {
        fetchHighlightInternationalNews();
    }, []);

    const fetchHighlightInternationalNews = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/internationalnews');
            const internationalNewsData = response.data;

            const today = new Date();
            const todayDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

            const highlightNews = internationalNewsData.filter(news => {
                // Assuming news.date is in the format "DD/MM/YYYY"
                const [day, month, year] = news.date.split('/');
                const newsDate = new Date(year, month - 1, day);
                const newsDateString = `${newsDate.getDate()}/${newsDate.getMonth() + 1}/${newsDate.getFullYear()}`;
                return news.highlight === 'highlight' && newsDateString === todayDate;
            });
            
            setHighlightInternationalNews(highlightNews);
        } catch (error) {
            console.error('Error fetching international highlight news:', error);
        }
    };

    return (
        <div className="container">
            <div className="card-container">
                {highlightInternationalNews.length > 0 ? (
                    highlightInternationalNews.map((news, index) => (
                        <Link to={{ pathname: '/InternationalNews', state: { news } }} key={index} className="card-link">
                            <div className="card">
                                <h3>{news.title}</h3>
                                {news.article.split('\n')[0].length > 100 ? (
                                    <p>{`${news.article.split('\n')[0].substring(0, 100)}...`}</p>
                                ) : (
                                    <p>{news.article.split('\n')[0]}</p>
                                )}
                                <img src={`http://localhost:3001/${news.image}`} alt="News Image" />
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="card">
                        <p>No highlight news available for today</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HighInterNews;
