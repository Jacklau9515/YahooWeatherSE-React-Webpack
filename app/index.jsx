import React from 'react';
import {render} from 'react-dom';
import './styles/index.css';
import WeatherHeader from './components/YhwHeader';
import WeatherForecast from './components/YhwForecast';
import $ from 'jquery'; //define $ sign to make the cache recovery the jQuery syntax

class Yahooweather extends React.Component {
    constructor(){
        super();
            //the yahoo weather json format
            this.state = {
              search: 'Sydney, Australia',
              weather: {
                  units: {
                      temperature: 'C'
                  },
                  location: {
                      city: 'Loading'
                  },
                  item: {
                      title: '',
                      condition: {
                          temp: 0,
                          text: ''
                      },
                      forecast: []
                  }
              }
          };
      }
//when finish render(), excute the fetchweatherdata() at once
    componentDidMount() {
        this.fetchweatherdata();
      }
    
    locationSubmit(e) {
        e.preventDefault();
        let v = document.getElementById('place').value;
        this.setState({search: v});
        this.fetchweatherdata();
      }
    
    setupForecast() {
        return this.state.weather.item.forecast.map(d => {
          return (<WeatherForecast key={d.date} day={d.day} high={d.high} low={d.low} text={d.text} code={d.code} date={d.date}/>);
        });
      }
    
    //use promise to control the AJAX
    fetchweatherdata() {
        var promise = $.ajax({
            url: 'https://query.yahooapis.com/v1/public/yql',
            data: {
                q: `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${this.state.search}") and u='c'`,
                format: 'json',
                env: 'store://datatables.org/alltableswithkeys'
            }
        });
        promise.done(function(res){
            return this.setState({weather: res.query.results.channel});
        }.bind(this));
        promise.fail(function(){});
    }

    render() {
        const forecast = this.setupForecast();
        
        return <div className="weather">
        <WeatherHeader
          location={this.state.weather.location.city}
          temp={this.state.weather.item.condition.temp}
          text={this.state.weather.item.condition.text}
          unit={this.state.weather.units.temperature}
        />
        <div className="forecast">{forecast}</div>
        <form onSubmit={this.locationSubmit.bind(this)} className="search">
          <label htmlFor="place" >Search</label>
          <input type="text" id="place" name="place"></input>
          <button type="submit">Update</button>
        </form>
        </div>
    }
  }

render(<Yahooweather />, document.getElementById('yhwse'));