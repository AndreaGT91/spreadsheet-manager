import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import '../Databases/style.scss'
import Upload5 from '../../images/ac512x512.png';

const Main = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div style={{ marginLeft: '275px', padding: '20px', backgroundImage: `url${Upload5}` }}>


    </div>
  )
};

export default Main;