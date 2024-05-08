import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../index.css';


const drawerWidth = 227;

function LeftDrawer() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const menuItems = [
    { text: 'USER', icon: <PersonIcon style={{ color: 'black' }} />, link: '/user' },
    { text: 'DELETED USERS', icon: <PersonIcon style={{ color: 'black' }} />, link: '/deleteUser' },
    { text: 'LOGOUT', icon: <PersonIcon style={{ color: 'black' }} />, link: '/logout' },
    // Add more menu items as needed
  ];





  const handleNewsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNewsClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        marginTop: '13%',
        zIndex: 500,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          position: 'absolute',
          backgroundColor: '#dcdcdc',
        },
      }}


    >
      <div style={{ marginTop: '13%', backgroundcolor: 'rgb(218, 140, 23)' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleNewsClick}
              sx={{ color: 'black', '&:hover': { backgroundColor: 'gray' } }}

            >
              <ListItemIcon className='drawericon'>
                <PersonIcon style={{ color: 'black' }} />
              </ListItemIcon>
              <ListItemText primary="NEWS" style={{ color: 'black' }} />
              <ExpandMoreIcon fontSize="small" sx={{ color: 'black' }} />
            </ListItemButton>
          </ListItem>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleNewsClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <List>
              <Link to="/enhancedintertable" style={{ textDecoration: 'none', color: 'black' }} >
                <ListItemButton
                  onClick={handleNewsClose}
                  sx={{ '&:hover': { backgroundColor: 'gray', color: 'white' } }}

                >
                  <ListItemText primary="INTERNATIONAL" style={{ color: 'black' }} />
                </ListItemButton>
              </Link>
              <Link to="/enhancednatiotable" style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton
                  onClick={handleNewsClose}
                  sx={{ '&:hover': { backgroundColor: 'gray' } }}
                >
                  <ListItemText primary=" NATIONAL" />
                </ListItemButton>
              </Link>
              <Link to="/enhancededutable" style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton
                  onClick={handleNewsClose}
                  sx={{ '&:hover': { backgroundColor: 'gray' } }}

                >
                  <ListItemText primary="EDUCATION" />
                </ListItemButton>
              </Link>
              <Link to="/enhancedsportstable" style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton
                  onClick={handleNewsClose}
                  sx={{ '&:hover': { backgroundColor: 'gray' } }}

                >
                  <ListItemText primary="SPORTS" />
                </ListItemButton>
              </Link>
              <Link to="/enhancedblogtable" style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton
                  onClick={handleNewsClose}
                  sx={{ '&:hover': { backgroundColor: 'gray' } }}

                >
                  <ListItemText primary="BLOGS" />
                </ListItemButton>
              </Link>
              <Link to="/enhancedblog_storytable" style={{ textDecoration: 'none', color: 'black' }} >
                <ListItemButton
                  onClick={handleNewsClose}
                  sx={{ '&:hover': { backgroundColor: 'gray' } }}
                >
                  <ListItemText primary="BLOG_STORY" />
                </ListItemButton>
              </Link>
              <Link to="/enhancedcarouseltable" style={{ textDecoration: 'none', color: 'black' }}>
                <ListItemButton
                  onClick={handleNewsClose}
                  sx={{ '&:hover': { backgroundColor: 'gray' } }}
                >
                  <ListItemText primary="CAROUSEL" />
                </ListItemButton>
              </Link>
            </List>
          </Popover>
          <ul style={{padding:"14px", fontSize:"19px"}}>
           <li style={{listStyle:"none"}}><PersonIcon/><Link className='ms-3' style={{textDecoration:"none",color:"black",padding:"20px"}} to='/user'>USER</Link></li><br/>
           <li style={{listStyle:"none"}}><PersonIcon/><Link className='ms-3' style={{textDecoration:"none",color:"black",padding:"19px"}} to='/deleteUser'>DELETEDUSER</Link></li><br/>
           <li style={{listStyle:"none"}}><PersonIcon/><Link className='ms-3' style={{textDecoration:"none",color:"black",padding:"20px"}} to='/logout'>Logout</Link></li><br/>
          </ul>

        </List>
      </div>
    </Drawer>
  );
}

export default LeftDrawer;
