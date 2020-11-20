import React from 'react'
import '../BurgerIngredient/BurgerIngredient.css'

const burgerIngredient = ( props ) => {
    let ingredient = null;

    switch(props.type) {
        case ('bread-bottom'): 
            ingredient= <div className="bread-bottom"></div>;
            break;
        
        case ('bread-top'):
            ingredient= (
                <div className="bread-top">
                    <div className="seeds-1"></div>
                    <div className="seeds-2"></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient=<div className="meat"></div>
            break;

        case ('cheese'):
            ingredient=<div className="cheese"></div>
            break;

        case ('bacon'):
            ingredient=<div className="bacon"></div>
            break;

        case ('salad'):
            ingredient=<div className="salad"></div>
            break;

        default:
            break;
    }

    return ingredient
};

export default burgerIngredient