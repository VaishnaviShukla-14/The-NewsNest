import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './Appbar.css';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { FaBell } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';


export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="appbar-design" position="static" style={{background: 'linear-gradient(to right, #f1a7f1, #fad0c4)'}}>
          <Toolbar>
            <img src="Images/logo_main2.jpg" alt="ImgLogo" style={{ marginRight: '-2px', height: '95px', borderRadius: '50%', border:'2px solid black'}} />
            <Typography variant="h6">
            </Typography>
            <Typography variant="h6" component="div" style={{ color: '#000', justifyContent: 'center', alignItems: 'center',fontFamily:'mv boli'}} sx={{ flexGrow: 1 }}>
              <h4 className="text" style={{fontFamily:'"Pacifico",cursive',fontSize:'30px'}}>The DailyInsight</h4>
            </Typography>
            {auth && (
              <div>
                <IoMailSharp style={{ fontSize: '25px', color: 'black', marginLeft: '10px' }} />
                <FaBell style={{ fontSize: '22px', color: 'black', marginLeft: '11px' }} />
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  style={{ color: 'black', fontSize: '40px' }}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}><Link to="/login">Dashboard</Link></MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
