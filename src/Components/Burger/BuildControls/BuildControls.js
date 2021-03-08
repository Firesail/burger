import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const check = () => {
    return(
        <div>
            Checking
        </div>
    )
}

const buildControls = (props) => (

    <div className = 'BuildControls'>
        {console.log("BuildControllers")}
        {controls.map(ctrl => {
            return  <BuildControl 
            key = {ctrl.label} 
            label = {ctrl.label} 
            added = {() => props.added(ctrl.type)}
            deleted = {() => props.deleted(ctrl.type)}
            />
        })}
        {check}
    </div>
);

export default buildControls;