import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: 'linear-gradient(to right, #e6e6fa, #ffddf4) rgba(0,0,0,0.25)' }}>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className="col-sm-1 headingone">
      <h3>
        <Link to="/nationalnews" style={{ textDecoration: 'none', color: '#000', fontSize: '20px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>NATIONAL</Link>
      </h3>
    </div>

    <div className="col-sm-2 headingone">
      <h3>
        <Link to="/internationalnews" style={{ textDecoration: 'none', color: '#000', fontSize: '20px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>INTERNATIONAL</Link>
      </h3>
    </div>

    <div className="col-sm-2 headingone">
      <h3>
        <Link to="/sportsnews" style={{ textDecoration: 'none', color: '#000', fontSize: '20px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>SPORTS</Link>
      </h3>
    </div>

    <div className="col-sm-1 headingone">
      <h3>
        <Link to="/blog" style={{ textDecoration: 'none', color: '#000', fontSize: '20px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>BLOGS</Link>
      </h3>
    </div>

    <div className="col-sm-2 headingone">
      <h3>
        <Link to="/educationalnews" style={{ textDecoration: 'none', color: '#000', fontSize: '20px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>EDUCATION CORNER</Link>
      </h3>
    </div>
  </div>
</Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}