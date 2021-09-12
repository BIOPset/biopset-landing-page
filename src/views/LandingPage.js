import React from "react";

// core components
import LandingPageNavbar from "components/Navbars/LandingPageNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import LandingPageFooter from "components/Footers/LandingPageFooter.js";

// index sections
import Benefits from "views/Landing-Page-Sections/Benefits.js";
import SocialMedia from "views/Landing-Page-Sections/SocialMedia.js";
import Founders from "views/Landing-Page-Sections/Founders";
import Notification from "views/Landing-Page-Sections/Notification.js";

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
      <LandingPageNavbar />
      <LandingPageHeader />
      <div id="main" className="main">
        <Benefits />
        <SocialMedia />
        <Founders />
        <Notification />
      </div>
      <LandingPageFooter />
    </>
  );
}

export default LandingPage;
