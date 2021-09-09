
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

// core components

function Aspiration() {

  return (
    <div className="section text-center">
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
