var React = require('react');


var WeatherMessage = ({temp, location}) => {
	
		return (

				<h2>Message for the given  Weather {location} is {temp}*c</h2>
				);
}

module.exports = WeatherMessage; 