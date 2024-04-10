import React from 'react';
import './Blog.css';
import Footer from '../MandatoryItems/Footer';
import BlogNews from '../ShowNews/Blognews';
import Blog_storynews from '../ShowNews/Blog_storynews';

const Blog = () => {
  return (
   <>
   <section>
    <nav>
        <div class="logo">
            <img src="Images/blog_logo.jpg"/>
        </div>
         
         <ul>
            <li><a href="#DISCOVER" style={{color:'#ff1493'}}>DISCOVER</a></li>
            <li><a href="#COMPOSE" style={{color:'#ff1493'}}>COMPOSE</a></li>
         </ul>






        
    </nav>


    <div class="main">
        <div class="men_text">
            <h1>Happy<span>Blogging</span> Bloggers!</h1>
        </div>

    <div class="main_image">
        <img src="https://i.pinimg.com/564x/b2/5a/2e/b25a2e73c7c6281db2cf5455ba34e415.jpg"/>
    </div>

    </div>


    <p className="p_blog">Welcome to our vibrant community of bloggers! We're thrilled to invite you to join us in sharing your thoughts, experiences, and passions through the power of blogging.
     Whether you're an established writer or just starting out, our platform provides the perfect space to showcase your unique voice and connect with like-minded individuals.
    Share your insights, creativity, and stories with our supportive community, and let's inspire and empower each other through the art of blogging. 
    Join us today and let your words spark conversations, ignite change, and leave a lasting impact!</p>



   </section>
    

 <div class="about" id="About">
  
  <div class="about_main">
  
  <div class="image">
  <img src="Images/about_image.jpg"/>
  </div>

  <div class="about_text">
    <h1><span>About</span>Us</h1>
    <h3>Write n Share Blogs!</h3>
    <p className="second_p">
    We believe that everyone has a story worth sharing and a perspective worth hearing.
    
    That's why we're urging you to unleash your creativity and start writing and sharing your blogs with our community.
    Your words have the power to inspire, educate, and entertain others.
    And don't forget to engage with fellow bloggers by reading, liking, and commenting on their posts.
     By supporting each other's content, we can create a vibrant and thriving community where ideas flow freely and connections are made. 
     So, let's amplify each other's voices and make our platform a hub of creativity, inspiration, and collaboration.
     Join us today and let's embark on this blogging journey together!
    </p>
  </div>

  </div>




 </div>




 <div class="menu" id="Menu">
    <h1>Our <span>Genres</span></h1>

    <div class="menu_box">
        <div class="menu_card">

          <div class="menu_image">
            <img src="Images/genre_national.jpg"/>
          </div>


          <div class="small_card">
          <i class="fa-solid fa-star"></i>
          </div>

          <div class="menu_info">
            <h2>National Corner</h2>
            <p> 
            "Welcome to national news, your source for updates on events shaping our country and the most latest stories impacting our nation."




</p>

         <div class="menu_icon">
         <i class="fa-solid fa-heart"></i>
         <i class="fa-solid fa-comment"></i>
         <i class="fa-solid fa-share"></i>
         </div>

         <a href="#" class="menu_btn">Read More</a>

          </div>



          


        </div> 



        <div class="menu_card">

          <div class="menu_image">
            <img src="Images/genre_international.jpg"/>
          </div>


          <div class="small_card">
          <i class="fa-solid fa-star"></i>
          </div>

          <div class="menu_info">
            <h2>International Corner</h2>
            <p> 
            "Stay tuned for updates from around the globe."</p>

         <div class="menu_icon">
         <i class="fa-solid fa-heart"></i>
         <i class="fa-solid fa-comment"></i>
         <i class="fa-solid fa-share"></i>
         </div>

         <a href="#" class="menu_btn">Read More</a>

          </div>



          


        </div>




        <div class="menu_card">

          <div class="menu_image">
            <img src="Images/genre_sports.jpg"/>
          </div>


          <div class="small_card">
          <i class="fa-solid fa-star"></i>
          </div>

          <div class="menu_info">
            <h2>Sports Corner</h2>
            <p> 
            "Welcome to Sports news, your global scoreboard. Stay tuned for sports stories from around the world."</p>

         <div class="menu_icon">
         <i class="fa-solid fa-heart"></i>
         <i class="fa-solid fa-comment"></i>
         <i class="fa-solid fa-share"></i>
         </div>

         <a href="#" class="menu_btn">Read More</a>

          </div>



          


        </div>





        <div class="menu_card">

          <div class="menu_image">
            <img src="Images/genre_education.jpg"/>
          </div>


          <div class="small_card">
          <i class="fa-solid fa-star"></i>
          </div>

          <div class="menu_info">
            <h2>Education Corner</h2>
            <p> 
            "Welcome to our education blog, your hub for learning insights and exploring something new!"
            </p>






         <div class="menu_icon">
         <i class="fa-solid fa-heart"></i>
         <i class="fa-solid fa-comment"></i>
         <i class="fa-solid fa-share"></i>
         </div>

         <a href="#" class="menu_btn">Read More</a>

          </div>



           


        </div>





        <div class="menu_card">

          <div class="menu_image">
            <img src="Images/genre_blog.jpg"/>
          </div>


          <div class="small_card">
          <i class="fa-solid fa-star"></i>
          </div>

          <div class="menu_info">
            <h2>Write n Explore Blogs!</h2>
            <p> 
            "Welcome to our blog section, your source for diverse insights and stories.  Happy reading!"</p>

         <div class="menu_icon">
         <i class="fa-solid fa-heart"></i>
         <i class="fa-solid fa-comment"></i>
         <i class="fa-solid fa-share"></i>
         </div>

         <a href="#" class="menu_btn">Read More</a>

          </div>






          


        </div>


        






    </div>
 </div>





<div class="gallery" id="Gallery">
  <h1>Our<span>Top Stories</span></h1>
    <Blog_storynews/>
</div>


<div class="review" id="Review">
  <h1>Discover<span>Blogs</span></h1>

  {/* <div class="review_box">
    <div class="review_card">

      <div class="review_profile">
        <img src="Images/Laksh.jpg"/>
      </div>
<div class="review_text">
  <h2 class="name" style={{fontSize:'25px',color:'#ff1493'}}>Discovering Lakshadweep: A Tropical Paradise</h2>

  <br/>

  <div class="review_icon">
  <i class="fa-regular fa-heart" style={{fontSize:'20px'}}></i>&nbsp;
  <i class="fa-regular fa-comment" style={{fontSize:'20px'}}></i>&nbsp;
  <i class="fa-solid fa-share" style={{fontSize:'20px'}}></i>&nbsp;
  </div>

  

  <p>Lakshadweep, an archipelago of stunning islands in the Arabian Sea, offers an unparalleled exploration experience. With pristine beaches, vibrant marine life, it's a destination like no other.</p>

  

</div>


    </div>
    


    <div class="review_card">

<div class="review_profile">
  <img src="Images/CAA.jpg"/>
</div>
<div class="review_text">
<h2 class="name" style={{fontSize:'25px',color:'#ff1493'}}>
CAA: Fast Track Citizenship in India</h2>

<br/>

<div class="review_icon">
<i class="fa-regular fa-heart" style={{fontSize:'20px'}}></i>&nbsp;
<i class="fa-regular fa-comment" style={{fontSize:'20px'}}></i>&nbsp;
<i class="fa-solid fa-share" style={{fontSize:'20px'}}></i>&nbsp;
</div>



<p>India's CAA speeds up citizenship for refugees facing religious persecution in Afghanistan, Pakistan, and Bangladesh. It applies to Hindus, Sikhs, Jains, Christians etc who arrived before 2014. But this exclusion of Muslims has sparked debate. What are your thoughts?</p>



</div>


</div>




<div class="review_card">

<div class="review_profile">
  <img src="Images/cskrcb.jpg"/>
</div>
<div class="review_text">
<h2 class="name" style={{fontSize:'25px',color:'#ff1493'}}>IPL Fever Grips Fans: RCB & CSK Set for Blockbuster Opener!</h2>

<br/>

<div class="review_icon">
<i class="fa-regular fa-heart" style={{fontSize:'20px'}}></i>&nbsp;
<i class="fa-regular fa-comment" style={{fontSize:'20px'}}></i>&nbsp;
<i class="fa-solid fa-share" style={{fontSize:'20px'}}></i>&nbsp;
</div>



<p>Can Faf du Plessis lead RCB to their first title, or will MS Dhoni script another fairytale with CSK? Don't miss this high-voltage clash! #IPL2024 #RCBvCSK #22ndMarch'24</p>



</div>


</div>




<div class="review_card">

<div class="review_profile">
  <img src="Images/petrol.jpg"/>
</div>
<div class="review_text">
<h2 class="name" style={{fontSize:'25px',color:'#ff1493'}}>Pump Prices Dip! Petrol and Diesel See Slight Price Cut</h2>

<br/>

<div class="review_icon">
<i class="fa-regular fa-heart" style={{fontSize:'20px'}}></i>&nbsp;
<i class="fa-regular fa-comment" style={{fontSize:'20px'}}></i>&nbsp;
<i class="fa-solid fa-share" style={{fontSize:'20px'}}></i>&nbsp;
</div>



<p>There's a bit of relief at the pump! Petrol and Diesel prices across India have been reduced by Rs 2. Will this small decrease offer a welcome break for drivers facing rising fuel costs?</p>



</div>


</div> */}








  {/* </div> */}

  <BlogNews/>
</div>













 







 
   
   
   
   
   <div>
   <Footer/>
   </div>
   </>
  )
}

export default Blog