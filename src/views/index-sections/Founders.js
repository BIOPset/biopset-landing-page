
import React from "react";

// reactstrap components
import {
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

  return (
    <div className="section text-center">
      <Container>
      <Container>
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
                  href="https://twitter.com/munair"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-twitter" />
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>  
  );
}

export default Founders;
