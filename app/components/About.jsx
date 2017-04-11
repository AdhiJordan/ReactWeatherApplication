var React = require('react');

var About = React.createClass({ 
	getResult: function () {
		    var i;
    var a = 'FIZZ';
    var b = 'BUZZ';
    var c = 'FIZZBUZZ';
    for(i=1 ; i <= 100; i++)
        if(!(i % 3))
            if(!(i % 5))
            	
                 document.write('<br />',c);
                
            else
            	
                 document.write('<br />',a);
              
        else if(!(i % 5))
        
             document.write('<br />',b);
              
        else
        
            document.write('<br />',i);
            
     
	},
	render: function () {
		
				return (
					<div>
				<p>Print numbers from 1to 100!</p>
				<p>Condition 1: multiples of three must be print is as "FIZZ"</p>
				<p>Condition 2: multiples of five must be print is as "BUZZ"</p>
				<p>Condition 3: multiples of three and five must be print is as "FIZZBUZZ"</p>
				
				<form onSubmit={this.getResult}>
					<input type="submit" className="button" value="Get Result" />
				</form>

				</div>
				);
}
});
module.exports = About;