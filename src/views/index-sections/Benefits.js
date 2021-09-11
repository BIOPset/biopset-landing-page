
import React from "react";

// reactstrap components
import { Col, Row, Button, Container } from "reactstrap";

// core components

function Benefits() {

  return (
    <div className="section section-gold text-center">
      <ScrollToLink to="landingPageEnd" smooth={true} offset={500} duration={1000} delay={500}/>
      <Container>
        <Row>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-sound-wave" />
              </div>
              <div className="description">
                <Button className="btn-link" color="info" href="https://docs.biopset.com/theory/fundamentals/buying-options">
                  Buy Options
                </Button>
                <h6 className="info-title">Double Your Wealth</h6>
                <h6 className="description" style={{fontFamily: "octarine-bold", textTransform: "lowercase"}}>
                  Make up to 2X returns on the premiums paid whenever you correctly predict the direction
                  of ETH prices between oracle updates.
                </h6>
                <br />
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-chart-pie-36" />
              </div>
              <div className="description">
                <Button className="btn-link" color="info" href="https://docs.biopset.com/theory/fundamentals/selling-options">
                  Sell Options
                </Button>
                <h6 className="info-title">Make Passive Income</h6>
                <h6 className="description" style={{fontFamily: "octarine-bold", textTransform: "lowercase"}}>
                  Accumulate returns on your assets and gradually improve your portfolio size  
                  earning premiums writing binary options.
                </h6>
                <br />
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-bank" />
              </div>
              <div className="description">
                <Button className="btn-link" color="info" href="https://docs.biopset.com/theory/fundamentals/exercising-options">
                  Settle Options
                </Button>
                <h6 className="info-title">Earn Predictable Bounties</h6>
                <h6 className="description" style={{fontFamily: "octarine-bold", textTransform: "lowercase"}}>
                  Collect risk-free rewards whenever oracle updates are received for settling 
                  binary options positions for traders/writers. *
                </h6>
                <br />
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-settings-gear-65" />
              </div>
              <div className="description">
                <Button className="btn-link" color="info" href="https://docs.biopset.com/theory/fundamentals/exercising-options">
                  Manage BIOPSET
                </Button>
                <h6 className="info-title">Configure The Protocol</h6>
                <h6 className="description" style={{fontFamily: "octarine-bold", textTransform: "lowercase"}}>
                  Participate in the protocol development and help determine how fees that accrue
                  to the protocol's treasury are best allocated.
                </h6>
                <br />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Benefits;
