// import React from 'react';
// import './Blog.css';
// import { Link } from 'react-router-dom';

// const Blog = () => {
//   return (
//    <>
//     <body className="blog-body">

// <header className='Header_blog'>
//   <nav class = "blog-navbar">
//     <div class = "blog-container">
//       <h3 class = "blog-navbar-brand">The NewsNest</h3>
//       <div class = "blog-navbar-nav">
//         <Link to= "Thenewsroom"  className='blog-anchor'>HOME</Link>
//       </div>
//     </div>
//   </nav>
//   <div class = "banner">
//     <div class = "container">
//       <h1 class = "banner-title">
//         <span className='banner-span'>The NewsNest </span> Blogosphere
//       </h1>
//       <p className='blog-para'>Everything that is needed to keep you updated!</p>
     
//     </div>
//   </div>
// </header>



// <section class = "design" id = "design">
//   <div class = "blog-container">
//     <div class = "design-title">
//       <h2 className='design-h2'>Our Top Genres</h2>
//       <p>recent arts & designs on the blog</p>
//     </div>

//     <div class = "design-content">
    
//       <div class = "design-item">
//         <div class = "design-img">
//           <img className='image-design' src = "Images/blog_design_img1.jpg" alt = ""/>
//           <span><i class = "far fa-heart" style={{display:'none'}}></i></span>
//           <span>The Sports Corner</span>
//         </div>
//         <div class = "design-title">
//           <a href = "#">make an awesome art portfolio for college or university</a>
//         </div>
//       </div>
      
//       <div class = "design-item">
//         <div class = "design-img">
//           <img className='image-design' src = "Images/blog_design_img2.jpg" alt = ""/>
//           <span><i class = "far fa-heart" style={{display:'none'}}></i> </span>
//           <span>The National Corner</span>
//         </div>
//         <div class = "design-title">
//           <a href = "#">make an awesome art portfolio for college or university</a>
//         </div>
//       </div>
   
//       <div class = "design-item">
//         <div class = "design-img">
//           <img className='image-design' src = "Images/blog_design_img3.jpg" alt = ""/>
//           <span><i class = "far fa-heart" style={{display:'none'}}></i> </span>
//           <span>The International Corner</span>
//         </div>
//         <div class = "design-title">
//           <a href = "#">make an awesome art portfolio for college or university</a>
//         </div>
//       </div>
      
      
//     </div>
//   </div>
// </section>



// <section class = "blog" id = "blog">
//   <div class = "blog-container">
//     <div class = "title">
//       <h2 className='blog-h2' style={{textAlign:'center'}}>Latest Blog</h2>
//       <p className='new-blog-p' style={{textAlign:'center'}}>recent blogs about art & design</p>
//     </div>
//     <div class = "blog-content">
     
//       <div class = "blog-item">
//         <div class = "blog-img">
//           <img src = "Images/blog_image1.avif" alt = ""/>
        
//         </div>
//         <div class = "blog-text">
//           <h2 style={{fontFamily:'Times New Roman' ,color:'maroon'}}>Decoding the CAA Rules: New Hope or Cause for Concern?</h2>
//           <p>The recent notification of the Citizenship Amendment Act (CAA) rules has sparked debate across India. While some hail it as a path to citizenship for persecuted minorities, others express anxieties about its potential impact. Let's delve into the key points of the CAA rules and explore the different perspectives.</p>
//           <a href = "#">Read More</a>
          
//         </div>
//       </div>
     
//       <div class = "blog-item">
//         <div class = "blog-img">
//           <img src = "Images/blog_image2.jpg" alt = ""/>
         
//         </div>
//         <div class = "blog-text">
          
//           <h2 style={{fontFamily:'Times New Roman' ,color:'maroon'}}>China's Export Engine Sputters: A Sign of Global Slowdown?</h2>
//           <p>China's recent trade data revealed a cause for concern: declining exports. After a period of strong growth, March saw a sharp 7.5% drop compared to the previous year. This slump, coupled with slowing import demand, paints a picture of a potentially sluggish Chinese economy and raises questions about the global market's health.</p>
//           <a href = "#">Read More</a>
//         </div>
//       </div>
     
//       <div class = "blog-item">
//         <div class = "blog-img">
//           <img src = "Images/blog_image3.jpg" alt = ""/>
         
//         </div>
//         <div class = "blog-text">
        
//           <h2 style={{fontFamily:'Times New Roman' ,color:'maroon'}}>The IPL Heats Up: Shocking Upsets and Familiar Rivalries</h2>
//           <p>The 17th edition of the Indian Premier League (IPL) is in full swing, bringing its electrifying brand of cricket to stadiums across India. With the home and away format back in play, the energy in the stands is palpable..</p>
//           <a href = "#">Read More</a>
//         </div>
//       </div>
      
