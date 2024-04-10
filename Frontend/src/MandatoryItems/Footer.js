import React from 'react';

import './Footer.css';
import FooterCarousel from './FooterCarousel';
import { IoBodySharp } from 'react-icons/io5';







const Footer = () => {
  return (
   <>
   
   
   <section className='footer_section'>

  <footer class="footer">
    <ul class="menu_footer">
      <li class="menu_item"><a class="menu_link" href="#" style={{textDecoration:'none'}}>Home</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      <li class="menu_item"><a class="menu_link" href="#" style={{textDecoration:'none'}}>About</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <li class="menu_item"><a class="menu_link" href="#" style={{textDecoration:'none'}} >Services</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      <li class="menu_item"><a class="menu_link" href="#" style={{textDecoration:'none'}}>Contact</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    </ul>
    <p className="p_footer">&copy;2024 The NewsNest | All Rights Reserved</p>
  </footer>

</section>
   
   
   
   
   
   
   </>
  );
};

export default Footer;