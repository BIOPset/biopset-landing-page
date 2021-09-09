
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

// core components

function Blog() {

  return (
    <div className="section text-center">
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <div id="medium-widget" />
        </Col>
      </Row>
    </Container>
  </div>
  
  );
}

export default Blog;
