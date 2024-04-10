
import React, { useState } from 'react';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useNavigate } from 'react-router-dom';
import { message, Button, Input, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';

const { Option } = Select;

const InternationalForm = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    article: '',
    highlight: 'none',
    date: new Date().toLocaleDateString(),
    time: getCurrentTime(),
    image: null,
    video: null,
  });

  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const Navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlefileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: file,
    }));
  };

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const handleHighlightChange = (value) => {
    setFormData({ ...formData, highlight: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithUser = {
        ...formData,
        name: Cookies.get('name'), // Add the user's name to the form data
      };

      const formDataToSend = new FormData();
      formDataToSend.append('name', formDataWithUser.name); // Add the user's name
      formDataToSend.append('title', formDataWithUser.title);
      formDataToSend.append('article', formDataWithUser.article);
      formDataToSend.append('highlight', formDataWithUser.highlight);
      formDataToSend.append('date', formDataWithUser.date);
      formDataToSend.append('time', formDataWithUser.time);
      formDataToSend.append('image', formDataWithUser.image);
      formDataToSend.append('video', formDataWithUser.video);

      const response = await axios.post('http://localhost:3001/api/internationalnews', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response && response.data) {
        setFormData({
          title: '',
          article: '',
          highlight: 'none',
          date: new Date().toLocaleDateString(),
          time: getCurrentTime(),
          image: null,
          video: null,
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
    Navigate('/AdminPage');
  };

  const handleErrorAlertClose = () => {
    setErrorAlert(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {contextHolder}
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>INTERNATIONAL FORM</h2>
        <div style={styles.formGroup}>
          <h3 style={styles.subheading}>{`Date: ${formData.date}`} <br />{`Time: ${formData.time}`}<br /> {Cookies.get('name')}</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="title" style={styles.label}>
              TITLE:
            </label>
            <Input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
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
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="image" style={styles.label}>
              IMAGE:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handlefileChange}
              style={styles.input}
              accept="image/*"
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="video" style={styles.label}>
              VIDEO:
            </label>
            <input
              type="file"
              id="video"
              name="video"
              onChange={handlefileChange}
              style={styles.input}
              accept="video/*"
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="highlight" style={styles.label}>
              HIGHLIGHT:
            </label>
            <select
              id="highlight"
              name="highlight"
              value={formData.highlight}
              onChange={(e) => handleHighlightChange(e.target.value)}
              style={styles.select}
            >
              <option value="none">None</option>
              <option value="highlight">Highlight</option>
            </select>
          </div>
          <br/>
          <div style={styles.formGroup}>
            <Button type="primary" htmlType="submit" style={styles.submitButton}>
              SUBMIT
            </Button>
          </div>
        </form>
        <Button onClick={onClose} type="danger" style={styles.closeButton}>
          CLOSE FORM
        </Button>

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
    backgroundColor:
    '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop:'20px',
    border:'1px solid black',
  },
  heading: {
    color: 'black',
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
    marginLeft:'215px',
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
    marginLeft:'195px',
  },
};

export default InternationalForm;

