import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav></Nav>
      <Banner></Banner>
    </div>
  );
};

export default HomeScreen;
