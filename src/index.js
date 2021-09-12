import React from "react";
import ReactDOM from "react-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

// pages
import Index from "views/Index.js";

// others

const App = () => {
  return ( <Index /> );
}

ReactDOM.render( <App />, document.getElementById('root') );
