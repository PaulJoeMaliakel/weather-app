import React from "react";
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

const APIKEY = "2025dcb80fcd1d35b1e15005e591ce71";

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call =await fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid="+APIKEY+"&units=metric");
    const data = await api_call.json();

    console.log(data);
    console.log(city);
    console.log(country);
    console.log(APIKEY);

    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:""
      })
    }else{
      this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "please enter the value"
    })
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
                    <Titles />
                  </div>
                      <div className="col-xs-7 form-container">
                        <Form getWeather={this.getWeather}/>
                        <Weather temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}/>
                      </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
};

export default App;


        