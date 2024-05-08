import React, { useState } from 'react';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button, Input } from 'antd';
import Cookies from 'js-cookie';

const CarouselForm = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    name: Cookies.get('name') || '',
    title: '',
    article: '',
    date: new Date().toLocaleDateString(),
    time: getCurrentTime(),
    image: null,
    video: null,
    uploadOption: 'image', // By default, allow uploading image
  });

  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post('http://localhost:3001/api/carousel', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response && response.data) {
        console.log(response.data);
        console.log('Form submitted:', formData);
        setFormData({
          name: Cookies.get('name') || '',
          title: '',
          article: '',
          date: new Date().toLocaleDateString(),
          time: getCurrentTime(),
          image: null,
          video: null,
          uploadOption: 'image', // Reset upload option to image
        });
        setSuccessAlert(true);
      }
    } catch (error) {
      console.error('Error during runtime', error);
      setErrorAlert(true);
      setErrorMessage('Error during submission. Please try again.');
    }
  };

  const handleSuccessAlertClose = () => {
    setSuccessAlert(false);
    onClose();
  };

  const handleErrorAlertClose = () => {
    setErrorAlert(false);
  };

  const handleUploadOptionChange = (option) => {
    setFormData({ ...formData, uploadOption: option });
  };

  const handleClose = () => {
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>CAROUSEL FORM</h2>
        <div style={styles.formGroup}>
          <h3 style={styles.subheading}>{`Date: ${formData.date}`} <br />{`Time: ${formData.time}`}<br /> {formData.name}</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="title" style={styles.label}>
              TTILE:
            </label>
            <Input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="article" style={styles.label}>
              ARTICLE:
            </label>
            <Input.TextArea
              id="article"
              name="article"
              value={formData.article}
              onChange={(e) => setFormData({ ...formData, article: e.target.value })}
              style={styles.textarea}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="uploadOption" style={styles.label}>
              UPLOAD OPTION:
            </label>
            <select
              id="uploadOption"
              name="uploadOption"
              value={formData.uploadOption}
              onChange={(e) => handleUploadOptionChange(e.target.value)}
              style={styles.select}
            >
              <option value="image">IMAGE</option>
              <option value="video">VIDEO</option>
            </select>
          </div>
          {formData.uploadOption === 'image' && (
            <div style={styles.formGroup}>
              <label htmlFor="image" style={styles.label}>
                IMAGE:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                style={styles.input}
                accept="image/*"
                required
              />
            </div>
          )}
          {formData.uploadOption === 'video' && (
            <div style={styles.formGroup}>
              <label htmlFor="video" style={styles.label}>
                VIDEO:
              </label>
              <input
                type="file"
                id="video"
                name="video"
                onChange={(e) => setFormData({ ...formData, video: e.target.files[0] })}
                style={styles.input}
                accept="video/*"
                required
              />
            </div>
          )}
          <div style={styles.buttonGroup}>
            <Button type="primary" htmlType="submit" style={styles.submitButton}>
              SUBMIT
            </Button>
            <Button onClick={handleClose} style={styles.closeButton}>
              CLOSE FORM
            </Button>
          </div>
        </form>
        {successAlert && (
          <SweetAlert success title="Success" onConfirm={handleSuccessAlertClose}>
            Data entered successfully!
          </SweetAlert>
        )}
        {errorAlert && (
          <SweetAlert error title="Error" onConfirm={handleErrorAlertClose}>
            {errorMessage}
          </SweetAlert>
        )}
      </div>
    </>
  );
};

const styles = {
  formContainer: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop:'20px',
  },
  heading: {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily:'Times New Roman',
  },
  subheading: {
    color: '#888',
    textAlign: 'right',
    fontSize: '14px',
    marginBottom: '10px',
  },
  formGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  select: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  submitButton: {
    backgroundColor: 'maroon',
    color: 'white',
    paddingbottom: '12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight:'550',
    marginLeft:'400px',
  },
  closeButton: {
    backgroundColor: 'maroon',
    color: 'white',
    paddingbottom: '12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    fontWeight:'550',
    marginLeft:'400px',
  },
  buttonGroup: {
    textAlign: 'center',
  },
};

export default CarouselForm;