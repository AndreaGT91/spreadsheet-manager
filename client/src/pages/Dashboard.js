import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import NavBar from "../components/NavBar";
// import Databases from "../components/Databases";

import backgroundImage from "../images/ac512x512.png";
import API from "../utils/API"


const Dashboard = () => {
  const [databases, setDatabases] = useState([{ baseName: "testing" }]);

  useEffect(() => {
    getDBs()
  }, [])
 
  async function getDBs() {
    await API.getBasesByUser(JSON.parse(localStorage.getItem("userID")))
      .then(response => {
        setDatabases(JSON.parse(response.data))
      })
      .catch(() => { return [] });
  };

  console.log("databases: ", databases)

  return (
    <>
      <NavBar />
      <Image
        className="d-block mx-auto img-fluid w-75"
        style={{ opacity: "0.3" }}
        src={backgroundImage}
        alt="Build A Base Logo">
      </Image>

      {/* <Databases/> */}

      <Container className="d-block mx-auto" style={{ marginTop: "-70%", width: "80%" }}>
        <h1 style={{ textAlign: "center" }}>Your Databases</h1>
        <ListGroup>
          {databases.map(base => (
            <ListGroup.Item key={base.baseName.toString()}>
              <Link to={`/BaseTable/${base.baseName}`}>{base.baseName}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  )
};

export default Dashboard;