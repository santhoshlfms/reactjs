var React  = require('react');

var Itemsdescription = React.createClass({
  render: function() {
    return (
      <div className="container">
        YOU HAVE CLICKED <b>{this.props.params.productName}</b>, IM GETTING THIS FROM URL !
      </div>
    );
  }
});

module.exports = Itemsdescription;
