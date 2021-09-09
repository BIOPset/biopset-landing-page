
import React from "react";

// reactstrap components
import { Col, Row, Container, Button } from "reactstrap";

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
        backgroundSize: "cover"
      }}
    >
      <div 
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          content: "",
          display: "block",
          height: "100%",
          left: 0,
          top: 0,
          position: "absolute",
          width: "100%",
          zIndex: "1"
        }} 
      />
      <Container>
        <div 
          className="text-center"
          style={{
            textAlign: "left",
            zIndex: 3,
            color: "#fff",
            position: "relative"      
          }}
        >
          <div
            style={{
              position: "absolue",
              minHeight: "100vh"
            }}
          >
            <Row>
              <Col className="ml-auto mr-auto" xs="10">
                <img src={brandIcon} width="10%" alt="brand icon" />
                <h1 className="title-uppercase" style={{paddingBottom: "50px"}}>Aspiration</h1>
                <h5 style={{paddingBottom: "50px", fontFamily: "octarine-bold", textTransform: "lowercase"}}>
                  The binary options settlement protocol ("<span style={{color: '#3E3F3F'}}>BIOPSET</span>") aims to be the most transparent programmatic 
                  clearinghouse for buying and selling binary options and esure all users ("<span style={{color: '#FFFFFF'}}>settlers</span>") may leverage the 
                  protocol to earn fees for settling on-demand binary options offered by liquidity providers 
                  ("<span style={{color: '#0067CE'}}>writers</span>") seeking to earn premiums from price speculators ("<span style={{color: '#D60000'}}>traders</span>"). 
                </h5>
                <Button
                  href="#blog"
                  className="btn-round mr-4"
                  color="danger"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-search" />
                  Research Blog
                </Button>
                <Button
                  href="#video"
                  className="btn-round mr-4"
                  color="primary"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-play" />
                  Watch Video
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Aspiration;
