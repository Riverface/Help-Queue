import React from 'react';
import '../App.css';
import PropTypes from "prop-types";
import Footer from './Footer';

function Ticket(props){
  return (
    <React.Fragment>
    <div className='window container'>{props.location} - {props.names}
    <button className='homebutton'>
    </button>  
    </div>
    <p><em>{props.issue}</em></p>
    <hr/>
    <Footer className=''/>
    </React.Fragment>
  );
}
Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Ticket;


