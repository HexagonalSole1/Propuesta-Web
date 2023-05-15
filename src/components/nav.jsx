import React from 'react'
import Nav from 'react-bootstrap/Nav';
import imagen_1 from "../assets/images/Mapastepec.jpg";
import styles from "../css/nav.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

 function Navar() {

  return (
    <>
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Container>
    </Navbar>
    <br />
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>Brand text</Navbar.Brand>
      </Container>
    </Navbar>
    <br />
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
    <br />
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
  );
}
export default Navar;
