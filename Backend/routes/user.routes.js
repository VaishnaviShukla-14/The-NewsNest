const express = require('express')
const route = express.Router()
const {addUser ,loginUser, showUser, deleteUser, updateUser, searchUser, showDeletedUsers, updatePasswordController, addViewer, loginViewer, searchViewer}  = require("../controlers/user.controler")


route.post('/user',addUser);
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