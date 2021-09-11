
import React from "react";

// reactstrap components
import {
  Modal,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Founders() {
  const [shalaquianaModal, setShalaquianaModal] = React.useState(false);
  const toggleShalaquianaModal = () => {
    setShalaquianaModal(!shalaquianaModal);
  };

  return (
    <div 
      className="section section-dark text-center" 
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
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <div className="title">
                <h2>Founders</h2>
                <br />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#shalaquiana" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="shalaquiana profile image"
                      src={
                        require("assets/img/faces/shalaquiana-profile-image.jpg")
                          .default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#shalaquiana" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Shalaquiana</CardTitle>
                      <h6 className="card-category">Core Developer</h6>
                    </div>
                  </a>
                  <Button
                    href="#blog"
                    className="btn-round mr-4"
                    color="danger"
                    onClick={toggleShalaquianaModal}
                  >
                    <i className="fa fa-info" />
                  </Button>
                  {/* Shalaquiana Modal */}
                  <Modal isOpen={shalaquianaModal} toggle={toggleShalaquianaModal}>
                    <div className="modal-header">
                      <button
                        aria-label="Close"
                        className="close"
                        type="button"
                        onClick={toggleShalaquianaModal}
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                      <h5
                        className="modal-title text-center"
                        id="shalaquianaModalLabel"
                      >
                        Shalaquiana
                      </h5>
                    </div>
                    <div className="modal-body ml-auto mr-auto" xs="10">
                      <p>
                        Shalaquiana is BIOPset’s primary developer. She developed the first versions of the protocol 
                        independently and now works collaboratively with the rest of the team and the broader community 
                        to refine the current version of the smart contracts and improve the web apps' UI/UX. 
                      </p>
                      <p>
                        She also enjoys developing marketing content. In particular, she finds creating memes and other 
                        light content a much-needed respite from leading development.
                      </p>
                      <p>
                        Before founding the Settlement DAO and developing its protocol, Shalaquiana worked on several other 
                        decentralized protocols on Ethereum and other blockchains (like NEO and Nebulas).
                      </p>
                      <p>
                        Shalaquiana credentials are on display in the protocol's codebase.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <div className="left-side">
                        <Button
                          className="btn-link"
                          color="default"
                          type="button"
                          onClick={toggleShalaquianaModal}
                        >
                          Close
                        </Button>
                      </div>
                      <div className="divider" />
                      <div className="right-side">
                        <Button className="btn-link" color="danger" type="button">
                          More
                        </Button>
                      </div>
                    </div>
                  </Modal>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="https://twitter.com/shalaquiana"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#zero" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="zero profile image"
                      src={
                        require("assets/img/faces/zero-profile-image.jpg").default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#dereek69" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Zero</CardTitle>
                      <h6 className="card-category">Graphic Designer</h6>
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
                    href="https://twitter.com/zero"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#dereek69" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="dereek69 profile image"
                      src={
                        require("assets/img/faces/dereek69-profile-image.jpg")
                          .default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#dereek69" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Dereek69</CardTitle>
                      <h6 className="card-category">Token Economist</h6>
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
                    href="https://twitter.com/Dereek70"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#munair" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="munair profile image"
                      src={
                        require("assets/img/faces/munair-profile-image.jpg")
                          .default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#munair" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Munair</CardTitle>
                      <h6 className="card-category">Marketing Manager</h6>
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
                    href="https://twitter.com/munair"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>  
  );
}

export default Founders;
