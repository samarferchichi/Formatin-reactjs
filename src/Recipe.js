import React from 'react';
import './App.css';

const Recipe = ({title, calories, image, ingredients}) => {

    return(
        <div className="recipe" key={title} >
            <h1>
            { title.length < 20 ? `${title}` : `${title.substring(0, 40)}...` }
            </h1>
            <p>{calories}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>                  
                         {ingredient.text} 
                    </li>
                ))}
            </ol>
            <img className="imagecss" src={image} alt=""></img>
            <br></br>
        </div>
    );
};

export default Recipe;
