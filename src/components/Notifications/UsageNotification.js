
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function UsageNotification() {
  return (
    
    <div id="usagenotification">
      <div className="section text-center">
        <div className="alert-with-icon alert alert-danger fade show" role="alert">
          <div className="container">
            <div className="alert-wrapper">
              <button type="button" className="close" dataDismiss="alert" ariaLabel="Close">
                <i className="nc-icon nc-simple-remove" />
              </button>
              <div class="message">
                <h6>PLEASE DO NOT USE BIOPSET IN REGULATED JURISDICTIONS.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsageNotification;
