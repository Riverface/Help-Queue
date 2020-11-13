import React from 'react';
import jayRef from '../brave_9fFAai3W72.png';
import '../App.css';
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr />
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenTicketClicked: PropTypes.func // new PropType
};

export default Ticket;


