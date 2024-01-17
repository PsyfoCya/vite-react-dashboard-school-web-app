import React, { useState, useEffect, useRef } from "react";
import "./Dashboard.css";
import { Header } from "../../components/header/Header";
import { Line, Bar, Pie } from "react-chartjs-2";
import isLoading from "../../components/isLoading/isLoading";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard__container">
        <h1>DASHBOARD</h1>

        <div>
          <h1 className="center-div">Coming Soon </h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
