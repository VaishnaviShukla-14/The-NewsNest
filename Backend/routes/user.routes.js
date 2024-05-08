const express = require("express");
const multer = require("multer");
const route = express.Router()
const {addUser ,loginUser, showUser, deleteUser, updateUser, searchUser, showDeletedUsers, updatePasswordController, addViewer, loginViewer, searchViewer}  = require("../controlers/user.controler")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, "uploads/"); // Specify the directory where files should be uploaded
    },
    filename: function (req, file, cb) {
       cb(null, file.originalname); // Use the original filename
    },
 });
 const upload = multer({ storage });

route.post('/user' ,addUser);
route.post('/viewer',addViewer);
route.post('/login', loginUser);
route.post('/loginviewer', loginViewer);
route.get('/showUser',showUser);
route.delete('/delete', deleteUser);
route.put('/update/:id', updateUser);
route.get('/search/:alphabet',searchUser);
route.get('/searchViewer/:alphabet',searchViewer);
route.get('/showDeletedUsers', showDeletedUsers);
route.get('/forgetpass', updatePasswordController);


module.exports = route;