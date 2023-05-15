import "../css/App.css";
import * as React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Content from "../components/conternido_temporal";

function main() {
  return (
    <div className="contenedor">
      <Nav />
      <Content />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quasi
        atque facere qui neque, iusto sed placeat ad fugit exercitationem
        quibusdam quia temporibus accusamus, nobis provident harum. Impedit,
        ducimus error?
      </p>
      <Footer />
    </div>
  );
}
export default main;
