import React, { Component } from 'react';

class WeatherHeader extends React.Component {
    render() {
      return <div className="weather-header">
        <div className="weather-header--location">{this.props.location}</div>
        <div className="weather-header--text">{this.props.text}</div>
        <div className="weather-header--temp">{this.props.temp}℃</div> 
      </div>
    }
  
  }

export default WeatherHeader;