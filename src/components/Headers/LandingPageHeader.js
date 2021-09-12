import React from "react";

// brand icon
import brandIcon from '../../assets/img/biop-brand-icon-128x128px.png';

// react-scroll components
import {
  animateScroll
} from "react-scroll";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/biopset-dark-background-1920x1080px.jpg").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <img src={brandIcon} width="75px" height="75px" alt="brand icon" />
            <h2>binary options <br /> settlement protocol</h2>
            <br />
            <h6 className="info-title">on-demand<br /> peer-to-pool<br /> binary options trading</h6>
            <br />
            <Button
              className="btn-round mr-4"
              color="danger"
              href="https://biopset.com/app/"
              target="_blank"
            >
              <i className="fa fa-plug" />
              Connect Wallet
            </Button>
            <Button
              className="btn-round mr-4"
              color="primary"
              onClick={ () => animateScroll.scrollTo(600) }
            >
              <i className="fa fa-info" />
              Why BIOPSET?
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
