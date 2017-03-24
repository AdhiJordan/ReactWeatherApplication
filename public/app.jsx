var CreationForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();
		var name = this.refs.name.value;
		if(name.length>0)
		{
		this.refs.name.value = '';
		this.props.onNewGetName(name);
		}
		else
		{
			this.setState({name: name});
		}
	},
render: function(){
	return(
		<div>
		<p>Hallo Girripillai</p>
		<form onSubmit={this.onFormSubmit}>
			<input type="text"  ref="name" />
			<button>Click me</button>
			</form>
			</div>
		);
}
});
var Creation = React.createClass({
	getDefaultProps: function() {
		return{
			name: 'Dont keep calm',
			message: 'hallo'
		};
	},
	getInitialState: function(){
		return{
			name: this.props.name,
		};
	},
	handlerNewName: function(name, e){
		
		
		
		this.setState({name: name});
	
	},
	render: function(){
		var name = this.state.name;
		var message = this.props.message;
		return(
			<div>
			<h1>Hallo Adhithya lets get this done</h1>
			<p>My rule is {name}</p>
			<p>{message + '!!!'}</p>
			<CreationForm onNewGetName={this.handlerNewName} />

			
			</div>
			);
	}
});
var sampleName="Jordan";
ReactDOM.render(
<Creation name={sampleName} />,
document.getElementById('app')
);