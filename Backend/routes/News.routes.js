const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
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
   getEducationNews,
   getInternationalNews,
   getBlog,
   getBlog_Story,
   getCarousel,
   getcomment,
   searchNews,
   deleteInternationalNews,
   deleteNationalNews,
   deleteEducationNews,
   deleteSportsNews,
   deleteBlog,
   deleteBlog_Story,
   deleteCarousel,
   deleteComment,
   Blog_Likes,
   Blog_Dislike,
} = require("../controlers/news.controler");


const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "uploads/"); // Specify the directory where files should be uploaded
   },
   filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original filename
   },
});
const upload = multer({ storage });

//Storing national news in backend
router.post('/internationalnews', upload.fields([{ name: "image" }, { name: "video" }]), internationalform);
router.post('/nationalnews', upload.fields([{ name: "image" }, { name: "video" }]), nationalform);
router.post('/educationalnews',upload.fields([{ name: "image" }, { name: "video" }]), educationform);
router.post('/sportsnews', upload.fields([{ name: "image" }, { name: "video" }]), sportsform);
router.post('/blog', upload.fields([{ name: "image" }, { name: "video" }]), BlogForm);
router.post('/carousel', upload.fields([{ name: "image" }, { name: "video" }]), CarouselForm);
router.post('/blog_story', upload.fields([{ name: "image" }, { name: "video" }]), Blog_StoryForm);
router.post('/comment', CommentForm);
router.post('/blog/:blogId/like',Blog_Likes);
router.post('/blog/:blogId/dislike',Blog_Dislike);

//Getting the national news from backend
router.get('/nationalnews',upload.fields([{ name: "image" }, { name: "video" }]), getNationalNews);
router.get('/internationalnews',upload.fields([{ name: "image" }, { name: "video" }]), getInternationalNews);
router.get('/educationalnews',upload.fields([{ name: "image" }, { name: "video" }]), getEducationNews);
router.get('/sportsnews',upload.fields([{ name: "image" }, { name: "video" }]), getSportsNews);
router.get('/blog',upload.fields([{ name: "image" }, { name: "video" }]), getBlog);
router.get('/blog_story',upload.fields([{ name: "image" }, { name: "video" }]), getBlog_Story);
router.get('/carousel',upload.fields([{ name: "image" }, { name: "video" }]), getCarousel);
router.get('/search',searchNews);
router.get('/comment', getcomment);

//Delete news from the form api
router.delete('/deleteinternationalnews',deleteInternationalNews);
router.delete('/deletenationalnews',deleteNationalNews);
router.delete('/deleteeducationalnews',deleteEducationNews);
router.delete('/deletesportsnews',deleteSportsNews);
router.delete('/deleteblog',deleteBlog);
router.delete('/deleteblog_story',deleteBlog_Story);
router.delete('/deletecarousel',deleteCarousel);
router.delete('/deletecomment',deleteComment);

module.exports = router;
