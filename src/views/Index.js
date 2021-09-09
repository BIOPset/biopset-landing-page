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
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import Benefits from "views/index-sections/Benefits.js";
import Aspiration from "./index-sections/Aspiration";
import Video from "./index-sections/Video";
import Blog from "./index-sections/Blog";
import Founders from "./index-sections/Founders";
import Notification from "views/index-sections/Notification.js";

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
        <Benefits />
        <Aspiration />
        <Video />
        <Blog />
        <Founders />
        <Notification />
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
