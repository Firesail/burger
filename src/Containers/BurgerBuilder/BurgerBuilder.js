import React, {Component} from 'react';
import Auxy from '../../HOC/Auxy';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 2,
            bacon: 1,
            cheese: 0,
            meat: 0
        }
    }

    render(){
        return(
            <Auxy>
                <div>Burger</div>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls/>
            </Auxy>
        );
    }
}

export default BurgerBuilder;