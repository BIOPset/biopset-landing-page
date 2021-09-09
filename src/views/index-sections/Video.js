
import React from "react";

// reactstrap components
import { Col, Row, Container } from "reactstrap";

// core components

function Video() {

  return (
    <div className="section section-dark text-center">
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <div id="medium-widget" />
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G86wkheYmdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
      </Row>
    </Container>
  </div>
  
  );
}

export default Video;
