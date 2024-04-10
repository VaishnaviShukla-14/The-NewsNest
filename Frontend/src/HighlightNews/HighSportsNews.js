import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HighNatioNews = () => {
    const [nationalHighlightNews, setNationalHighlightNews] = useState([]);

    useEffect(() => {
        const fetchNationalHighlightNews = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/sportsnews');
                const newsData = response.data;

                const today = new Date();
                const todayDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

                const highlightNews = newsData.filter(news => {
                    // Assuming news.date is in the format "DD/MM/YYYY"
                    const [day, month, year] = news.date.split('/');
                    const newsDate = new Date(year, month - 1, day);
                    const newsDateString = `${newsDate.getDate()}/${newsDate.getMonth() + 1}/${newsDate.getFullYear()}`;
                    return news.highlight === 'highlight' && newsDateString === todayDate;
                });
                
                setNationalHighlightNews(highlightNews);
            } catch (error) {
                console.error('Error fetching sports highlight news:', error);
            }
        };

        fetchNationalHighlightNews();
    }, []);
    
    return (
        <div className="container">
            <div className="card-container">
                {nationalHighlightNews.length > 0 ? (
                    nationalHighlightNews.map((news, index) => (
                        <Link to={{ pathname: '/SportsNews', state: { news } }} key={index} className="card-link">
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

export default HighNatioNews;
