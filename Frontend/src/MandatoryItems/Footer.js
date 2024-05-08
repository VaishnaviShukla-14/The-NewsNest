import React from 'react';
import './Footer.css';
import FooterCarousel from './FooterCarousel';
import SearchNews from '../ShowNews/SearchNews';

const Footer = () => {
  return (
  <>
  <section className='footer_section'>
  <footer class="footer">

          <div className="flex-container">
            <div className="left-div">
              <ul class="menu_footer">
                <li class="menu_item"><a class="menu_link" href="/" style={{textDecoration:'none'}}>Home</a></li><br/><br/>
                <li class="menu_item"><a class="menu_link" href="/searchnews" style={{textDecoration:'none'}}>Search News</a></li><br/><br/>
                <li class="menu_item"><a class="menu_link" href="#" style={{textDecoration:'none'}}>Contact us</a></li>
                <ul className="email-list">
                  <li><a  class="menu_link"href="mailto:vaishnavi14shukla@gmail.com" style={{textDecoration:'none'}}>vaishnavi14shukla@gmail.com</a></li>
                  <li><a class="menu_link" href="mailto:pranatikaushik05@gmail.com" style={{textDecoration:'none'}}>pranatikaushik05@gmail.com</a></li>
                </ul><br/><br/>
                <li class="menu_item"><a class="menu_link" href="/newlogin" style={{textDecoration:'none'}}>Dashboard</a></li><br/><br/>
            </ul>
            </div>
            <div className="right-div">
              <div className='Carousel_footer'><FooterCarousel/></div>
            </div>
          </div>
    <p className="p_footer">&copy;2024 The NewsNest | All Rights Reserved</p>
  </footer>

</section>
  </>
  );
};

export default Footer;