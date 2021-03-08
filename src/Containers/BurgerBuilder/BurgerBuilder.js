import React, {Component} from 'react';
import Auxy from '../../HOC/Auxy';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const prices = {
    salad: 2,
    bacon: 5,
    cheese: 5,
    meat: 10
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },

        totalprice: 6
    }

    addIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        let newCount = oldCount + 1;
        let newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type] = newCount;
        
        let additionPrice = prices[type];
        let oldPrice = this.state.totalprice;
        let newPrice = oldPrice + additionPrice;
        this.setState({totalprice: newPrice, ingredients: newIngredients});
    }
     
    delIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        if(oldCount === 0){
            return;
        }

        let newCount = oldCount - 1;
        let newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type] = newCount;
        
        let additionPrice = prices[type];
        let oldPrice = this.state.totalprice;
        let newPrice = oldPrice + additionPrice;
    
        this.setState({totalprice: newPrice, ingredients: newIngredients});
    }

    render(){
        return(
            <Auxy>
                <div>Burger</div>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls added = {this.addIngredientHandler} deleted = {this.delIngredientHandler}/>
            </Auxy>
        );
    }
}

export default BurgerBuilder;