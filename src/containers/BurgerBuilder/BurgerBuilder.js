import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = this.state.ingredients[type] + 1;;
        
        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} /> 
                <BuildControls ingredientAdded = {this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder