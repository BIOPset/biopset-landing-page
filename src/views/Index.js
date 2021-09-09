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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import Benefits from "views/index-sections/Benefits.js";
import Aspiration from "views/index-sections/Aspiration";
import Video from "views/index-sections/Video";
import Blog from "views/index-sections/Blog";
import Founders from "views/index-sections/Founders";
import Notification from "views/index-sections/Notification.js";

function LandingPage() {
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
        <Founders />
        <Notification />
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
