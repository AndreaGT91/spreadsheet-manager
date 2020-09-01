import React from "react";
import NavBar2 from "../components/NavBar2";
import SideNavBar from "../components/SideNavBar";
import SetupDatabase from "../components/SetupDatabase";

// import Upload5 from '../images/ac512x512.png';

const inlineStyle2 = {
}

const MyDataBase = () => {
  return (
    <div style={inlineStyle2}>
      <NavBar2 />
      <SideNavBar />
      <SetupDatabase />
    </div>
  );
}

export default MyDataBase;