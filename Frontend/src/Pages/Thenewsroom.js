import React from 'react';
import './Thenewsroom.css';
import Weather from './Weather';
import Carouselnews from '../ShowNews/Carouselnews';
import HighNatioNews from '../HighlightNews/HighNatioNews';
import HighInterNews from '../HighlightNews/HighInterNews';
import HighEduNews from '../HighlightNews/HighEduNews';
import HighSportsNews from '../HighlightNews/HighSportsNews';
import { Link } from 'react-router-dom';

const Thenewsroom = () => {
  return (
    <>

      <section className="news-section">
        <nav className="news-nav" style={{backgroundColor:'#dcdcdc'}}>
          <div className="newslogo">
      
            <div className="logo-and-text-container" style={{ display: 'flex', alignItems: 'center',justifyContent:'center',marginRight:'70px',marginTop:'2px' }}>
            
              <div className="the-text" style={{fontFamily:'Times New Roman',fontSize:'60px',fontWeight:'550',marginRight:'-50px',marginBottom:'70px',textAlign: 'center'}}>THE</div>
             
              <img className="newslogoimage" src="Images/nest_logo.png" style={{ width: '250px', margin: '0 1px'}} />
             
              <div className="nest-text" style={{fontFamily:'Times New Roman',fontWeight:'550',fontSize:'60px',marginLeft:'-50px',marginBottom:'70px',textAlign: 'center'}}>NEST</div>
                
              </div>
              <div className="navigation-division">
              <ul className="nav-options"> 
                <li style={{fontFamily:'Times New Roman',fontSize:'18px',fontWeight:'bold'}} ><Link to="/internationalnews">INTERNATIONAL</Link></li>
                <li style={{fontFamily:'Times New Roman',fontSize:'18px',fontWeight:'bold'}} ><Link to="/nationalnews">NATIONAL</Link></li>
                <li style={{fontFamily:'Times New Roman',fontSize:'18px',fontWeight:'bold'}} ><Link to="/educationalnews">EDUCATION</Link></li>
                <li style={{fontFamily:'Times New Roman',fontSize:'18px',fontWeight:'bold'}}><Link to="/sportsnews">SPORTS</Link></li>
                <li style={{fontFamily:'Times New Roman',fontSize:'18px',fontWeight:'bold'}}><Link to="/Blog">BLOGS</Link></li>
              </ul>
              </div>

            </div>

            
         
        </nav>


      </section>

      
      <div style={{ marginTop: '300px', textAlign: 'center' }}>
          <Weather/>
       </div>

       <div style={{marginTop:'0px',textAlign:'center'}}>
        <Carouselnews/>
       </div>

       <div>
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

    </>
  );
};

export default Thenewsroom;