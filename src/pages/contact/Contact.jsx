import React from "react";
import "./Contact.css";
import { Header } from "../../components/header/Header";
import { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    contactNumber: "",
    address: "",
    facebookLink: "",
    instagramLink: "",
    tikTokLink: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/contact/save", formData);
      console.log('Success:', response.data);
      window.alert("Contact Saved Successfully");
    } catch (error) {
      console.error('Error:', error);
      window.alert("Error saving contact information");
    }
  };

  return (
    <>
      <Header />
      <div className="contact__container">
        <h1>CONTACT</h1>
        <form className="form__container" onSubmit={handleSubmit}>
          <div className="contact__form-content">
            <label htmlFor="email">Email:</label>
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
            <label htmlFor="contactNumber">Mobile Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </div>
          <div className="contact__form-content">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="contact__form-content">
            <label htmlFor="facebookLink">Facebook Link:</label>
            <input
              type="url"
              id="facebookLink"
              name="facebookLink"
              value={formData.facebookLink}
              onChange={handleChange}
            />
          </div>
          <div className="contact__form-content">
            <label htmlFor="instagramLink">Instagram Link:</label>
            <input
              type="url"
              id="instagramLink"
              name="instagramLink"
              value={formData.instagramLink}
              onChange={handleChange}
            />
          </div>
          <div className="contact__form-content">
            <label htmlFor="tikTokLink">Tiktok Link:</label>
            <input
              type="url"
              id="tikTokLink"
              name="tikTokLink"
              value={formData.tikTokLink}
              onChange={handleChange}
            />
          </div>
          <div className="contact__form-content">
            <label htmlFor="twitterLink">Twitter Link:</label>
            <input
              type="url"
              id="twitterLink"
              name="twitterLink"
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
