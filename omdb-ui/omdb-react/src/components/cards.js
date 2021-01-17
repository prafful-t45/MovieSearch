import React from 'react'; 
export default function Cards(props){
    console.log(props); 
    return(
        <p>I'm a card component {props.name1} {props.name2}.</p>
    )
}
