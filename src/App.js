// imports you need
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Jay from "./brave_9fFAai3W72.png";
import TicketControl from "./Components/TicketControl.jsx";

// function with the same name as the component

function App() {

    return (<React.Fragment>
        <Header />
        <TicketControl />
        <Footer />
        <img src={Jay} alt="" />
    </React.Fragment>)
}

// export declaration of this component
export default App;