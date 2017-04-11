var React = require('react');
var WeatherForm = React.createClass({
	onFormSubmit: function(e) {
		var location = this.refs.location.value;

		if(location.length >0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},
	render: function() {
			return (
<div>
				<h2>Weather Form </h2>
				<form onSubmit={this.onFormSubmit}>
				<input type="search" placeholder="enter city" ref="location" />
				<button className="button expanded">Get Weather Report</button>
				</form>
				</div>
				);
	}
});

module.exports = WeatherForm;