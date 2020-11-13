
import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import { v4 } from 'uuid'
class TicketControl extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterTicketList: [{location:'home',names:'farto and farty', issue:'too much farting'}],
            selectedTicket: null
        };
    }
    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
    };
    handleAddingNewTicketToList = (newTicket) => {
        const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
        this.setState({
            masterTicketList: newMasterTicketList,
            formVisibleOnPage: false
        });
    }
    handleChangingSelectedTicket = (id) => {
        const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
        this.setState({ selectedTicket: selectedTicket });
    }



    render() {
        let buttonText = "";
        let currentlyVisibleState = null;
        // let addTicketButton = null; // new code
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
            buttonText = "Return to Ticket List";
        } else {
            console.log(this.state)
            currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} />; // new code
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

export default TicketControl;