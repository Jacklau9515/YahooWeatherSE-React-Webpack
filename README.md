# YahooWeatherSE-React-Webpack

## Overview
My first repository on GitHub to demonstrate using **webpack + react + es6** to develop a componentized front-end project. Each module related css, img, js files are put together to make the project more intuitive, and delete/modify relevant module will be more convenient. [Demo](https://jacklau9515.github.io/YahooWeatherSE/)  

Features：<br>
1. Compile jsx, es6, scss and other resources <br>
2. Automatic introduction of static resources to the corresponding html page <br>
3. Compile and refresh the browser in real time <br>
4. Automatically package the module according to the specified modular specifications <br>
5. CSS automatically add a browser kernel prefix <br>
6. On demand packaged merger js, css

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

condition codes taken from [yhw]:(https://developer.yahoo.com/weather/documentation.html#item)<br>
icons from [icon]:(https://erikflowers.github.io/weather-icons/)
![Icon Preview](http://i.imgur.com/XmZW2q3.png)

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

## Installation
```npm
npm install --global webpack
npm i babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
npm install webpack-dev-server -g
npm install bootstrap --save
```

## Licensing
* Weather Icons licensed under [SIL OFL 1.1](http://scripts.sil.org/OFL)
