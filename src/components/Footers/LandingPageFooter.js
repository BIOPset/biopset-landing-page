/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://https//medium.com/biopset"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://docs.biopset.com/"
                  target="_blank"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/invite/yj4GtXbYuF"
                  target="_blank"
                >
                  Support
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © BIOPset {new Date().getFullYear()} {" "}
              <i className="fa fa-heart heart" />
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
