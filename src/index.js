import React from "react";
import ReactDOM from "react-dom";

// import react router
import { BrowserRouter } from 'react-router-dom'

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

// pages

// react
const App = () => (
  <BrowserRouter>
    <h1>Hello World</h1>
  </BrowserRouter>
);

ReactDOM.render( <App />, document.getElementById('root') );
