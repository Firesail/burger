import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    
    let transIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        }); 
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    console.log(transIngredients.length);
    if(transIngredients.length === 0){
        transIngredients = <p>Please Start Adding :D</p>
    }


    return(
        <div className="Burger">
            <BurgerIngredient type = "bread-top"/>
            {/* <BurgerIngredient type = "cheese"/>
            <BurgerIngredient type = "bacon"/>
            <BurgerIngredient type = "cheese"/> */}
            {transIngredients}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    )
}

export default burger;