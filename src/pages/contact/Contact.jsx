import React from "react";
import "./Contact.css";
import { Header } from "../../components/header/Header";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobileNumber: "",
    address: "",
    facebookLink: "",
    instagramLink: "",
    tiktokLink: "",
    twitterLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    // For example, you can send the data to a server or perform validation
    console.log(formData);
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
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
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
            <label htmlFor="tiktokLink">Tiktok Link:</label>
            <input
              type="url"
              id="tiktokLink"
              name="tiktokLink"
              value={formData.tiktokLink}
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
