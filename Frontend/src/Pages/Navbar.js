
import React, { useState } from 'react';
import './Thenewsroom.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showSportsLinks, setShowSportsLinks] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const handleSportsClick = () => {
        setShowSportsLinks(!showSportsLinks);
    };

    const handleProfileClick = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    return (
      <>
        <div>
            <section className="news-section">
                <nav className="news-nav" style={{ backgroundColor: '#dcdcdc' }}>
                    <div className="newslogo" style={{height:'312px'}}>
                        <div className="logo-and-text-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '70px', marginTop: '2px' }}>
                            <div className="the-text" style={{ fontFamily: 'Times New Roman', fontSize: '60px', fontWeight: '550', marginRight: '-50px', marginBottom: '70px', textAlign: 'center' }}>THE</div>
                            <img className="newslogoimage" src="Images/nest_logo.png" style={{ width: '250px', margin: '0 1px' }} />
                            <div className="nest-text" style={{ fontFamily: 'Times New Roman', fontWeight: '550', fontSize: '60px', marginLeft: '-50px', marginBottom: '70px', textAlign: 'center' }}>NEST</div>
                        </div>
                        <div className="navigation-division">
                            <ul className="nav-options">
                                <li style={{ fontFamily: 'Times New Roman', fontSize: '18px', fontWeight: 'bold'}}><Link to="/internationalnews" style={{color:'black'}}>INTERNATIONAL</Link></li>
                                <li style={{ fontFamily: 'Times New Roman', fontSize: '18px', fontWeight: 'bold'}}><Link to="/nationalnews" style={{color:'black'}}>NATIONAL</Link></li>
                                <li style={{ fontFamily: 'Times New Roman', fontSize: '18px', fontWeight: 'bold'}}><Link to="/educationalnews" style={{color:'black'}}>EDUCATION</Link></li>
                                <li style={{ fontFamily: 'Times New Roman', fontSize: '18px', fontWeight: 'bold'}}>
                                    <span onClick={handleSportsClick} style={{ cursor: 'pointer' , color:'black' }}><Link to='/sportsnews' style={{color:'black'}}>SPORTS</Link></span><br/><br/>
                                    {showSportsLinks && (
                                        <ul className="sports-options">
                                            <li><Link to="/cricket" style={{color:'black'}}>Cricket</Link></li>
                                            <li><Link to="/football" style={{color:'black'}}>Football</Link></li>
                                            <li><Link to="/hockey" style={{color:'black'}}>Hockey</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li style={{ fontFamily: 'Times New Roman', fontSize: '18px', fontWeight: 'bold' }}><Link to="/Blog" style={{color:'black'}}>BLOGS</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
      </>
    )
}

export default Navbar;

