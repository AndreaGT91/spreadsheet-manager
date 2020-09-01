import React, { useEffect } from "react";
import Aos from "aos";

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Upload3 from '../../images/csvIcon.png';
// import Upload4 from '../../images/excelIcon.png';
import AddIcon from '../../images/addIcon.png';
import CalenderIcon from '../../images/calenderIcon.png';
import Main from "../Main";

import "aos/dist/aos.css";
import './style.scss'

const Databases = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Main />
      <Container>
        <h1 style={{ marginLeft: '290px', padding: '20px', marginTop: '50px', }}>My workspace</h1>
        <Row>
          <CardDeck data-aos="fade-right" style={{ marginLeft: '200px', padding: '20px' }}>
            <Col >
              <Card className="dbCards">

                <Card.Img variant="top" href="/Home" src={CalenderIcon} />
                <Card.Link className="stretched-link" href="#">Card Link</Card.Link>
              </Card>
            </Col>
            <Col >
              <Card className="dbCards">
                <Card.Img variant="top" src="holder.js/100px160" />

              </Card>
            </Col>
            <Col >
              <Card className="dbCards">
                <Card.Img variant="top" src="holder.js/100px160" />



              </Card>
            </Col>
            <Col >
              <Card className="dbCards">
                <Card.Img variant="top" src="holder.js/100px160" />



              </Card>
            </Col>

          </CardDeck>
        </Row>

        <Row>
          <CardDeck data-aos="fade-left" style={{ marginLeft: '200px', padding: '20px' }}>

            <Card className="dbCards">
              <Card.Img href="#features" variant="top" src="holder.js/100px160" />
              Features
            </Card>
            <Card className="dbCards">
              <Card.Img variant="top" src="holder.js/100px160" />

            </Card>
            <Card className="dbCards">
              <Card.Img variant="top" src="holder.js/100px160" />



            </Card>
            <Card className="dbCards">
              <Card.Img variant="top" src={AddIcon} />
              <Card.Link style={{ textAlign: 'center' }} className="stretched-link" href="/MyDatabase">Add a base</Card.Link>



            </Card>



          </CardDeck>
        </Row>



      </Container>



    </div>
  )
};

export default Databases;