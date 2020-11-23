import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return (
            <li>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType="success" clicked={props.continue}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary