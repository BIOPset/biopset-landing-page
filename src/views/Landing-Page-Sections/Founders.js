
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

  const [zeroModal, setZeroModal] = React.useState(false);
  const toggleZeroModal = () => {
    setZeroModal(!zeroModal);
  };

  const [dereek69Modal, setDereek69Modal] = React.useState(false);
  const toggleDereek69Modal = () => {
    setDereek69Modal(!dereek69Modal);
  };

  const [munairModal, setMunairModal] = React.useState(false);
  const toggleMunairModal = () => {
    setMunairModal(!munairModal);
  };

  const [uchennaModal, setUchennaModal] = React.useState(false);
  const toggleUchennaModal = () => {
    setUchennaModal(!uchennaModal);
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
            <Col md="6">
              <Card className="card-profile card-plain">
                <div className="card-avatar border-white">
                  <a href="#shalaquiana" onClick={toggleShalaquianaModal}>
                    <img
                      alt="shalaquiana"
                      src={
                        require("assets/img/faces/shalaquiana-profile-image.jpg")
                          .default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#shalaquiana" onClick={toggleShalaquianaModal}>
                    <div className="author">
                      <CardTitle tag="h4">Shalaquiana</CardTitle>
                      <h6 className="card-category danger-color">Core Developer</h6>
                    </div>
                  </a>
                </CardBody>
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
                    <h2
                      className="modal-title text-center"
                      id="shalaquianaModalLabel"
                    >
                      Shalaquiana
                    </h2>
                  </div>
                  <div className="modal-body ml-auto mr-auto" xs="10">
                    <h6 className="description">
                      Shalaquiana is BIOPset’s primary developer. She developed the first versions of the protocol 
                      independently and now works collaboratively with the rest of the team and the broader community 
                      to refine the current version of the smart contracts and improve the web apps' UI/UX. 
                    </h6>
                    <h6 className="description">
                      She also enjoys developing marketing content. In particular, she finds creating memes and other 
                      light content a much-needed respite from leading development.
                    </h6>
                    <h6 className="description">
                      Before founding the Settlement DAO and developing its protocol, Shalaquiana worked on several other 
                      decentralized protocols on Ethereum and other blockchains (like NEO and Nebulas).
                    </h6>
                    <h6 className="description">
                      Shalaquiana credentials are on display in the protocol's codebase.
                    </h6>
                  </div>
                  <div className="modal-footer">
                    <div className="left-side">
                      <Button
                        className="btn-link btn-just-icon ml-1"
                        color="danger"
                        type="button"
                        onClick={toggleShalaquianaModal}
                      >
                        <i className="fa fa-window-close" />
                        Close
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="right-side">
                      <Button
                        className="btn-link btn-just-icon ml-1"
                        color="primary"
                        href="https://twitter.com/shalaquiana"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                        Follow
                      </Button>
                    </div>
                  </div>
                </Modal>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-profile card-plain">
                <div className="card-avatar border-white">
                  <a href="#zero" onClick={toggleZeroModal}>
                    <img
                      alt="zero"
                      src={
                        require("assets/img/faces/zero-profile-image.jpg").default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#zero" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Zero</CardTitle>
                      <h6 className="card-category">Graphic Designer</h6>
                    </div>
                  </a>
                </CardBody>
                {/* Zero Modal */}
                <Modal isOpen={zeroModal} toggle={toggleZeroModal}>
                  <div className="modal-header">
                    <button
                      aria-label="Close"
                      className="close"
                      type="button"
                      onClick={toggleZeroModal}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h2
                      className="modal-title text-center"
                      id="zeroModalLabel"
                    >
                      Zero
                    </h2>
                  </div>
                  <div className="modal-body ml-auto mr-auto" xs="10">
                    <h6 className="description">
                      Zero is BIOPSET's graphic designer. He pours his passion and dedication into the protocol's public 
                      face and is responsible for its brand identity. His work influences every aspect of the Settlement 
                      DAO that leaves a visual impression on the heart. In particular, Zero created the logo and designed 
                      the website. 
                    </h6>
                    <h6 className="description">
                      Zero possesses 5 year's experience as a freelancer. This experience includes numerous projects that 
                      greatly expanded his knowledge of various creative techniques.
                    </h6>
                    <h6 className="description">
                      Before founding the Settlement DAO and developing its protocol, Shalaquiana worked on several other 
                      decentralized protocols on Ethereum and other blockchains (like NEO and Nebulas).
                    </h6>
                    <h6 className="description">
                      Zero graduated from an art school in Milan and counts his desire to learn new things as his greatest asset.
                    </h6>
                  </div>
                  <div className="modal-footer">
                    <div className="left-side">
                      <Button
                        className="btn-link btn-just-icon ml-1"
                        color="danger"
                        type="button"
                        onClick={toggleZeroModal}
                      >
                        <i className="fa fa-window-close" />
                        Close
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="right-side">
                      <Button
                        className="btn-link btn-just-icon ml-1"
                        color="primary"
                        href="https://twitter.com/zero"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                        Follow
                      </Button>
                    </div>
                  </div>
                </Modal>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar border-white">
                  <a href="#dereek69" onClick={toggleDereek69Modal}>
                    <img
                      alt="dereek69"
                      src={
                        require("assets/img/faces/dereek69-profile-image.jpg")
                          .default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#dereek69" onClick={toggleDereek69Modal}>
                    <div className="author">
                      <CardTitle tag="h4">Dereek69</CardTitle>
                      <h6 className="card-category">Token Economist</h6>
                    </div>
                  </a>
                </CardBody>
                {/* Dereek69 Modal */}
                <Modal isOpen={dereek69Modal} toggle={toggleDereek69Modal}>
                  <div className="modal-header">
                    <button
                      aria-label="Close"
                      className="close"
                      type="button"
                      onClick={toggleDereek69Modal}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h2
                      className="modal-title text-center"
                      id="zeroModalLabel"
                    >
                      Dereek69
                    </h2>
                  </div>
                  <div className="modal-body ml-auto mr-auto" xs="10">
                    <h6 className="description">
                      Dereek designed and developed BIOP's token distribution/economics. 
                    </h6>
                    <h6 className="description">
                      He has 4 years of experience as an independent protocol researcher and private investor. After discovering 
                      Bitcoin in 2014, he went on to develop proprietary mining research tools that find and analyze on-chain data in 2018.
                    </h6>
                    <h6 className="description">
                      Dereek became a market maker and algorithmic trader in 2019 before transitioning into decentralized finance 
                      in early 2020. He'd been searching for a project that would make use of his experience and various talents 
                      and found that fit bootstrapping the Settlement DAO.
                    </h6>
                    <h6 className="description">
                      Dereek attended the School of Industrial and Information Engineering at Politecnico di Milano.
                    </h6>
                  </div>
                  <div className="modal-footer">
                    <div className="left-side">
                      <Button
                        className="btn-link btn-just-icon ml-1"
                        color="danger"
                        type="button"
                        onClick={toggleDereek69Modal}
                      >
                        <i className="fa fa-window-close" />
                        Close
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="right-side">
                      <Button
                        className="btn-link btn-just-icon ml-1"
                        color="primary"
                        href="https://twitter.com/dereek70"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                        Follow
                      </Button>
                    </div>
                  </div>
                </Modal>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar border-white">
                  <a href="#munair" onClick={toggleMunairModal}>
                    <img
                      alt="munair"
                      src={
                        require("assets/img/faces/munair-profile-image.jpg")
                          .default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#munair" onClick={toggleMunairModal}>
                    <div className="author">
                      <CardTitle tag="h4">Munair</CardTitle>
                      <h6 className="card-category">Marketing Manager</h6>
                    </div>
                  </a>
                </CardBody>
                {/* Munair Modal */}
                <Modal isOpen={munairModal} toggle={toggleMunairModal}>
                  <div className="modal-header">
                    <button
                      aria-label="Close"
                      className="close"
                      type="button"
                      onClick={toggleMunairModal}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h2
                      className="modal-title text-center"
                      id="zeroModalLabel"
                    >
                      Munair
                    </h2>
                  </div>
                  <div className="modal-body ml-auto mr-auto" xs="10">
                    <h6 className="description">
                      Munair exerts a strong influence on marketing strategy. He is most active in community building on 
                      Discord and an occasional contributor to the protocol's codebase. In particular, he enjoys sharing 
                      the benefits of the protocol with the wider community via Medium. 
                    </h6>
                    <h6 className="description">
                      Before joining the Settlement DAO and its binary options settlement protocol, Munair was the chief 
                      marketing officer of IoTrust (makers of the D'CENT Biometric Hardware Wallet) and led strategy and 
                      business development for numerous other cryptocurrency projects based in South Korea. 
                    </h6>
                    <h6 className="description">
                      Munair has an MBA in Marketing from the Wharton School at the University of Pennsylvania.
                    </h6>
                  </div>
                  <div className="modal-footer">
                    <div className="left-side">
                      <Button
                        className="btn-link btn-just-icon ml-1"
                        color="danger"
                        type="button"
                        onClick={toggleMunairModal}
                      >
                        <i className="fa fa-window-close" />
                        Close
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="right-side">
                      <Button
                        className="btn-link btn-just-icon ml-1"
                        color="primary"
                        href="https://twitter.com/munair"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                        Follow
                      </Button>
                    </div>
                  </div>
                </Modal>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar border-white">
                  <a href="#uchenna" onClick={toggleUchennaModal}>
                    <img
                      alt="uchenna"
                      src={
                        require("assets/img/faces/uchenna-profile-image.jpg")
                          .default
                      }
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#uchenna" onClick={toggleUchennaModal}>
                    <div className="author">
                      <CardTitle tag="h4">Uchenna</CardTitle>
                      <h6 className="card-category">Engineering Manager</h6>
                    </div>
                  </a>
                </CardBody>
                {/* Uchenna Modal */}
                <Modal isOpen={uchennaModal} toggle={toggleUchennaModal}>
                  <div className="modal-header">
                    <button
                      aria-label="Close"
                      className="close"
                      type="button"
                      onClick={toggleUchennaModal}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h2
                      className="modal-title text-center"
                      id="zeroModalLabel"
                    >
                      Uchenna
                    </h2>
                  </div>
                  <div className="modal-body ml-auto mr-auto" xs="10">
                    <h6 className="description">
                      Uchenna is the lord of testing and managing the protocol's repository. He has over twelve year's 
                      software development experience and has contributed to several open-source technologies. In particular, 
                      his contributions to BitTorrent make him an indispensable part of a team now obsessed with code quality 
                      and security.
                    </h6>
                    <h6 className="description">
                      Outside of cryptocurrency-related collaborations and contributions to open-source projects like Apache 
                      Spark, Uchenna has contributed to exciting technological advances in the areas of distributed technologies 
                      and large-scale systems for several fortune 500 companies in Silicon Valley.
                    </h6>
                    <h6 className="description">
                      Uchenna holds a graduate degree in computer engineering from Virginia Tech.
                    </h6>
                  </div>
                  <div className="modal-footer">
                    <div className="left-side">
                      <Button
                        className="btn-link btn-just-icon ml-1"
                        color="danger"
                        type="button"
                        onClick={toggleUchennaModal}
                      >
                        <i className="fa fa-window-close" />
                        Close
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="right-side">
                      <Button
                        className="btn-link btn-just-icon ml-1"
                        color="primary"
                        href="https://twitter.com/calikev85"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                        Follow
                      </Button>
                    </div>
                  </div>
                </Modal>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>  
  );
}

export default Founders;
