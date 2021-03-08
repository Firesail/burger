import React, {Component} from 'react';
import Auxy from '../../HOC/Auxy';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0
        }
    }

    render(){
        return(
            <Auxy>
                <div>Burger</div>
                <Burger ingredients = {this.state.ingredients}/>
                <div>Build Controls</div>
            </Auxy>
        );
    }
}

export default BurgerBuilder;