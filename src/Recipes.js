import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const Recipes = () => {
    const APP_ID = "bcf8f365";
    const  APP_KEY = "8476d0edb3424ca41a6de6f5bedd717c";

    const exampleReq = 
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState();


    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    return(
        <div className="myApp">
            <form onSubmit={getSearch} className="search-form" >
            <header className="App-header">
                 <h1 className="App-title">Recipe <b>2</b> Search</h1>
            </header>
            <input className="form__input" value={search} onChange={updateSearch}  type="text"></input>
            <button type="submit" className="form__button"> 
                Search
            </button>
            </form>
            <div className="recipescss">
            {recipes.map(recipe => (
                <Recipe 
                    key={recipe.recipe.label} 
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories} 
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients} />
            ))}
           
            </div>
        </div>
    );
};

export default Recipes;
