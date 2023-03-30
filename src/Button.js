import React from 'react'


 export default function Button(props){

    return (
        <button 
            className={ props.light ? 'light-button' : 'dark-button' } onClick={e => props.handleMouseClick()}>
            Refresh
        </button>
    );
 }