const EducationForm = require('../models/education.models');
const NationalForm = require('../models/national.models');
const InternationalForm  = require('../models/international.models');
const SportsForm = require('../models/sports.models');
const Blog = require('../models/blog.models');
const Blog_Story = require('../models/Blog_story.models');
const Carousel = require('../models/Carousel.models');
const Comment = require('../models/comment.models');
const Blog_like = require('../models/Blog_Like.models');

const Blog_Likes = async (req, res) => {
  const { blogId } = req.params;
  const { name } = req.body;
  try {
    let blog = await Blog_like.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // Check if the user has already disliked the blog
    if (blog.dislikedBy.includes(name)) {
      // If the user has previously disliked, decrement the dislike count
      blog.dislikes -= 1;
      // Remove the user from the dislikedBy array
      blog.dislikedBy = blog.dislikedBy.filter(user => user !== name);
    }

    // Check if the user has already liked the blog
    if (!blog.likedBy.includes(name)) {
      // Increment the like count and add user to the likedBy array
      blog.likes += 1;
      blog.likedBy.push(name);
    }

    await blog.save();

    res.json({ message: 'Blog liked successfully', likes: blog.likes });
  } catch (error) {
    console.error('Error liking blog:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const Blog_Dislike = async (req, res) => {
  const { blogId } = req.params;
  const { name } = req.body;
  try {
    let blog = await Blog_like.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // Check if the user has already liked the blog
    if (blog.likedBy.includes(name)) {
      // If the user has previously liked, decrement the like count
      blog.likes -= 1;
      // Remove the user from the likedBy array
      blog.likedBy = blog.likedBy.filter(user => user !== name);
    }

    // Check if the user has already disliked the blog
    if (!blog.dislikedBy.includes(name)) {
      // Increment the dislike count and add user to the dislikedBy array
      blog.dislikes += 1;
      blog.dislikedBy.push(name);
    }

    await blog.save();

    res.json({ message: 'Blog disliked successfully', dislikes: blog.dislikes });
  } catch (error) {
    console.error('Error disliking blog:', error);
    res.status(500).json({ error: 'Server error' });
  }
};




// POST a new comment
const CommentForm = async (req, res) => {
  const { name, comment } = req.body;
  try {
    const newComment = new Comment({
      name,
      comment,
      createdAt: new Date()
    });
    await newComment.save();
    res.status(201).json({ message: 'Comment added successfully', comment: newComment });
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// GET all comments
const getcomment = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const BlogForm = async (req, res) => {
  try {
    const { title, article, name } = req.body;
    
    // Use current date and time
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    let image = '';
    let video = '';

    // Check if image file is provided
    if (req.files["image"]) {
      image = req.files["image"][0].path; // Get the path of the uploaded image
    }

    // Check if video file is provided
    if (req.files["video"]) {
      video = req.files["video"][0].path; // Get the path of the uploaded video
    }

    const newBlogPost = new Blog({
      title,
      article,
      name,
      date: formattedDate, // Save formatted date
      time: formattedTime, // Save formatted time
      image,
      video,
    });

    const savedPost = await newBlogPost.save();

    res.status(201).json({ message: 'Blog post created successfully', post: savedPost });
  } catch (error) {
    console.error('Error creating blog post', error);
    res.status(500).json({ message: 'Error creating blog post' });
  }
};

const getBlog = async (req, res) => {
  try {
    const blogPosts = await Blog.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts", error);
    res.status(500).json({ message: "Error fetching blog posts" });
  }
};


const Blog_StoryForm = async (req, res) => {
  try {
    const { title, article, name } = req.body;

    // Use current date and time
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    let image = '';
    let video = '';

    // Check if image file is provided
    if (req.files["image"]) {
      image = req.files["image"][0].path; // Get the path of the uploaded image
    }

    // Check if video file is provided
    if (req.files["video"]) {
      video = req.files["video"][0].path; // Get the path of the uploaded video
    }

    const newBlogPost = new Blog_Story({
      title,
      article,
      name,
      date: formattedDate, // Save formatted date
      time: formattedTime, // Save formatted time
      image,
      video,
    });

    const savedPost = await newBlogPost.save();

    res.status(201).json({ message: 'Blog post created successfully', post: savedPost });
  } catch (error) {
    console.error('Error creating blog post', error);
    res.status(500).json({ message: 'Error creating blog post' });
  }
};

const getBlog_Story = async (req, res) => {
  try {
    const blogPosts = await Blog_Story.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts", error);
    res.status(500).json({ message: "Error fetching blog posts" });
  }
};

const CarouselForm = async (req, res) => {
  try {
    const { title, article, name } = req.body;

    // Use current date and time
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    let image = '';
    let video = '';

    // Check if image file is provided
    if (req.files["image"]) {
      image = req.files["image"][0].path; // Get the path of the uploaded image
    }

    // Check if video file is provided
    if (req.files["video"]) {
      video = req.files["video"][0].path; // Get the path of the uploaded video
    }

    const newBlogPost = new Carousel({
      title,
      article,
      name,
      date: formattedDate, // Save formatted date
      time: formattedTime, // Save formatted time
      image,
      video,
    });

    const savedPost = await newBlogPost.save();

    res.status(201).json({ message: 'Blog post created successfully', post: savedPost });
  } catch (error) {
    console.error('Error creating blog post', error);
    res.status(500).json({ message: 'Error creating blog post' });
  }
};

const getCarousel = async (req, res) => {
  try {
    const blogPosts = await Blog.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts", error);
    res.status(500).json({ message: "Error fetching blog posts" });
  }
};

const educationform = async (req, res) => {
  try {
    const { name, title, article, highlight } = req.body;
    const { date, time } = req.body;
    let image = null;
    let video = null;

    // Check if image file is uploaded
    if (req.files && req.files["image"] && req.files["image"].length > 0) {
      image = req.files["image"][0].path;
    }

    // Check if video file is uploaded
    if (req.files && req.files["video"] && req.files["video"].length > 0) {
      video = req.files["video"][0].path;
    }

    // Format date in "dd/mm/yyyy" format
    const [day, month, year] = date.split('/');
    const formattedDate = `${day}/${month}/${year}`;

    const newEducationForm = new EducationForm({
      title,
      article,
      highlight,
      name,
      date: formattedDate,
      time,
      image,
      video,
    });

    const savedForm = await newEducationForm.save();

    res.status(201).json({ message: 'Education form created successfully', form: savedForm });
  } catch (error) {
    console.error('Error creating education form', error);
    res.status(500).json({ message: 'Error creating education form' });
  }
};

const getEducationNews = async (req, res) => {
  try {
    const educationForms = await EducationForm.find();
    res.status(200).json(educationForms);
  } catch (error) {
    console.error("Error fetching education forms", error);
    res.status(500).json({ message: "Error fetching education forms" });
  }
};

const internationalform = async (req, res) => {
  try {
    const { name, title, article, highlight } = req.body;
    const { date, time } = req.body;
    let image = null;
    let video = null;

    // Check if image file is uploaded
    if (req.files && req.files["image"] && req.files["image"].length > 0) {
      image = req.files["image"][0].path;
    }

    // Check if video file is uploaded
    if (req.files && req.files["video"] && req.files["video"].length > 0) {
      video = req.files["video"][0].path;
    }

    // Format date in "dd/mm/yyyy" format
    const [day, month, year] = date.split('/');
    const formattedDate = `${day}/${month}/${year}`;

    const newNews = new InternationalForm({
      title,
      article,
      highlight,
      name,
      date: formattedDate,
      time,
      image,
      video,
    });

    await newNews.save();

    res.status(201).json({ message: "International news created successfully", news: newNews });
  } catch (error) {
    console.error("Error creating international news", error);
    res.status(500).json({ message: "Error creating international news" });
  }
};

const getInternationalNews = async (req, res) => {
  try {
    const internationalNews = await InternationalForm.find();
    res.status(200).json(internationalNews);
  } catch (error) {
    console.error("Error fetching international news", error);
    res.status(500).json({ message: "Error fetching international news" });
  }
};

const nationalform = async (req, res) => {
  try {
    const { name, title, article, highlight } = req.body;
    const { date, time } = req.body;
    let image = null;
    let video = null;

    // Check if image file is uploaded
    if (req.files && req.files["image"] && req.files["image"].length > 0) {
      image = req.files["image"][0].path;
    }

    // Check if video file is uploaded
    if (req.files && req.files["video"] && req.files["video"].length > 0) {
      video = req.files["video"][0].path;
    }

    // Format date in "dd/mm/yyyy" format
    const [day, month, year] = date.split('/');
    const formattedDate = `${day}/${month}/${year}`;

    const newNews = new NationalForm({
      title,
      article,
      highlight,
      name,
      date: formattedDate,
      time,
      image,
      video,
    });

    await newNews.save();

    res.status(201).json({ message: "National news created successfully", news: newNews });
  } catch (error) {
    console.error("Error creating national news", error);
    res.status(500).json({ message: "Error creating national news" });
  }
};

const getNationalNews = async (req, res) => {
  try {
    const nationalNews = await NationalForm.find();
    res.status(200).json(nationalNews);
  } catch (error) {
    console.error("Error fetching national news", error);
    res.status(500).json({ message: "Error fetching national news" });
  }
};

const sportsform = async (req, res) => {
  try {
    const { title, article, highlight, sport, name, date, time } = req.body;
    let image = null;
    let video = null;

    // Convert date and time strings to Date objects
    const [day, month, year] = date.split('/'); // Assuming date is in "dd/mm/yyyy" format
    const formattedDate = `${day}/${month}/${year}`;

    // Check if image file is uploaded
    if (req.files && req.files["image"] && req.files["image"].length > 0) {
      image = req.files["image"][0].path;
    }

    // Check if video file is uploaded
    if (req.files && req.files["video"] && req.files["video"].length > 0) {
      video = req.files["video"][0].path;
    }

    const newNews = new SportsForm({
      title,
      article,
      highlight,
      sport,
      date: formattedDate,
      time,
      name,
      image,
      video,
    });

    await newNews.save();

    res.status(201).json({ message: 'Sports form created successfully', news: newNews });
  } catch (error) {
    console.error('Error creating sports form', error);
    res.status(500).json({ message: 'Error creating sports form' });
  }
};

const getSportsNews = async (req, res) => {
  try {
    const sportsNews = await SportsForm.find();
    res.status(200).json(sportsNews);
  } catch (error) {
    console.error("Error fetching sports forms", error);
    res.status(500).json({ message: "Error fetching sports forms" });
  }
};


const deleteInternationalNews = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete international news with title: ${title}`);

    const deletedNews = await InternationalForm.findOneAndDelete({ title });

    if (deletedNews) {
      console.log(`International news with title ${title} deleted successfully`);
      return res.status(200).json({ message: "International news deleted" });
    } else {
      console.log(`International news with title ${title} not found`);
      return res.status(404).json({ message: "International news not found" });
    }
  } catch (error) {
    console.error(`Error deleting international news with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const deleteNationalNews = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete national news with title: ${title}`);

    const deletedNews = await NationalForm.findOneAndDelete({ title });

    if (deletedNews) {
      console.log(`National news with title ${title} deleted successfully`);
      return res.status(200).json({ message: "National news deleted" });
    } else {
      console.log(`National news with title ${title} not found`);
      return res.status(404).json({ message: "National news not found" });
    }
  } catch (error) {
    console.error(`Error deleting national news with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const deleteEducationNews = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete education news with title: ${title}`);

    const deletedNews = await EducationForm.findOneAndDelete({ title });

    if (deletedNews) {
      console.log(`Education news with title ${title} deleted successfully`);
      return res.status(200).json({ message: "Education news deleted" });
    } else {
      console.log(`Education news with title ${title} not found`);
      return res.status(404).json({ message: "Education news not found" });
    }
  } catch (error) {
    console.error(`Error deleting education news with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const deleteSportsNews = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete sports news with title: ${title}`);

    const deletedNews = await SportsForm.findOneAndDelete({ title });

    if (deletedNews) {
      console.log(`Sports news with title ${title} deleted successfully`);
      return res.status(200).json({ message: "Sports news deleted" });
    } else {
      console.log(`Sports news with title ${title} not found`);
      return res.status(404).json({ message: "Sports news not found" });
    }
  } catch (error) {
    console.error(`Error deleting sports news with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete blog post with title: ${title}`);

    const deletedPost = await Blog.findOneAndDelete({ title }); // Assuming the model name is Blog

    if (deletedPost) {
      console.log(`Blog post with title ${title} deleted successfully`);
      return res.status(200).json({ message: "Blog post deleted" });
    } else {
      console.log(`Blog post with title ${title} not found`);
      return res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    console.error(`Error deleting blog post with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const deleteBlog_Story = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete blog post with title: ${title}`);

    const deletedPost = await Blog.findOneAndDelete({ title }); // Assuming the model name is Blog

    if (deletedPost) {
      console.log(`Blog post with title ${title} deleted successfully`);
      return res.status(200).json({ message: "Blog post deleted" });
    } else {
      console.log(`Blog post with title ${title} not found`);
      return res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    console.error(`Error deleting blog post with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const deleteCarousel = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete carousel item with title: ${title}`);

    const deletedCarouselItem = await Carousel.findOneAndDelete({ title });

    if (deletedCarouselItem) {
      console.log(`Carousel item with title ${title} deleted successfully`);
      return res.status(200).json({ message: "Carousel item deleted" });
    } else {
      console.log(`Carousel item with title ${title} not found`);
      return res.status(404).json({ message: "Carousel item not found" });
    }
  } catch (error) {
    console.error(`Error deleting carousel item with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const deleteComment = async (req, res) => {
  const commentId = req.params.id;
  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// const searchNews = async (req, res) => {
//   try {
//     // Ensure that either date or title parameter is provided
//     if (!req.query.date && !req.query.title) {
//       return res.status(400).json({ error: "Please provide a date or title parameter for the search" });
//     }

//     // Parse the provided date
//     const searchDate = req.query.date ? new Date(req.query.date) : null;
//     const title = req.query.title || ''; // Get the title parameter from the query, default to empty string if not provided

//     // Define the query to search by both date and title
//     const query = {};

//     if (searchDate) {
//       query.createdAt = { $gte: searchDate, $lt: new Date(searchDate.getTime() + 86400000) }; // Search by date range
//     }

//     // If title is provided, add it to the query for title-wise search
//     if (title) {
//       query.title = { $regex: new RegExp(title, 'i') }; // Case-insensitive title search
//     }

//     // Find NationalForms based on the query
//     const nationalNews = await NationalForm.find(query);
//     const internationalNews = await InternationalForm.find(query);
//     const sportsNews = await SportsForm.find(query);
//     const educationNews = await EducationForm.find(query);

//     console.log('Search results:', {
//             nationalNews,
//             internationalNews,
//             sportsNews,
//             educationNews
//           });

//           const searchResults = {
//                   nationalNews,
//                   internationalNews,
//                   sportsNews,
//                   educationNews
//                 };

//                 const totalNewsCount = nationalNews.length + internationalNews.length + sportsNews.length + educationNews.length;
//     if (totalNewsCount === 0) {
//       console.log('No news found matching the search criteria');
//       return res.status(404).json({ message: "No news found matching the search criteria" });
//     }

//     res.json(searchResults);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const searchNews = async (req, res) => {
  try {
    // Ensure that either date or title parameter is provided
    if (!req.query.date && !req.query.title) {
      return res.status(400).json({ error: "Please provide a date or title parameter for the search" });
    }

    // Parse the provided date
    const searchDate = req.query.date ? new Date(req.query.date) : null;
    const title = req.query.title || ''; // Get the title parameter from the query, default to empty string if not provided

    // Define the query to search by both date and title
    const query = {};

    if (searchDate) {
      query.createdAt = { $gte: searchDate, $lt: new Date(searchDate.getTime() + 86400000) }; // Search by date range
    }

    // If title is provided, add it to the query for title-wise search
    if (title) {
      query.title = { $regex: new RegExp(title, 'i') }; // Case-insensitive title search
    }

    // Find news from all components based on the query
    const nationalNews = await NationalForm.find(query);
    const internationalNews = await InternationalForm.find(query);
    const sportsNews = await SportsForm.find(query);
    const educationNews = await EducationForm.find(query);

    const searchResults = {
      nationalNews,
      internationalNews,
      sportsNews,
      educationNews
    };

    // Check if any news is found
    const totalNewsCount = nationalNews.length + internationalNews.length + sportsNews.length + educationNews.length;
    if (totalNewsCount === 0) {
      console.log('No news found matching the search criteria');
      return res.status(404).json({ message: "No news found matching the search criteria" });
    }

    res.json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = {
  internationalform,
  nationalform,
  educationform,
  sportsform,
  BlogForm,
  Blog_StoryForm,
  CarouselForm,
  CommentForm,
  getNationalNews,
  getSportsNews,
  getInternationalNews,
  getEducationNews,
  getBlog,
  getBlog_Story,
  getCarousel,
  getcomment,
  deleteInternationalNews,
  deleteNationalNews,
  deleteEducationNews,
  deleteSportsNews,
  deleteBlog,
  deleteBlog_Story,
  deleteCarousel,
  searchNews,
  deleteComment,
  Blog_Likes,
  Blog_Dislike,
};