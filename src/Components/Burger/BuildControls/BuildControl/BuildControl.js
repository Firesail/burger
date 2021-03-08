import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div>
        {console.log("BuildController 1")}
        <div className = 'BuildControl'>{props.label}
        <button className = 'Less' onClick = {props.deleted}>Less</button>
        <button className = 'More' onClick = {props.added}>More</button>
        </div>
    </div>
);

export default buildControl;
