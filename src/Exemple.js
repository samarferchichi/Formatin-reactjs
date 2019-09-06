import React, {useEffect, useState} from 'react';
import './App.css';
import Exemp from './Exemp';

const Exemple = () => {

    const APP_ID = "bcf8f365";
    const  APP_KEY = "8476d0edb3424ca41a6de6f5bedd717c";
    const [exemple, setExemple] = useState([]);

  const getExemple= async () => {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      console.log(data.hits);
      setExemple(data.hits);
      console.log(exemple);
  }

  useEffect(() => {
    getExemple();
}, []);
  
    return (
      <div className="myApp">
        <h1>Exemple</h1>
        <div>
          {exemple.map(ex => (
                  <Exemp
                      key={ex.recipe.label} 
                      title={ex.recipe.label}
                      calories={ex.recipe.calories} 
                      image={ex.recipe.image}
                      ingredientLines={ex.recipe.ingredientLines} />
            ))}
        </div>
      </div>
    );
  
}

export default Exemple;
