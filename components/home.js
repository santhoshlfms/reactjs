var React  = require('react');


var Home = React.createClass({
  render: function() {
    return (
      <div className="container">
        <p>Welcome to TAG shopping </p>
        <div className="row">
            This is an sample react shopping cart.
        </div>

        <div>{this.props.children}</div>
      </div>
    );
  }
});

module.exports = Home;
