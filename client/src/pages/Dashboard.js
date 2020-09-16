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

  // useEffect(() => {
  //   async function getDBS() {
  //     try {
  //       const results = await API.getBasesByUser(JSON.parse(localStorage.getItem("userID")))
  //       console.log(results)
  //       setDatabases(results.data);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   getDBS()
  // }, [])

  // async function getDBs() {
  //   const results = await API.getBasesByUser(JSON.parse(localStorage.getItem("userID")))
  //   console.log(results.data)
  //   return results
  // }

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
          {/* <ListGroup.Item>
            <Link to="/BaseTable/n1010SampleInformation">n1010SampleInformation</Link>
          </ListGroup.Item> */}
          <ListGroup.Item disabled>
            Other database
            </ListGroup.Item>
          <ListGroup.Item disabled>
            Another database
            </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  )
};

export default Dashboard;