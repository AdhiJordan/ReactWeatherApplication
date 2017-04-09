var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
			return (
				<div>
				<h2 className="text-centered">Weather Example component</h2>
				<p>Some list of cities</p>
					<ol>
						<li>
							<Link to='/?location=Mexico City'>Mexico city</Link>
						</li>
						<li>
							<Link to='/?location=Rio'>Rio</Link>
						</li>
					</ol>
				</div>
				);
}
module.exports = Examples;