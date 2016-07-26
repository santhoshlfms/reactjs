var React  = require('react');

var Items = require('./items.js');
var DATA = [{
  "id": 1,
  "name": "Apple",
  "price": 8


}, {
  "id": 2,
  "name": "Orange",
  "price": 9


}, {
  "id": 3,
  "name": "Pine",
  "price": 10


}, {
  "id": 4,
  "name": "Water-melon",
  "price": 11
}]

var Products = React.createClass({
  getInitialState : function() {
    var items = [];
        if(typeof(Storage) !== "undefined") {
          if(localStorage.getItem("react_cart") == "undefined"
              || localStorage.getItem("react_cart") == null) {
              localStorage.setItem("react_cart",JSON.stringify(items));
          }

        }
        return {
            fruits : DATA
        }
    },
  render: function() {

    return (
      <div className="container">
          <div>
            {
              this.state.fruits.map(function(fruit,i){
                return(<Items key={i} name={fruit.name} price={fruit.price} />)
              })
            }
          </div>
      </div>
    );
  }
});

module.exports = Products;
