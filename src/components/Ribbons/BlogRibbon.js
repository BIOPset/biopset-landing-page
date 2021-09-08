
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

// brand icon
import brandIcon from '../../assets/img/biop-brand-icon-128x128px.png';

function BenefitsRibbon() {
  return (
    
    <div className="section text-center">
      <Container>
        <br />
        <br />
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <div id="blog-content-wrapper">
              <div id="medium-widget" />
            </div>
            <img src={brandIcon} width="10%" alt="brand icon" />
            <h6 className="title">The Aspiration</h6>
            <h6 className="description">
              The binary options settlement protocol ("<b>BIOPSET</b>") aims to be the most transparent programmatic 
              clearinghouse for buying and selling binary options and esure all users ("<b>settlers</b>") may leverage the 
              protocol to earn fees for settling on-demand binary options offered by liquidity providers 
              ("<b>writers</b>") seeking to earn premiums from price speculators ("<b>traders</b>"). 
            </h6>
            <Button
              href="https://www.youtube.com/watch?v=G86wkheYmdc"
              className="btn-round mr-4"
              color="danger"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch Video
            </Button>
            <Button
              href="https://https//medium.com/biopset"
              className="btn-round"
              color="default"
              outline
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-info mr-4" />
              Research Blog
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  
  );
}

export default BenefitsRibbon;
