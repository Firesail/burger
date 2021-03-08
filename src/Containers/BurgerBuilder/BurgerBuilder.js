import React, {Component} from 'react';
import Auxy from '../../HOC/Auxy';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
    render(){
        return(
            <Auxy>
                <div>Burger</div>
                <Burger/>
                <div>Build Controls</div>
            </Auxy>
        );
    }
}

export default BurgerBuilder;