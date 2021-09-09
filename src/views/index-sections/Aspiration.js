
import React from "react";

// reactstrap components
import { Col, Row, Container } from "reactstrap";

// brand icon
import brandIcon from '../../assets/img/biop-brand-icon-128x128px.png';

// core components

function Aspiration() {

  return (
    <div 
      className="section text-center" 
      style={{
        backgroundImage:
          "url(" + require("assets/img/biopset-light-background-1920x1080px.jpg").default + ")",
      }}
    >
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <img src={brandIcon} width="10%" alt="brand icon" />
          <h6 className="title">The Aspiration</h6>
          <p className="description">
            The binary options settlement protocol ("<b>BIOPSET</b>") aims to be the most transparent programmatic 
            clearinghouse for buying and selling binary options and esure all users ("<b>settlers</b>") may leverage the 
            protocol to earn fees for settling on-demand binary options offered by liquidity providers 
            ("<b>writers</b>") seeking to earn premiums from price speculators ("<b>traders</b>"). 
          </p>
        </Col>
      </Row>
    </Container>
  </div>
  
  );
}

export default Aspiration;
