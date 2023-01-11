import React from 'react';
import './style/Header.css'

export default function Header(props) {
    return(
        <>
        <header>
            <div>Memory Game: Click only once in each person to win</div>
            <div>Score: {props.score}</div>
        </header>
        </>
    )
}