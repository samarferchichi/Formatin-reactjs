import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop(){


  const [items, setItems] = useState([]);

  const fetchItems = async () => {

    const data = await fetch(
      'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get'
      );

      const items = await data.json();
      console.log(items.items);
      setItems(items.items);

  };
  useEffect(() => {
    fetchItems();
  }, []);

    return (
       <div className="wrapper2"> 
         <div className="row">
           <div className="col-xs-8" >
             <div className="Fortnite">
                
             </div>
           </div>
           <div className="col-xs-4">
             <br></br>
             <br></br>
              <div className="dropdown" >
                  <button className="dropbtn">Fortnite show</button>
                  <div className="dropdown-content">
                      {items.map(item => (
                        <h3 className="" key={item.itemid}>
                            <Link to={`/shop/${item.itemid}`}> {item.name} </Link>
                        </h3>
                      ))}
                  </div>
              </div>
           </div>
         </div>
       </div>
    );
  }
      
export default Shop;
