import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
];

const buildControls = (props)=> (
    <div className="build-controls">  
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p> 
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
            className="order-button" 
            disabled={!props.purchasable}
            onClick={props.order}
        >
            ORDER NOW
        </button>
    </div>
);

export default buildControls