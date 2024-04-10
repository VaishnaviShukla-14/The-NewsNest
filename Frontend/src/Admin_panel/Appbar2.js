// import React from 'react';
// import './Appbar2.css';
// import ResponsiveAppBar from './ActionButton';

// const Appbar2 = () => {
//   return (
//     <>

//       <section className="news-section">
//         <nav className="news-nav" style={{backgroundColor:'#dcdcdc'}}>
//           <div className="newslogo">
      
//             <div className="logo-and-text-container" style={{ display: 'flex', alignItems: 'center',justifyContent:'center',marginRight:'70px',marginTop:'2px' }}>
            
//               <div className="the-text" style={{fontFamily:'Times New Roman',fontSize:'60px',fontWeight:'550',marginRight:'-50px',marginBottom:'70px',textAlign: 'center'}}>THE</div>
             
//               <img className="newslogoimage" src="Images/nest_logo.png" style={{ width: '250px', margin: '0 1px'}} />
             
//               <div className="nest-text" style={{fontFamily:'Times New Roman',fontWeight:'550',fontSize:'60px',marginLeft:'-50px',marginBottom:'70px',textAlign: 'center'}}>NEST</div>
                
//               </div>
//               <div className="navigation-division">
//               <ul className="nav-options"> 
//                 <li style={{fontFamily:'Times New Roman',fontSize:'18px',fontWeight:'bold'}} >NATIONAL</li>
//                 <li style={{fontFamily:'Times New Roman',fontSize:'18px',fontWeight:'bold'}} >INTERNATIONAL</li>
//                 <li style={{fontFamily:'Times New Roman',fontSize:'18px',fontWeight:'bold'}} >SPORTS</li>
//                 <li style={{fontFamily:'Times New Roman',fontSize:'18px',fontWeight:'bold'}}>EDUCATIONAL</li>
//                 <li style={{fontFamily:'Times New Roman',fontSize:'18px',fontWeight:'bold'}}>BLOGS</li>
//                 <li style={{fontFamily:'Times New Roman',fontSize:'18px',fontWeight:'bold'}}>BLOG_STORY</li>
//                 <li style={{fontFamily:'Times New Roman',fontSize:'18px',fontWeight:'bold'}}>CAROUSEL</li>
//               </ul>
//               </div>

//             </div>

            
         
//         </nav>


//       </section>

      
   
      

//     </>
//   );
// };

// export default Appbar2;

import React from 'react';
import './Appbar2.css';
import ResponsiveAppBar from './ActionButton';


const Appbar2 = () => {
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
                {/* <ResponsiveAppBar/> */}
              </ul>
              </div>

            </div>

            
         
        </nav>


      </section>

      
   
      

    </>
  );
};

export default Appbar2;