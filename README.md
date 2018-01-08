# YahooWeatherSE-React-Webpack

## Overview
My first repository on GitHub to demonstrate using webpack + react + es6 to develop a componentized front-end project.

## Introduction

### Background
This is a React app using Yahoo Weather API to create a search engine that shows **real-time weather** and **forecast for the next seven days** in cities around the world.

![Demo](https://github.com/Jacklau9515/MarkdownPhotos/blob/master/YahooWeatherSE/YHWSE.JPG)

### Components
#### WeatherHeader Component
The WeatherHeader Component is used to demostrate the header of the weather condition in current city, including city name, weather condition, and temperature in centigrade.
```react
class WeatherHeader extends React.Component {
    render() {
      return <div className="weather-header">
        <div className="weather-header--location">{this.props.location}</div>
        <div className="weather-header--text">{this.props.text}</div>
        <div className="weather-header--temp">{this.props.temp}℃</div> 
      </div>
    }
  }
```

![Header](https://github.com/Jacklau9515/MarkdownPhotos/blob/master/YahooWeatherSE/Header.JPG)

#### WeatherForecase Component
The WeatherForecase Component is used to provide the forecast for the next seven days in current city. 

![Forecast](https://github.com/Jacklau9515/MarkdownPhotos/blob/master/YahooWeatherSE/Body.jpg)

condition codes taken from [yhw]:(https://developer.yahoo.com/weather/documentation.html#item)
icons from [icon]:(https://erikflowers.github.io/weather-icons/)

#### SearchForm Component
The SearchForm is use to upload the qurey via the **Yahoo Weather API** by using the **Promise** to control the Ajax. I define the promise $.ajax as a function called fetchweatherdata() in YahooWeather react.component.
```react
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
```
![Search](https://github.com/Jacklau9515/MarkdownPhotos/blob/master/YahooWeatherSE/Searchform.JPG)
