# YahooWeatherSE-React-Webpack

## Overview
My first repository on GitHub to demonstrate using webpack + react + es6 to develop a componentized front-end project.

## Introduction

### Background
This is a React app using Yahoo Weather API to create a search engine that shows **real-time weather** and **forecast for the next seven days** in cities around the world.

![Demo](https://github.com/Jacklau9515/MarkdownPhotos/blob/master/YahooWeatherSE/YHWSE.JPG)

### Components
#### WeatherHeader Component
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
#### WeatherForecase Component
