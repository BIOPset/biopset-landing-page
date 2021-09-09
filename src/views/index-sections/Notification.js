
import React from "react";

// reactstrap components
import { Alert, Button, Container } from "reactstrap";

// core components

function Notification() {
  const [alertDanger, setAlertDanger] = React.useState(true);

  React.useEffect(() => {
    if (alertDanger) return;
    // the alert should be removed.

    return () => {
      document.body.getElementsByTagName.remove("danger-notification");
    };
  
  }, [alertDanger])
    
  return (
    <div id="danger-notification">
      <Alert className="alert-with-icon" color="danger" isOpen={alertDanger}>
        <Container>
          <div className="alert-wrapper">
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setAlertDanger(false)}
            >
              <i className="nc-icon nc-simple-remove" />
            </button>
            <div className="message">
              <i className="nc-icon nc-bell-55" /> PLEASE DO NOT USE BIOPSET IN REGULATED JURISDICTIONS.
            </div>
          </div>
        </Container>
      </Alert>
    </div>
  );
}

export default Notification;
