import Moment from 'moment';
import PropTypes from "prop-types";
import React from 'react'
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid'; // new code

function NewTicketForm(props) {
    return (
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleNewTicketFormSubmission}
                buttonText="Help!" />
        </React.Fragment>
    );

    function handleNewTicketFormSubmission(event) {
        event.preventDefault();
        props.onNewTicketCreation({
            names: event.target.names.value,
            location: event.target.location.value,
            issue: event.target.issue.value,
            id: v4(),
            timeOpen: new Moment(),
            formattedWaitTime: new Moment().fromNow(true)
        });
    }
}
NewTicketForm.propTypes = {
    onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
