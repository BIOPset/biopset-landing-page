import React from "react";
import ReactDOM from "react-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

// pages
import LandingPage from "views/LandingPage.js";

// react
ReactDOM.render( <LandingPage />, document.getElementById('root') );