//       <div class = "blog-item">
//         <div class = "blog-img">
//           <img src = "Images/blog_image4.jpg" alt = ""/>
         
//         </div>
//         <div class = "blog-text">
         
//           <h2 style={{fontFamily:'Times New Roman' ,color:'maroon'}}>Our Changing Climate: A Look at Global Warming</h2>
//           <p>The primary culprit behind global warming is the emission of greenhouse gases like carbon dioxide. These gases trap heat from the sun, causing the planet to warm up similarly to how a greenhouse keeps plants warm. The burning of fossil fuels for electricity, transportation, and industrial processes is a major source of these emissions.</p>
//           <a href = "#">Read More</a>
//         </div>
//       </div>
     
//       <div class = "blog-item">
//         <div class = "blog-img">
//           <img src = "Images/blog_image5.jpg" alt = ""/>
          
//         </div>
//         <div class = "blog-text">
         
//           <h2 style={{fontFamily:'Times New Roman' ,color:'maroon'}}>Artificial Intelligence: Boon or Bane?</h2>

//           <p>Artificial intelligence (AI) has become a ubiquitous term, woven into the fabric of our daily lives. From the recommendations on your favorite streaming service to the virtual assistants you chat with, AI is quietly transforming the world. But what exactly is the impact of AI, and is it a force for good or a potential threat?</p>
//           <a href = "#">Read More</a>
//         </div>
//       </div>
     
      
//       <div class = "blog-item">
//         <div class = "blog-img">
//           <img src = "Images/blog_image6.jpeg" alt = "" style={{height:'56vh'}}/>
          
//         </div>
//         <div class = "blog-text">
          
//           <h2 style={{fontFamily:'Times New Roman' ,color:'maroon'}}>A Shadow Over Europe: The War in Ukraine. </h2>
//           <p>The war in Ukraine, now grinding into its second year, casts a long shadow over Europe. What began with a full-scale Russian invasion in February 2022 has morphed into a bloody stalemate.</p>
//           <a href = "#">Read More</a>
//         </div>
//       </div>
     
//     </div>
//   </div>
// </section>







// </body>
   
//    </>
//   );
// };

// export default Blog



import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import BlogNews from '../ShowNews/Blognews';
import Footer from '../MandatoryItems/Footer';

const Blog = () => {
  return (
   <>
    <body className="blog-body">

<header className='Header_blog'>
  <nav class = "blog-navbar">
    <div class = "blog-container">
      <h3 class = "blog-navbar-brand">The NewsNest</h3>
      <div class = "blog-navbar-nav">
        <Link to= "/Thenewsroom"  className='blog-anchor'>HOME</Link>
      </div>
    </div>
  </nav>
  <div class = "banner">
    <div class = "container">
      <h1 class = "banner-title">
        <span className='banner-span'>The NewsNest </span> Blogosphere
      </h1>
      <p className='blog-para'>Everything that is needed to keep you updated!</p>
     
    </div>
  </div>
</header>



<section class = "design" id = "design">
  <div class = "blog-container">
    <div class = "design-title">
      <h2 className='design-h2'>Our Top Genres</h2>
      <p>recent arts & designs on the blog</p>
    </div>

    <div class = "design-content">
    
      <div class = "design-item">
        <div class = "design-img">
          <img className='image-design' src = "Images/blog_design_img1.jpg" alt = ""/>
          <span><i class = "far fa-heart" style={{display:'none'}}></i></span>
          <span>The Sports Corner</span>
        </div>
        <div class = "design-title">
          <a href = "#">make an awesome art portfolio for college or university</a>
        </div>
      </div>
      
      <div class = "design-item">
        <div class = "design-img">
          <img className='image-design' src = "Images/blog_design_img2.jpg" alt = ""/>
          <span><i class = "far fa-heart" style={{display:'none'}}></i> </span>
          <span>The National Corner</span>
        </div>
        <div class = "design-title">
          <a href = "#">make an awesome art portfolio for college or university</a>
        </div>
      </div>
   
      <div class = "design-item">
        <div class = "design-img">
          <img className='image-design' src = "Images/blog_design_img3.jpg" alt = ""/>
          <span><i class = "far fa-heart" style={{display:'none'}}></i> </span>
          <span>The International Corner</span>
        </div>
        <div class = "design-title">
          <a href = "#">make an awesome art portfolio for college or university</a>
        </div>
      </div>
      
      
    </div>
  </div>
</section>



<section class = "blog" id = "blog">
  <div class = "blog-container">
    <div class = "title">
      <h2 className='blog-h2' style={{textAlign:'center'}}>Latest Blog</h2>
      <p className='new-blog-p' style={{textAlign:'center'}}>recent blogs about art & design</p>
    </div>
    <div class = "blog-content" style={{display:"flex"}}>
     
      <BlogNews/>
     
    </div>
  </div>
</section>
<Footer/>







</body>
   
   </>
  );
};

export default Blog