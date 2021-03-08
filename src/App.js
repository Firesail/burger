import React, {Component} from 'react';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
// import BurgerIngredient from './Components/Burger/BurgerIngredient/BurgerIngredient';

class App extends Component {
  render(){
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
          {/* <BurgerIngredient ingredient = 'bread-bottom'/> */}
        </Layout>
      </div>
      
    );
  }

}

export default App;
