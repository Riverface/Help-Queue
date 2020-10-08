// imports you need
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TicketList from "./Components/TicketList";
import Jay from "./brave_9fFAai3W72.png";
import { ButtonZoo } from "./Components/ButtonZoo";


// function with the same name as the component

function App() {

return (
    <React.Fragment>
        <Header/>
    </React.Fragment>)
}

function thing(){
  return (<div>
            <img src='../Peter_Potamus.webp'></img>
            <span>
            Peter Pottamus:Did YOU...Get that thing...That I sent You?
            </span>
        </div>)
}

// function FartButt(){

//     return (
//     <React.Fragment>
//     My name brian I stinky
//     I poop
//     and I 
//     <button>fart out code sometimes</button>
//     <TicketList/>
//     <div className=''></div>
//     <Footer/>
//     <img src={Jay} alt=""/>
//     </React.Fragment>
//     );
// }
export default App;