import React, {useState, useEffect} from 'react';
import './App.css';

function ItemDetail({ match }){
 

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`);

    const item = await fetchItem.json();
      setItem(item);
    console.log("eee",item);
  };

  useEffect(() => {
    fetchItem();
  //console.log(match);
  }, []);

    return (
      <div>
      <center>
      <br></br>
          <h1>{item.name}</h1>
          <br></br><br></br>
          <img src={item.images.transparent}/>
          <img src={item.images.information}/>

      </center>
       </div>
    );
  }
      
export default ItemDetail;
