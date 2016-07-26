var React  = require('react');


var Cart = React.createClass({
    getInitialState : function() {
        var _cart = localStorage.getItem("react_cart");
        var temp = {
            "cartItems" : JSON.parse(_cart),
            "total_amount" : 0
        }
        return {
            cart : temp
        }
    },


  render: function() {

    return (
      <div className="container">

                <div>
                    <table className="table">
                        <tr>
                            <td>Item Name</td>
                            <td>price</td>
                        </tr>

                            {
                                this.state.cart.cartItems.map(function(item,i){
                                    return(

                                        <tr key={i}>
                                            <td >{item.name}</td>
                                            <td >{item.price}</td>
                                         </tr>
                                        )
                                })
                            }

                    </table>
                    <div>Total : <Total /></div>
                </div>

      </div>
    )
  }
});

var Total = React.createClass({

    getInitialState : function() {
        var _cart = localStorage.getItem("react_cart");
        return {
            cart : JSON.parse(_cart)
        }
    },
    render : function() {
        var _total = 0;

         this.state.cart.map(function(item,i){
             _total = parseInt(_total) + parseInt(item.price);
        });
        return (
                <span>{_total}</span>
        )
    }
})

module.exports = Cart;
