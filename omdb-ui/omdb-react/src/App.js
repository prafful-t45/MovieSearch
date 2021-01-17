import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Cards from './components/cards'
// A component named App is created
function App() {
    const cardName = 'Card No. 1'; 
    return ( 
        // Only 1 top level tag should be there  
        <div className="jumbotron">  
        < p className="Color"> Hello There </p>
        <Cards name1={cardName} name2={cardName}/>   
        </div> 

        // Top level Tag can be empty as well, need not be a div
        // <> 
        // < p className="Color" > Hello There </p>  
        // <Cards name1={cardName} name2={cardName}/>    
        // </>

        // Within JS, function can return JSX. 
        // Within JSX anything within curly braces is JS.   

    ); 
    } 
    export default App;