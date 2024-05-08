import React from 'react';
import Weather from './Weather';
import Carouselnews from '../ShowNews/Carouselnews';
import HighNatioNews from '../HighlightNews/HighNatioNews';
import HighInterNews from '../HighlightNews/HighInterNews';
import HighEduNews from '../HighlightNews/HighEduNews';
import HighSportsNews from '../HighlightNews/HighSportsNews';
import Navbar from './Navbar';
import Footer from '../MandatoryItems/Footer.js';

const Thenewsroom = () => {
  return (
    <>
      <div>
        <Navbar/>
      </div>    
      
      <div style={{ marginTop: '0px', textAlign: 'center' }}>
          <Weather/>
       </div>

       <div style={{marginTop:'0px',textAlign:'center'}}>
        <Carouselnews/>
       </div>

       <div style={{marginTop:"40px"}}>
        <h1>INTERNATIONAL NEWS</h1>
       <HighInterNews/>
       </div>

       <div>
        <h1>NATIONAL NEWS</h1>
       <HighNatioNews/>
       </div>

       <div>
        <h1>EDUCATION NEWS</h1>
       <HighEduNews/>
       </div>

       <div>
        <h1>SPORTS NEWS</h1>
       <HighSportsNews/>
       </div>

       <div>
        <Footer/>
       </div>
       
    </>
  );
};

export default Thenewsroom;