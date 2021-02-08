import '../App.css';

import PropTypes from "prop-types";
import React from 'react';

function Ticket(props) {
  return (
    <React.Fragment>

      <div onClick={() => props.whenTicketClicked(props.id)}>
        { /* We add a div with an onClick function. Don't forget to close out the div below! */}
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        {props.formattedWaitTime}
        <hr />
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenTicketClicked: PropTypes.func, // new PropType
  formattedWaitTime: PropTypes.string
};

export default Ticket;


