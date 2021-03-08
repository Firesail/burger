import React from 'react';
// import burger from '../../Burger';
import './BuildControl.css';

const buildControl = (props) => (
    <div>
        <div className = 'BuildControl'>{props.label}
        <button className = 'Less'>Less</button>
        <button className = 'More'>More</button>
        </div>
    </div>
);

export default buildControl;
