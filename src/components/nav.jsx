import React from 'react'
import Nav from 'react-bootstrap/Nav';
import imagen_1 from "../assets/images/Mapastepec.jpg";
import styles from "../css/nav.css";
 function Navar() {

  return (
    <Nav fill variant="tabs" defaultActiveKey="/home" className='navprincipal'>
       
      
      <div className='contenedor-img'>
        <img src={imagen_1} alt="logo2"  className='logo2'/>
      </div>
    

    <Nav.Item>
      <Nav.Link href="/link-1">Problematica
      </Nav.Link>
      <div className="problematica1">
      </div>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Propuesta</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">Modulos</Nav.Link>
    </Nav.Item>
  </Nav>
  
  );
}
export default Navar;
