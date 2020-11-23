import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
    }
    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

         return sum > 0
    }

    purchaseHandler = () => {
        this.setState({purchasing: !this.state.purchasing});    
    }

    purchaseContinueHandler = () => {
        alert('You Continue!');
    }

    render() {
        const disableInfo = {
            ...this.props.ings
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
                    <OrderSummary 
                        price={this.props.totalPrice} 
                        continue={this.purchaseContinueHandler}
                        cancel={this.purchaseHandler}
                        ingredients={this.props.ings}
                    />
                </Modal>
                <Burger ingredients={this.props.ings} /> 
                <BuildControls 
                    ingredientAdded = {this.props.onIngredientAdded}
                    ingredientRemoved = {this.props.onIngredientRemoved}
                    disabled = {disableInfo}
                    price = {this.props.totalPrice}
                    purchasable = {this.updatePurchaseState(this.props.ings)}
                    order = {this.purchaseHandler}
                />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice        
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (name) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: name}),
        onIngredientRemoved: (name) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: name})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)