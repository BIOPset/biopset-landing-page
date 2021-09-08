
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function UsageNotification() {
  return (
    
    <div id="usagenotification">
      <div className="section text-center">
        <div class="alert-with-icon alert alert-danger fade show" role="alert">
          <div class="container">
            <div class="alert-wrapper">
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <i class="nc-icon nc-simple-remove" />
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
