import React from 'react';
import './style/Card.css';

export default function Card(props) {
    return(
        <div className="card"
             onClick={props.handleClick}
             key={props.id}
             id={props.id}
             wasclicked={props.wasClicked}
             
        >
            <img src={props.img} alt='card'/>
        </div>
    )


}