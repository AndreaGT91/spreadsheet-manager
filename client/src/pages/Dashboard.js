import React, { useState, useEffect } from "react";

import { Image, Modal, Form, Button, Container, Row, Col, Card, CardColumns } from "react-bootstrap";

import NavBar from "../components/NavBar";
import backgroundImage from "../images/ac512x512.png";
import API from "../utils/API"
import readSpreadsheet from "../utils/readSpreadsheet";


const Dashboard = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showImport, setShowImport] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [databases, setDatabases] = useState([{ baseName: "default" }]);

  useEffect(() => {
    getDBs()
  }, [])

  async function getDBs() {
    await API.getBasesByUser(JSON.parse(localStorage.getItem("userID")))
      .then(response => {
        setDatabases(response.data);
      })
      .catch(() => { return [] });
  };

  const handleCloseAlert = () => {
    setAlertMessage("");
    setShowAlert(false);
  };

  const handleShowImport = () => setShowImport(true);
  const handleCloseImport = () => {
    setFileName(null);
    setShowImport(false);
  };

  const handleFileSelect = () => {
    setShowImport(false);

    if (fileName) {
      readSpreadsheet(fileName)
        .then(response => {
          getDBs();
        })
        .catch(error => {
          console.log("Error reading file: ", error);
          
          // Errors come back as different types of objects
          let msg = "";
          if (error.message) {
            msg = ": " + error.message;
          }
          else if ((error.response) && (error.response.statusText)) {
            msg = ": " + error.response.statusText;
          };

          setAlertMessage("Error importing " + fileName.name + msg);
          setShowAlert(true);
        });
    }
    else {
      setAlertMessage("No file selected.");
      setShowAlert(true);
    };

    setFileName(null);
  };

  const fileNameChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0]);
    };
  };

  return (
    <>
      <NavBar />
      <Image
        className="d-block mx-auto img-fluid w-75"
        style={{ opacity: "0.3" }}
        src={backgroundImage}
        alt="Build A Base Logo">
      </Image>

      {/* Modal for alerts */}
      <Modal
        show={showAlert}
        onHide={handleCloseAlert}
        aria-labelledby="alert-modal"
        centered
        style={{ opacity: 1 }}>

        <Modal.Header closeButton>
          <Modal.Title>Build-A-Base Alert:</Modal.Title>
        </Modal.Header>
        <Modal.Body>{alertMessage}</Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="success" onClick={handleCloseAlert}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for importing spreadsheets */}
      <Modal
        show={showImport}
        onHide={handleCloseImport}
        aria-labelledby="import-modal"
        centered
        style={{ opacity: 1 }}>

        <Modal.Header closeButton>
          <Modal.Title id="import-modal">Import Spreadsheet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.File id="fileToImportSelector" label="Select file to import" onChange={fileNameChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="success" onClick={handleFileSelect}>
            Import
          </Button>
        </Modal.Footer>
      </Modal>

      <Container className="d-block mx-auto" style={{ marginTop: "-70%", width: "80%" }}>
        <Row>
          <Col>
            <h1 className="float-left">Your Databases</h1>
          </Col>
          <Col>
            <Button
              className="float-right"
              variant="success"
              style={{ marginTop: "20px" }}
              onClick={handleShowImport}>
              Import
            </Button>
          </Col>
        </Row>
        <CardColumns>
          {databases.map(base => (
            <Card key={base.baseName} className="p-3" bg="info">
              <Card.Link href={`/BaseTable/${base.baseName}`} style={{ color:"white" }}>
                <Card.Title className="font-weight-bold">{base.baseTitle}</Card.Title>
                <Card.Text className="font-weight-lighter">{base.baseName}</Card.Text>
                <Card.Text className="font-weight-lighter font-italic">
                  Created on: {(new Date(base.creationDate)).toLocaleDateString()}
                </Card.Text>
              </Card.Link>
            </Card>
          ))}
        </CardColumns>
      </Container>
    </>
  )
};

export default Dashboard;