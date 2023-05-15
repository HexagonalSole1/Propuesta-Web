import '../css/App.css';
import * as React from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'
import Content from '../components/conternido_temporal'


 function main() {
  return (
   <div className="contenedor">
     <Nav/>
     <Content/>

    <Footer/>
   </div>
    
  )
}export default main;
