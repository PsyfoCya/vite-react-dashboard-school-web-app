import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../api/ApiClient";

const CreateUserForm = () => {
  const navigate = useNavigate();

  // http://localhost:8080/users/create

  const createUser = async () => {
    try {
      const response = await apiClient.post(
        "/users/create",
        formik.values
      );
      console.log(response.data);
      window.alert("User created successfully");
      navigate("/users");
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      role: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Please enter users firstname"),
      lastname: Yup.string().required("Please enter users lastname"),
      email: Yup.string().email("Invalid email address").required("Required"),
      role: Yup.string().required("Please enter users role"),
      mobile: Yup.string().required("Please enter users mobile"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // Handle the form submission (e.g., save to the database)
      console.log(values);
      createUser();
      // You can make an API call here to save the user details to the database
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstname}
      />
      {formik.touched.firstname && formik.errors.firstname && (
        <div>{formik.errors.firstname}</div>
      )}

      <label htmlFor="lastname">Last Name:</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname && (
        <div>{formik.errors.lastname}</div>
      )}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <div>{formik.errors.email}</div>
      )}

      <label htmlFor="role">Role:</label>
      <input
        type="text"
        id="role"
        name="role"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.role}
      />
      {formik.touched.role && formik.errors.role && (
        <div>{formik.errors.role}</div>
      )}

      <label htmlFor="mobile">Mobile:</label>
      <input
        type="text"
        id="mobile"
        name="mobile"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.mobile}
      />
      {formik.touched.mobile && formik.errors.mobile && (
        <div>{formik.errors.mobile}</div>
      )}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && (
        <div>{formik.errors.password}</div>
      )}

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <div>{formik.errors.confirmPassword}</div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateUserForm;
