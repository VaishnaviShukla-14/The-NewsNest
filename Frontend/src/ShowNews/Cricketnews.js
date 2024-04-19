import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SportsNews.css'; // Update the CSS file name if needed
import Navbar from '../Pages/Navbar';
import Footer from '../MandatoryItems/Footer';

const CricketNews = () => {
    const [hockeyNews, setHockeyNews] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/sportsnews');
            const processedHockeyNews = processHockeyNews(response.data);
            setHockeyNews(processedHockeyNews);
        } catch (error) {
            console.error('Error fetching sports news:', error);
        }
    };

    const processHockeyNews = (newsData) => {
        const today = new Date();
        const todayDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        const filteredHockeyNews = newsData.filter(news => {
            const newsDateParts = news.date.split('/').map(part => parseInt(part));
            if (newsDateParts.length === 3 &&  news.sport.toLowerCase() === 'cricket') { // Only hockey news
                const [day, month, year] = newsDateParts;
                const newsDate = new Date(year, month - 1, day);
                const newsDateString = `${newsDate.getDate()}/${newsDate.getMonth() + 1}/${newsDate.getFullYear()}`;
                return newsDateString === todayDate;
            } else {
                return false; // Invalid date format or not hockey news
            }
        });

        return filteredHockeyNews;
    };

    return (
        <>
        <Navbar/>
            <div className="container">
                <div className="card-container">
                    {hockeyNews.length > 0 ? (
                        hockeyNews.map((news, index) => (
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
                        <p>No cricket news available for today.</p>
                    )}
                </div>
            </div>
            <Footer/>
            </>
    );
};

export default CricketNews;
