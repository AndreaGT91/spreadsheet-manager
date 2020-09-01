import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Upload3 from '../../images/688511-637286317940096204-16x9.jpg';
// import Upload4 from '../../images/excelIcon.png';
import Aos from "aos";
import "aos/dist/aos.css";

const SectionTwo = ()=>{

    useEffect(()=>{
        Aos.init({duration: 2000});
            },[])
    return(
        <Container>
  <Row data-aos="fade-right">
    <Col style={{textAlign:'center'}}>
    {/* <div style={{ top: "50%", left: "50%"}}> */}
    <h1 className="sectionTwoHeader">Supports Excel & <br/>CSV files</h1>

    {/* </div> */}

    </Col>
    <Col style={{textAlign:'center'}}>    
  
<Image data-aos="fade-down" src={ Upload3 } style={{height:'70%',width:'100%'}}></Image>

</Col>
  </Row>
 
</Container>
    )
}
export default SectionTwo;