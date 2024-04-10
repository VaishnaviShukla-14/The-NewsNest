import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InternationalForm from './InternationalForm';
import NationalForm from './NationalForm';
import SportsForm from './SportsForm';
import EducationForm from './EducationForm';
import BlogForm from './BlogForm';
import Blog_storyForm from './Blog_storyForm';
import CarouselForm from './CarouselForm';
import LeftDrawer from '../MandatoryItems/LeftDrawer';


const pages = ['International', 'National', 'Sports', 'Education', 'Blog', 'Blog_story', 'Carousel'];

function ResponsiveAppBar() {
  const [activePage, setActivePage] = useState('International');
  const [formVisible, setFormVisible] = useState({
    International: false,
    National: false,
    Sports: false,
    Education: false,
    Blog: false,
    Blog_story: false,
    Carousel: false,
  });

  const handleClick = (page) => {
    setActivePage(page);

    setFormVisible((prevFormVisible) => ({
      ...prevFormVisible,
      [page]: true,
    }));

    const element = document.getElementById(page.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseForm = () => {
    setFormVisible({
      International: false,
      National: false,
      Sports: false,
      Education: false,
      Blog: false,
      Blog_story: false,
      Carousel: false,
    });
  };

  const renderActiveForm = () => {
    switch (activePage) {
      case 'International':
        return (
          <InternationalForm
            isVisible={formVisible.International}
            onClose={handleCloseForm}
          />
        );
      case 'National':
        return (
          <NationalForm
            isVisible={formVisible.National}
            onClose={handleCloseForm}
          />
        );
      case 'Sports':
        return (
          <SportsForm
            isVisible={formVisible.Sports}
            onClose={handleCloseForm}
          />
        );
      case 'Education':
        return (
          <EducationForm
            isVisible={formVisible.Education}
            onClose={handleCloseForm}
          />
        );
      case 'Blog':
        return (
          <BlogForm
            isVisible={formVisible.Blog}
            onClose={handleCloseForm}
          />
        );
      case 'Blog_story':
        return (
          <Blog_storyForm
            isVisible={formVisible.Blog_story}
            onClose={handleCloseForm}
          />
        );
      case 'Carousel':
        return (
          <CarouselForm
            isVisible={formVisible.Carousel}
            onClose={handleCloseForm}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <AppBar position="static" style={{ backgroundColor: '#dcdcdc' }}>
          <Container maxWidth="xl">
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {pages.map((page) => (
                <div key={page}>
                  <Button
                   className="ab-button"
                   color="inherit"
                   onClick={() => handleClick(page)}
                   style={{
                     textDecoration: 'none',
                     color: '#000',
                     fontSize: '18px',
                     fontWeight: '550',
                     fontFamily: 'Times New Roman',
                     borderTop: '4px solid #000',
                     color: 'maroon',
                     
                    }}
                   
                 >
                    {page}
                  </Button>
                </div>
              ))}
            </Box>
          </Container>
        </AppBar>
        <Container maxWidth="xl">
          {renderActiveForm()}
        </Container>
      </div>
      <div>
        <LeftDrawer />
      </div>
    </>
  );
}

export default ResponsiveAppBar;
