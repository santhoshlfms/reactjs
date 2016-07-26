var React  = require('react');
var routerModule = require('react-router');
var Link = routerModule.Link;

var Navbar = React.createClass({
  render: function() {
    return (
      <nav>
        <ul>
          <Link to="/home"><li>Home</li></Link>
          <Link to="/products"><li>Products</li></Link>
          <Link to="/cart"><li>cart</li></Link>
        </ul>
      </nav>
    );
  }
});

module.exports = Navbar;
