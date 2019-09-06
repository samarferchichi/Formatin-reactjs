import React from 'react';
import './App.css';

const Exemp = ({title, calories, image, ingredientLines}) => {

    return(
        <div className="recipe2" key={title} >
            <h1>
            { title.length < 20 ? `${title}` : `${title.substring(0, 40)}...` }
            </h1>
            <p>{calories}</p>
            <ol>
                {ingredientLines}
            </ol>
            <img className="imagecss2" src={image} alt=""></img>
            <br></br>
        </div>
    );
};

export default Exemp;
