import React, { useState, useEffect } from 'react';
import { Container, Table, Form, Col, Button } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import API from '../utils/API';
import './BaseTable.css';
import test from "./test.json";

const BaseTable = (props) => {
  const dbName = window.location.pathname.split('/')[2]
  const [dataList, setDataList] = useState("");
  // Dummy state, used to force re-render
  const [updateView, setUpdateView] = useState(0);

  // Which filter is selected
  const noFilter = "No filter";
  const [filterSelect, setFilterSelect] = useState(noFilter);
  const [filterData, setFilterData] = useState("");

  // Load header array
  let headers = [];
  for (let key in dataList[0]) {
    headers.push(key);
  };

  useEffect(() => {
    getDataList(dbName)
  }, [])

  async function getDataList(baseName) {
    await API.getCustom(baseName)
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          for (let k = 0; k < Object.keys(response.data[i]).length; k++) {
            if (Object.keys(response.data[i])[k].startsWith("_")) {
              let key = Object.keys(response.data[i])[k]

              delete response.data[i][key]
            }
          }
        }

        setDataList(response.data)
      })
      .catch(() => { return [] });
  };

  function onColumnClick(event) {
    const colName = event.target.dataset.text;
    const dl = dataList; // Need to work with copy to use sort

    function compareItems(item1, item2) {
      if (!isNaN(item1)) {
        item1 = parseInt(item1)
        item2 = parseInt(item2)
      }

      if (item1 < item2) { 
        console.log(typeof item1)
        return -1 }
      else if (item1 > item2) { return 1 }
      else { return 0 };
    };

    dl.sort((a, b) => { return compareItems(a[colName], b[colName]) });

    setDataList(dl);
    setUpdateView(updateView + 1);
  };

  // Update component state when user selects column to filter on
  function handleSelectChange(event) {
    setFilterSelect(event.target.value);
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    setFilterData(event.target.value.toLowerCase());
  };

  // When the form is submitted, load books matching the entered keyword(s)
  function handleFormSubmit(event) {
    event.preventDefault();
    if (filterSelect === noFilter) {
      setDataList(test);
    }
    else {
      const dl = [];

      test.forEach(item => {
        if (item[filterSelect].toLowerCase() === filterData) {
          dl.push(item);
        }
      });

      setDataList(dl);
    };
  };

  return (
    <>
      <NavBar />

      <Container className="container">
        <h1 className="h1">{dbName}</h1>
        <span style={{ display: "none" }}>{updateView}</span>
        <Form className="form">
          {/* <Form style={{ display: "inline-block", marginLeft: "auto", marginRight: "auto", marginTop: "20px", marginBottom: "50px", width: "70%", 
          textAlign: "left", border: "1px solid black", padding: "20px" }}> */}
          <h4 style={{ marginBottom: "20px" }}>Filter Data</h4>
          <Form.Row>
            <Form.Group as={Col} controlId="formFilter.ControlSelect">
              <Form.Label>Column to filter on:</Form.Label>
              <Form.Control as="select" onChange={handleSelectChange} style={{ height: "50px" }}>
                <option key={0} value={noFilter}>{noFilter}</option>
                {headers.map((header, index) => (
                  <option key={index + 1} value={header}>{header}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formFilter.ControlInput">
              <Form.Label>Value to filter on:</Form.Label>
              <Form.Control type="text" name="filter" onChange={handleInputChange} style={{ paddingLeft: "10px" }}
                placeholder="Enter value to filter on" />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit" className="float-right" style={{ backgroundColor: "#ff9000" }}
            onClick={handleFormSubmit}>Filter</Button>
        </Form>
        <p style={{ textAlign: "center" }}>Click on column heading to sort by that column</p>
        {dataList.length ? (
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="th" data-text={header} onClick={onColumnClick}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataList.map((objData, index) => (
                <tr key={index}>
                  {Object.keys(objData).map((objKey, i) => (
                    <td key={i}>{objData[objKey]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h5>No data to display</h5>
        )}
      </Container>
    </>
  )
};

export default BaseTable;