var React  = require('react');
var Navbar = require('./navbar.js');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
         <div>
           <Navbar />
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
