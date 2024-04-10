import * as React from 'react';
import '../index.css';
import Appbar from '../MandatoryItems/Appbar';
import SubAppBar from '../MandatoryItems/SubAppBar';
import Footer from '../MandatoryItems/Footer';
import Weather from './Weather';
import Slider from '../ShowNews/Carouselnews';
import Nationalnews from '../ShowNews/NationalNews';
import Internationalnews from '../ShowNews/Internationalnews';
import Educationalnews from '../ShowNews/Educationalnews';
import Sportnews from '../ShowNews/Sportsnews';


const MainPage = () => {
  return (
    <>
    <div>
      <div className="Container" >
        <Appbar />
      </div>
      <div className="Container" >
        <SubAppBar />
      </div>
      <div className='Container'> 
        <Weather/>
      </div>
      <div className="Container_3" >
        <div>
          <Slider/>
        </div>
      </div>
      <div><h1 style={{color: '#000',fontFamily:'Times New Roman',fontWeight:'500',textAlign:'center'}}>National News</h1>
        <div>

<Nationalnews/>
        </div>
        <h1 style={{color: '#000',fontFamily:'Times New Roman',fontWeight:'500',textAlign:'center'}}>International News</h1>
        <div>
          <Internationalnews/>
        </div>
        <h1 style={{color: '#000',fontFamily:'Times New Roman',fontWeight:'500',textAlign:'center'}}>Educational News</h1>
        <div>
          <Educationalnews/>
        </div>
        <h1 style={{color: '#000',fontFamily:'Times New Roman',fontWeight:'500',textAlign:'center'}}>Sports News</h1>
        <div>
          <Sportnews/>
        </div>
      </div>
      <div className='container_4'>
        <Footer />
      </div>
      </div>
    </>
  );
};

export default MainPage;
