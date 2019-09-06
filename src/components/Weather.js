import React, { Component } from 'react';


const Weather = ({temperature, city, country, xx, error, bb, description}) => {
  
    return (
     
      <center> 
     <div className="weather__info">
              {
                city && country && <p className="weather__key">Localisation: 
                <span className="weather__value">{city}, {country}</span>
                </p>
              } 
              {
                temperature && <p className="weather__key">Temperature: 
                 <span className="weather__value">{temperature}    </span>
             
                </p>
                } 
                       
                {
                description && <p className="weather__key">Description: 
                 <span className="weather__value">{description}</span>
             
                </p>
                }

              {
                xx && <p className="weather__key">Humedity: 
                <span className="weather__value">{xx}</span>
                </p>
              } 

             {
                bb && <p className="weather__key">Pressure: 
                 <span className="weather__value">{bb}</span>
             
                </p>
                } 
              <div className="weather__error">
                 {error} 
              </div>
              
          </div>
          </center>
    );
  }


export default Weather;
