
import React from "react";

// reactstrap components
import { Col, Row, Container } from "reactstrap";

// brand icon
import brandIcon from '../../assets/img/biop-white-icon-128x128px.png';

// core components

function Aspiration() {

  return (
    <div 
      className="section text-center" 
      style={{
        backgroundImage:
          "url(" + require("assets/img/biopset-dark-background-1920x1080px.jpg").default + ")",
      }}
    >
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <img src={brandIcon} width="10%" alt="brand icon" />
            <h3 className="title">The Aspiration</h3>
            <h5 className="description" style={{fontFamily: "octarine-bold", textTransform: "lowercase"}}>
              The binary options settlement protocol ("<span style={{color: '#D60000'}}>BIOPSET</span>") aims to be the most transparent programmatic 
              clearinghouse for buying and selling binary options and esure all users ("<span style={{color: '#D60000'}}>settlers</span>") may leverage the 
              protocol to earn fees for settling on-demand binary options offered by liquidity providers 
              ("<span style={{color: '#D60000'}}>writers</span>") seeking to earn premiums from price speculators ("<span style={{color: '#D60000'}}>traders</span>"). 
            </h5>
          </Col>
        </Row>
      </Container>
      <div style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        content: "",
        display: "block",
        height: "100%",
        left: 0,
        top: 0,
        position: "absolute",
        width: "100%",
        zIndex: "1"
      }} />
    </div>
  );
}

export default Aspiration;
