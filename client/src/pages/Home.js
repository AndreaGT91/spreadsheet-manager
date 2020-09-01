import React from "react";
import Image from 'react-bootstrap/Image';
// import { Background } from 'react-parallax';
import { Parallax } from "react-parallax";

import NavBar from "../components/NavBar";
import SectionOne from "../components/SectionOne";
// import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
// import SectionFour from "../components/SectionFour";
import MainSection from "../components/MainSection";

import FirstImage from "../images/Big-Data-blog1-16.9-1.jpg"
// import SecondImage from "../images/mainPic4.png"
import ThirdImage from "../images/ac512x512.png"

// const inlineStyle = {
//   background: '#fff',
//   left: '50%',
//   top: '50%',
//   position: 'absolute',
//   padding: '20px',
// }
// const insideStyles = {
//   background: "white",
//   padding: 20,
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%,-50%)"
// };

const Home = () => {
  return (
    <>
      <NavBar />

      <SectionThree />

      <Parallax
        bgImage={FirstImage}
        strength={700}
        renderLayer={percentage => (
          <div>
            <Image src={ThirdImage}
              style={{
                position: "absolute",

                left: "50%",
                top: "50%",

                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 700 }}>

        </div>
      </Parallax>

      <MainSection />
      <SectionOne />


      <div style={{ height: "10vh" }}></div>

      <div style={{ height: "100vh" }}></div>

    </>
  )
};

export default Home;