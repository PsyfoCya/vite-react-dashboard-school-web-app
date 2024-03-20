import React from "react";
import "./Contact.css";
import { Header } from "../../components/header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiClient } from "../../components/api/ApiClient";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    contactNumber: "",
    address: "",
    facebookLink: "",
    instagramLink: "",
    tiktokLink: "",
    twitterLink: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    contactNumber: "",
    address: "",
    facebookLink: "",
    instagramLink: "",
    tiktokLink: "",
    twitterLink: "",
  });

  // useEffect(() => {
  //   const fetchContact = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8080/contact/all");
  //       setFormData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching contact data:', error);
  //     }
  //   };

  //   fetchContact();
  // }, []);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (!formData.contactNumber) {
      newErrors.contactNumber = "Mobile Number is required";
      valid = false;
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
      valid = false;
    }

    if (!formData.facebookLink) {
      newErrors.facebookLink = "Facebook link  is required";
      valid = false;
    }

    if (!formData.instagramLink) {
      newErrors.instagramLink = "Instagram Link is required";
      valid = false;
    }

    if (!formData.tiktokLink) {
      newErrors.tiktokLink = "Tiktok Link is required";
      valid = false;
    }

    if (!formData.twitterLink) {
      newErrors.twitterLink = "Twitter Link is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await apiClient.post("/contact/save", formData);
        console.log('Success:', response.data);
        window.alert("Contact Saved Successfully");
      } catch (error) {
        console.error('Error:', error);
        window.alert("Error saving contact information");
      }
    } else {
      window.alert("Please fill in all required fields.");
    }
  };

  return (
    <>
      <Header />
      <div className="contact__container">
        <h1>CONTACT</h1>
        <form className="form__container" onSubmit={handleSubmit}>
          <div className="contact__form-content">
            <label htmlFor="email">
              Email:{" "}
              {errors.email && (
                <span className="invalid-feedback">required</span>
              )}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-content">
            <label htmlFor="mobileNumber">
              Mobile Number:{" "}
              {errors.contactNumber && (
                <span className="invalid-feedback">required</span>
              )}
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              className={errors.contactNumber ? "input-error" : ""}
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </div>

          <div className="contact__form-content">
            <label htmlFor="address">
              Address:
              {errors.address && (
                <span className="invalid-feedback">required</span>
              )}
            </label>
            <textarea
              id="address"
              name="address"
              className={errors.address ? "input-error" : ""}
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="contact__form-content">
            <label htmlFor="facebookLink">Facebook Link:{errors.facebookLink && (
                <span className="invalid-feedback">required</span>
              )}</label>
            <input
              type="url"
              id="facebookLink"
              name="facebookLink"
              className={errors.facebookLink ? "input-error" : ""}
              value={formData.facebookLink}
              onChange={handleChange}
            />
          </div>
          <div className="contact__form-content">
            <label htmlFor="instagramLink">Instagram Link:{errors.instagramLink && (
                <span className="invalid-feedback">required</span>
              )}</label>
            <input
              type="url"
              id="instagramLink"
              name="instagramLink"
              className={errors.instagramLink ? "input-error" : ""}
              value={formData.instagramLink}
              onChange={handleChange}
            />
          </div>
          <div className="contact__form-content">
            <label htmlFor="tiktokLink">Tiktok Link:{errors.tiktokLink && (
                <span className="invalid-feedback">required</span>
              )}</label>
            <input
              type="url"
              id="tiktokLink"
              name="tiktokLink"
              className={errors.tiktokLink ? "input-error" : ""}
              value={formData.tiktokLink}
              onChange={handleChange}
            />
          </div>
          <div className="contact__form-content">
            <label htmlFor="twitterLink">Twitter Link:{errors.twitterLink && (
                <span className="invalid-feedback">required</span>
              )}</label>
            <input
              type="url"
              id="twitterLink"
              name="twitterLink"
              className={errors.twitterLink ? "input-error" : ""}
              value={formData.twitterLink}
              onChange={handleChange}
            />
          </div>
          <div className="form__btn-center">
            <button type="submit">SAVE CHANGES</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
