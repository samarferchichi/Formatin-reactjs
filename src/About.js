import React, { Component } from 'react';
import './App.css';

import Form2 from "./components/Form2";
import Recipes from "./components/Recipes";

const API_KEY = "e9d5b3aaed815a78ecf570d29ab77d30";

class About extends Component {

  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}%20chicken`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(data);
  }

  render() {
    return (
      <div className="App" >
        <div className="wrapper3">
        <header className="App-header">
          <h1 className="App-title">Recipe <b>1</b> Search</h1>
        </header>
        <Form2 getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
        </div>
      </div>
    );
  }
}

export default About;