
import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SocialMedia() {
  const [loadedMedium, setLoadedMedium] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  React.useEffect(() => {
    const mediumScriptTag = document.createElement('script');
    mediumScriptTag.src = "https://medium-widget.pixelpoint.io/widget.js";
    mediumScriptTag.addEventListener('load', () => setLoadedMedium(true));
    document.body.appendChild(mediumScriptTag);
  }, []);

  React.useEffect(() => {
    if (!loadedMedium) return;
    // the <script src="https://medium-widget.pixelpoint.io/widget.js"></script> should be loaded.

    window.MediumWidget.Init({
        renderTo: "#medium-widget",
        params: {
          resource: "https://medium.com/biopset",
          postsPerLine: 1,
          limit: 1,
          picture: "big",
          fields: ["description", "author", "claps", "publishAt"],
          ratio: "landscape"
        }
    });

    return () => {
      window.MediumWidget.unmount();
    };
  
  }, [loadedMedium])

  return (
    <div className="section text-center">
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="10">
          <div className="title">
            <h2>Learn More</h2>
            <br />
            <p>
              The binary options settlement protocol ("<span style={{color: '#D60000'}}>BIOPSET</span>") aims to be the most transparent programmatic 
              clearinghouse for buying and selling binary options and ensure all users ("<span style={{color: '#D60000'}}>settlers</span>") may leverage the 
              protocol to earn fees for settling on-demand binary options offered by liquidity providers 
              ("<span style={{color: '#D60000'}}>writers</span>") seeking to earn premiums from price speculators ("<span style={{color: '#D60000'}}>traders</span>"). 
            </p>
          </div>
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav id="tabs" role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    <i className="fa fa-rss" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    <i className="fa fa-play" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    <i className="fa fa-comments" />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          <TabContent activeTab={activeTab} className="text-center">
            <TabPane tabId="1">
             <h6>Read Latest Updates</h6>
              <p>
                Keep up-to-date with everything that is happening at BIOPset via our Medium Blog. 
                All official news is posted here.
              </p>
              <p>
                Here is the latest news:
              </p>
              <br />
              <div id="medium-widget" />
            </TabPane>
            <TabPane tabId="2">
             <h6>Watch Featured Video</h6>
              <p>
                Take a look at this video if you are new to binary options and want to 
                learn how BIOPset can be a benefit to you.
              </p>
              <br />
              <iframe width="100%" height="500px" src="https://www.youtube.com/embed/G86wkheYmdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </TabPane>
            <TabPane tabId="3">
             <h6>Join Our Community</h6>
              <p>The beating heart of BIOPset is our community. Please join us in Discord.</p>
              <br />
              <iframe width="100%" height="500px" src="https://discord.com/widget?id=795000201742909450&theme=dark" title="BIOPset Discord Widget" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  </div>
  
  );
}

export default SocialMedia;
