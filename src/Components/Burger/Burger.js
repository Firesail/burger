import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transIngredients = [];

    for(const itr in props.ingredients){
        for(let i = 0; i<props.ingredients[itr];i++){
            console.log(itr);
            transIngredients.push(<BurgerIngredient key={itr + i} type={itr}/>);
        }
    }

    if(transIngredients.length === 0){
        transIngredients = <p>Please Start Adding :D</p>
    }

    return(
        <div className="Burger">
            <BurgerIngredient type = "bread-top"/>
            {transIngredients}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    )
}

export default burger;