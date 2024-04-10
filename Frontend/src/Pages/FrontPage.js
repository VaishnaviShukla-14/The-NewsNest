import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import './FrontPage.css';
import { Link, useNavigate } from 'react-router-dom';



function FrontPage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <div style={{ backgroundImage: 'url("Images/FrontPagenew.jpg")', height: '100vh', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>


      <img
        className="logo-image"
        src="Images/news_logo.png" // Replace with your logo image path
        alt="News Logo"
        style={{
          position: "absolute", // Absolute positioning for independent placement
          top: "26%", // Position from the bottom
          left: "49%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust for absolute positioning
          width: "600px", // Adjust width as needed
          height: "600px", // Adjust height as needed
          zIndex: 2, // Higher zIndex to ensure it's above the main image
        }}

       

      />

<br/>

<div className="button-container" >
        <Button variant="primary" style={{marginRight:'100px', marginLeft: '540px',marginTop:'450px', backgroundColor: '#510400', borderRadius: '4px', height: '50px', width:'150px',border:'1px solid #510400',padding:'2px'}}><Link to="/NewLogin" style={{textDecoration:'none',color:'white',fontFamily:'Times New Roman'}}>DASHBOARD</Link></Button>
        <Button variant="primary" style={{marginLeft:'25px', marginTop:'450px' ,  backgroundColor: '#510400', borderRadius : '4px', height: '50px', width:'150px',border:'1px solid #510400',padding:'2px',fontFamily:'Times New Roman'}}>THE NEWS ROOM</Button>
      </div>




<h1 id="animatedText" style={{ position: "absolute", top: "83%", left: "26%" , color:'#510400',fontFamily:'Times New Roman'}}>Your Source for News, Without the Noise.</h1>
       


 
      

    </div>









  );
}

export default FrontPage;







