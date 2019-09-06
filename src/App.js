import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './Nav.js'
import About from './About.js'
import Shop from './Shop.js'
import Meteo from './Meteo.js'
import Recipes from './Recipes.js'
import Exemple from './Exemple.js'
import IndexConv from './IndexConv.js'

import ItemDetail from './ItemDetail.js'

const Home = () =>(
  <div>
    <h1>Home page</h1>
  </div>
)


class App extends React.Component {

  render() {
    return (
      <div>
               <Router>
                 <div className="App">

                  <Nav />

                  <Switch>
                      <Route path="/" exact component={Home}/>
                      <Route path="/recipes1" component={About} />
                      <Route path="/shop" exact component={Shop} />
                      <Route path="/shop/:id" component={ItemDetail}/>
                      <Route path="/meteo" component={Meteo} />
                      <Route path="/recipes2" component={Recipes} />
                      <Route path="/exemple" component={Exemple} />
                      <Route path="/convertisseur" component={IndexConv} />


                  </Switch>
                  </div>
                </Router> 

      </div>

    );
  }
}

export default App;
