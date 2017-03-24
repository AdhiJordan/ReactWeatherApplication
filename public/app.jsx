var CreationForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();
		var join = {};
		var name = this.refs.name.value;
		var message = this.refs.messages.value;
		if(name.length>0)
		{
		this.refs.name.value = '';
		join.name = name;
		
		}
		if(message.length>0)
		{
			this.refs.messages.value = '';
			join.message = message;
		}
		this.props.onNewGetName(join);
	},
render: function(){
	return(
		<div>
		
		<form onSubmit={this.onFormSubmit}>
			<input type="text" placeholder="Enter the name" ref="name" /><br />
			<input type="largeText" placeholder="Enter the message" ref="messages" /><br />
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
			message: this.props.message,
		};
	},
	handlerNewName: function(join){
		
		
		
		this.setState(join);
		
	
	},
	render: function(){
		var name = this.state.name;
		var message = this.state.message;
		return(
			<div>
			
			<p>My rule is {name}</p>
			<p>Message is {message}</p>
			<CreationForm onNewGetName={this.handlerNewName} 
			 />

			
			</div>
			);
	}
});
var sampleName="Jordan";
ReactDOM.render(
<Creation name={sampleName} />,
document.getElementById('app')
);