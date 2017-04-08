var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location) {
		var that = this;
		this.setState({isLoading: true})
		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
					location: location,
					temp: temp
			});
		}, function(errorMessage) {
			alert('hai');
			alert(errorMessage);
		});
		// this.setState({
		// 	location: location,
		// 	temp: 23
		// });
	},
	render: function() {
		var {temp, location, isLoading} = this.state;

		function renderMessage () {
			if(isLoading) {
				return <h3>Fetching the results ....</h3>;
				}
				else if(temp && location) {
					return <WeatherMessage temp={temp} location={location}/>;
				}

		}

			return (
				<div>
				<h2>Weather component Via Cities</h2>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				
				</div>
				);
		}
		
});
module.exports = Weather;