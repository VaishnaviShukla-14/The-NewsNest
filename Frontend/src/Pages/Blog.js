
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