import React, { Component } from 'react';

class WeatherFooter extends React.Component {

    render() {
        return <footer>
                <img className="yhwimg" src={require('../img/yhwlogo.jpg')} />
                <p>&copy; {(new Date().getFullYear())} Jacklau9515.github.io/YahooWeatherSE All rights reserved</p>
                </footer>;
      }
}

export default WeatherFooter;