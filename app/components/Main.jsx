var React = require('react');

var Nav = require('Nav');
var Main = React.createClass({
render: function() {
  return (
<div>
    <Nav />
   {this.props.children}
    <h1>Hallo weather app</h1>
</div>

    );
}
});
module.exports = Main;