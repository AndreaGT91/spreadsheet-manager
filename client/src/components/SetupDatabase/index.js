import React, { useEffect } from "react";
import Aos from "aos";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Pagination from 'react-bootstrap/Pagination'

import NewDbModal from "../NewDbModal";
import NewFileUploadModal from "../NewFileUploadModal";
import DatabaseTemplates from "../DatabaseTemplates";
import Main from "../Main";

import "aos/dist/aos.css";
import '../SetupDatabase/style.scss'

const SetupDatabase = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Main />
      <Container style={{ width: '75%' }}>
        <Row >
          <Pagination size="lg" style={{ marginLeft: '60px', padding: '20px', backgroundColor: "white", marginTop: "20px", }}>

            <Pagination.Prev href="/Dashboard" />

          </Pagination>
          <header>
            <h1 style={{ marginLeft: '60px', padding: '20px', backgroundColor: "white", marginTop: "20px", opacity: "1" }}>My workspace</h1>
          </header>
        </Row>
        <Alert variant='dark'>

        </Alert>
        <Row>
          <NewDbModal />
        </Row>
        <Alert variant='dark' style={{ backgroundColor: '#D8DDDC' }}>
        </Alert>
        <Row>
          <NewFileUploadModal />
        </Row>
        <Alert variant='dark'>
          Or choose a template
        </Alert>
        <DatabaseTemplates />
      </Container>
    </div>
  )
};

export default SetupDatabase;