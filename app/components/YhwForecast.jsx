import React, { Component } from 'react';

class WeatherForecast extends React.Component {
  
    // condition codes taken from https://developer.yahoo.com/weather/documentation.html#item
    // icons from https://erikflowers.github.io/weather-icons/
  
    render() {
    // you need to do to reference an icon in your HTML is type <i class="wi wi-night-sleet"></i>
      const icon = `wi wi-yahoo-${this.props.code}`;
  
      return <div className="forecast--item">
        <div className="col day">{this.fromMonToSun(this.props.day)}</div>
        <div className="col icon"><i className={icon}></i></div>
        <div className="col high">{this.props.high}<i className="wi wi-celsius"></i></div>
        <div className="col low">{this.props.low}<i className="wi wi-celsius"></i></div>
      </div>
    }
  
  
    fromMonToSun(day) {
      let week = {
        'Mon': 'Monday',
        'Tue': 'Tuesday',
        'Wed': 'Wednesday',
        'Thu': 'Thursday',
        'Fri': 'Friday',
        'Sat': 'Saturday',
        'Sun': 'Sunday'
      };
      return week[day];
    }
  }

  export default WeatherForecast;