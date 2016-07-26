var React  = require('react');
var routerModule = require('react-router');
var history = require("react-router/lib/HashHistory").history;

var Router = routerModule.Router;
var Route = routerModule.Route;
var Redirect = routerModule.Redirect;


//start loading the components

var App = require('./components/app.js');
var Home = require('./components/home.js');
var Navbar = require('./components/navbar.js');
var Products = require('./components/products.js');
var Cart = require('./components/cart.js');
var Itemsdescription = require('./components/items.description.js');


module.exports = (
  <Router history={history}>
    <Route component={App}>
      <Redirect from='/' to='/home' />
      <Route path='home' component={Home} />
      <Route path='products' component={Products} />
      <Route path='products/:productName' component={Itemsdescription} />

      <Route path='cart' component={Cart} />

    </Route>
  </Router>
);

