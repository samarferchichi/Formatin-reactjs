import React from 'react';
import './App.css';

import Titels from './components/Titels.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'



const API_KEY = "f3b676593beb9068404db1cfb689e568";

class Meteo extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    xx: undefined,
    description: undefined,
    error: undefined,
    bb: undefined
  }

  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
    //console.log(data.main.humidity);
    if(city && country){
 
      this.setState({
    
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        xx: data.main.humidity,
        error:"",
        bb: data.main.pressure,
        description: data.weather[0].description
      });
    }else{
      this.setState({
    
        temperature: undefined,
        city: undefined,
        country: undefined,
        xx: undefined,
        description: undefined,
        bb: undefined,
        error: "pleas remplir value"
      });

    }

  }

  render() {
    return (
      <div>
        <div className="wrapper">

          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titels/>
                </div>
                <div className="col-xs-7 form-container">
                <br></br>
                <br></br>
                <br></br>     
                <br></br>
                <Form getWeather={this.getWeather}/>
                  <Weather 
                    temperature={this.state.temperature }
                    city={this.state.city}
                    country={this.state.country}
                    xx={this.state.xx}
                    error={this.state.error}
                    bb = {this.state.bb}
                    description = {this.state.description}
                  
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    );
  }
}


export default Meteo;
