var React = require('react');
var {Link, IndexLink} = require('react-router');



var Nav = () => {
		return (
			<div>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get weather</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get about</Link>
			<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Examples</Link>
			</div>
			);
}
module.exports = Nav;