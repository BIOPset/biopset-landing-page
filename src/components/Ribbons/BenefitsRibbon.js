
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function BenefitsRibbon() {
  return (
    
    <div className="section section-gold text-center">
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
                <h6 className="description">
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
                <h6>
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
                <h6>
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
                <h6>
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
            <i className="fa fa-info" />
            Research Blog
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
export default BenefitsRibbon;
