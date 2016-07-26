var React  = require('react');
var routerModule = require('react-router');
var Link = routerModule.Link;

var Items = React.createClass({

    storeItemInCart : function() {
        var item = {
            "name" : this.props.name,
            "price" : this.props.price
        }
        var CartItems = JSON.parse(localStorage.getItem("react_cart"));
        if(CartItems!=="undefined" && CartItems.length >= 0) {
            CartItems.push(item);
            localStorage.setItem("react_cart",JSON.stringify(CartItems));
        }

    },

    render:function() {
        return (
            <div className="panel">
              <div>
                {this.props.name}
                <p className=" strong">{this.props.price}</p>
                    <p className=" strong">
                        <button
                            onClick={this.storeItemInCart}
                            className="btn btn-xs btn-danger">
                            Add to cart</button> <br />
                            <Link to={'/products/'+this.props.name }
                                params={{ productName: this.props.name }}>
                                <li>{this.props.name} Description</li>
                            </Link>
                    </p>
              </div>
            </div>
        )
    }
});

module.exports = Items;
