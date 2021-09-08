
/*eslint-disable*/
import React from "react";

function UsageNotification() {
  return (
    
    <div id="usagenotification">
      <div className="section text-center">
        <div className="alert-with-icon alert alert-danger fade show" role="alert">
          <div className="container">
            <div className="alert-wrapper">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <i className="nc-icon nc-simple-remove" />
              </button>
              <div className="message">
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
