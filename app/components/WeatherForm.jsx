var React = require('react');
var WeatherForm = React.createClass({
	render: function() {
			return (
<div>
				<h2>Weather Form </h2>
				<input type="text" placeholder="enter city" />
				<button>Get Weather Report</button>
				</div>
				);
	}
});

module.exports = WeatherForm;