import * as a from './../actions';

import EditTicketForm from './EditTicketForm';
import Moment from 'moment';
import NewTicketForm from './NewTicketForm';
import PropTypes from "prop-types";
import React from 'react';
import TicketDetail from './TicketDetail';
import TicketList from './TicketList';
import { connect } from 'react-redux';
import { v4 } from 'uuid'

class TicketControl extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            formVisibleOnPage: false,
            selectedTicket: null,
            editing: false
        };
    }
    updateTicketElapsedWaitTime = () => {
        const { dispatch } = this.props;
        Object.values(this.props.masterTicketList).forEach(ticket => {
            const newFormattedWaitTime = ticket.timeOpen.fromNow(true);
            const action = a.updateTime(ticket.id, newFormattedWaitTime);
            dispatch(action);
        });
    }

    componentDidMount() {
        this.waitTimeUpdateTimer = setInterval(() =>
            this.updateTicketElapsedWaitTime(),
            1000
        );
    }

    // We won't be using this method for our help queue update - but it's important to see how it works.
    componentDidUpdate() {
        console.log("component updated!");
    }

    componentWillUnmount() {
        console.log("component unmounted!");
        clearInterval(this.waitTimeUpdateTimer);
    }

    handleEditingTicketInList = (ticketToEdit) => {
        const { dispatch } = this.props;
        this.setState({
            editing: false,
            selectedTicket: null
        });
        const { id, names, location, issue } = ticketToEdit;
        const action = {
            type: 'ADD_TICKET',
            id: id,
            names: names,
            location: location,
            issue: issue,
        }
        dispatch(action);

    }
    handleEditClick = () => {
        this.setState({ editing: true });
    }

    handleClick = () => {
        console.log(this.state.formVisibleOnPage);
        if (this.state.selectedTicket != null) {
            this.setState({
                selectedTicket: null,
                editing: false
            });
        } else {
            const { dispatch } = this.props;
            const action = a.toggleForm();
            dispatch(action);
            console.log(this.state.formVisibleOnPage);
        }
    }

    handleAddingNewTicketToList = (newTicket) => {
        const { dispatch } = this.props;
        const action = a.addTicket(newTicket);
        dispatch(action);
        const action2 = a.toggleForm();
        dispatch(action2);
    }

    handleChangingSelectedTicket = (id) => {
        const selectedTicket = this.props.masterTicketList[id];
        this.setState({ selectedTicket: selectedTicket });
    }
    handleDeletingTicket = (id) => {
        const { dispatch } = this.props;
        const action = a.deleteTicket(id);
        dispatch(action);
        this.setState({ selectedTicket: null });
    }



    render(props) {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.editing) {
            currentlyVisibleState = <EditTicketForm ticket={this.state.selectedTicket} onEditTicket={this.handleEditingTicketInList} />
            buttonText = "Return to Ticket List";
        } else if (this.state.selectedTicket != null) {
            currentlyVisibleState = <TicketDetail ticket={this.state.selectedTicket} onClickingDelete={this.handleDeletingTicket} onClickingEdit={this.handleEditClick} />
            buttonText = "Return to Ticket List";
            // While our TicketDetail component only takes placeholder data, we will eventually be passing the value of selectedTicket as a prop.
        } else if (this.state.formVisibleOnPage) {
            // This conditional needs to be updated to "else if."
            currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
            buttonText = "Return to Ticket List";
        } else {
            currentlyVisibleState = <TicketList ticketList={this.props.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
            // Because a user will actually be clicking on the ticket in the Ticket component, we will need to pass our new handleChangingSelectedTicket method as a prop.
            buttonText = "Add Ticket";
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </ React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        masterTicketList: state
    }
}
TicketControl.propTypes = {
    masterTicketList: PropTypes.object
};
TicketControl = connect(mapStateToProps)(TicketControl);
export default TicketControl;