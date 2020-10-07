// imports you need
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Ticket from "./Components/Ticket";
import TicketList from "./Components/TicketList";
import Jay from "./brave_9fFAai3W72.png";

// function with the same name as the component

function App() {

return (<React.Fragment>
    My name brian I stinky
    I poop
    and I <button>fart out code sometimes</button>
    <Header/>
    <TicketList/>
    <div className=''></div>
    <Footer/>
    <img src={Jay} alt=""/>
    </React.Fragment>)
}

// export declairation of this component
export default App;