var React = require('react');

var Nav = require('Nav');


var Main = (props) => {

	  return (
<div>
    <Nav />
   {props.children}
    <h1>Hallo weather app</h1>
</div>

    );
}

 module.exports = Main;
