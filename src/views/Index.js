/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// brand icon
import brandIcon from '../assets/img/biop-brand-icon-128x128px.png';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import UsageNotification from "components/Notifications/UsageNotification.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://medium-widget.pixelpoint.io/widget.js";
    scriptTag.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(scriptTag);
  }, []);

  React.useEffect(() => {
    if (!loaded) return;
    // the <script src="https://medium-widget.pixelpoint.io/widget.js"></script> should be loaded.

    window.mediumWidget();
    return function mediumWidget() {
      window.MediumWidget.Init({
        renderTo: "#medium-widget",
        params: {
          resource: "https://medium.com/usefulcoin",
          postsPerLine: 1,
          limit: 2,
          picture: "big",
          fields: ["description", "author", "claps", "publishAt"],
          ratio: "landscape"
        }
      })
    }
  }, [loaded])

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div id="main" className="main">
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
        <UsageNotification />
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <img src={brandIcon} width="10%" alt="brand icon" />
                <h6 className="title">The Aspiration</h6>
                <h6 className="description">
                  The binary options settlement protocol ("<b>BIOPSET</b>") aims to be the most transparent programmatic 
									clearinghouse for buying and selling binary options and esure all users ("<b>settlers</b>") may leverage the 
									protocol to earn fees for settling on-demand binary options offered by liquidity providers 
									("<b>writers</b>") seeking to earn premiums from price speculators ("<b>traders</b>"). 
                </h6>
                <br />
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
                  className="btn-round mr-4"
                  color="default"
                  outline
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-info" />
                  Research Blog
                </Button>
              </Col>
            </Row>
            <Row>
              <div id="blog-content-wrapper">
                  <div id="medium-widget" />
              </div>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Founders</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/faces/clem-onojeghuo-3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/faces/joe-gardner-2.jpg").default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/faces/erik-lucatero-2.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
