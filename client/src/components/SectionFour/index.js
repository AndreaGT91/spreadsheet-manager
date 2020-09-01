import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Upload5 from '../../images/managementIcon.png';
import Aos from "aos";
import "aos/dist/aos.css";

const SectionFour = ()=>{

    useEffect(()=>{
        Aos.init({duration: 2000});
            },[])
    return(
        <Container>
        <Row>
          <Col style={{textAlign:'center'}}>
          {/* <div style={{ top: "50%", left: "50%"}}> */}
          <h1 className="sectionFourHeader">Simple Database <br/>Management</h1>
      <Image data-aos="fade-down" src={ Upload5 }></Image>
          {/* </div> */}
      
          </Col>
          <Col></Col>
        </Row>
       
      </Container>
    )
}

export default SectionFour;