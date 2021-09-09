
import React from "react";

// reactstrap components
import { Col, Row, Container } from "reactstrap";

// core components

function Blog() {
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

    window.MediumWidget.Init({
        renderTo: "#medium-widget",
        params: {
          resource: "https://medium.com/biopset",
          postsPerLine: 1,
          limit: 2,
          picture: "big",
          fields: ["description", "author", "claps", "publishAt"],
          ratio: "landscape"
        }
    })

    return () => {
      window.MediumWidget.unmount();
    };
  
  }, [loaded])

  return (
    <div className="section text-center">
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" xs="10">
          <div id="medium-widget" />
        </Col>
      </Row>
    </Container>
  </div>
  
  );
}

export default Blog;
