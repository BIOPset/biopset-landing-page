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
import brandIcon from '../../assets/img/biop-white-icon-128x128px.png';

// reactstrap components
import { Alert, Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  const [alertDanger, setAlertDanger] = React.useState(true);

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (alertDanger) return;
    // the alert should be removed.

    return () => {
      document.getElementById("danger-notification").remove;
    };
  
  }, [alertDanger])
    
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
            "url(" + require("assets/img/biopset-light-background-1920x1080px.jpg").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <img src={brandIcon} width="75px" height="75px" alt="white icon" />
            <h2 style={{fontFamily: "octarine-bold"}}>binary options <br /> settlement protocol</h2>
            <br />
            <h6 style={{textTransform: "uppercase"}}>on-demand<br /> peer-to-pool<br /> binary options trading</h6>
            <br />
            <Button 
              href="https://biopset.com/app" 
              className="btn-round mr-4" 
              color="danger" 
              outline
            >
              <i className="fa fa-plug" />
              Connect Wallet
            </Button>
            <Button
              href="#main"
              className="btn-round mr-4"
              color="neutral"
              outline
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-info" />
              Why BIOPSET?
            </Button>
          </div>
        </Container>
        <div id="danger-notification">
          <Alert className="alert-with-icon" color="danger" isOpen={alertDanger}>
            <Container>
              <div className="alert-wrapper">
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick={() => setAlertDanger(false)}
                >
                  <i className="nc-icon nc-simple-remove" />
                </button>
                <div className="message">
                  <i className="nc-icon nc-bell-55" /> PLEASE DO NOT USE BIOPSET IN REGULATED JURISDICTIONS.
                </div>
              </div>
            </Container>
          </Alert>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
