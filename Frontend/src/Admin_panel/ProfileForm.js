import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Button, message } from "antd";

const ProfileForm = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const phone = localStorage.getItem("phone");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    adharcard: "",
  });

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setFormData((prevData) => ({
        ...prevData,
        name: storedName,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/user",
        {
          ...formData,
          email: userData.email,
          phone: phone,
        }
      );

      if (response && response.data) {
        message.success("Profile created successfully!");
      }
    } catch (error) {
      console.error("Error during submission", error);
      message.error("Error during submission. Please try again.");
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>PROFILE FORM</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name:
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            disabled
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            style={styles.input}
            disabled
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="phone" style={styles.label}>
            Phone:
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            style={styles.input}
            disabled
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="address" style={styles.label}>
            Address:
          </label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="adharcard" style={styles.label}>
            Adharcard:
          </label>
          <Input
            type="text"
            id="adharcard"
            name="adharcard"
            value={formData.adharcard}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <br />
        <div style={styles.formGroup}>
          <Button
            type="primary"
            htmlType="submit"
            style={styles.submitButton}
          >
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    border: "1px solid black",
  },
  heading: {
    color: "black",
    textAlign: "center",
    marginBottom: "20px",
    fontFamily: "Times New Roman",
  },
  formGroup: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "10px",
  },
  submitButton: {
    backgroundColor: "maroon",
    color: "white",
    paddingbottom: "12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "550",
    marginLeft: "215px",
  },
};

export default ProfileForm;
