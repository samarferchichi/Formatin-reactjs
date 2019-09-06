import React from 'react';

const Form2 = props =>(
  <div  className="">
       <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem"}}>
          <center>
            <input className="form__input" name="recipeName" type="text"></input>
            <button className="form__button"> Search</button>
          </center>
        </form>  
  </div>
     
)
export default Form2;
