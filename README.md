# reactjs
Repo holds examples and templates to start React js

This repo will be updated as I progress, and this repo is for people like me, who finds reactjs harder to understand.

I will try to update the repo with as much example as I could, as I progress on.

# App

Before we develop an React app, Im going to setup the environments we need.
Im going to use webpack, webpack is an module builder it takes care of all dependencies and emits static contents.

An Basic setup is available in starter folder
I have included all dependencies in package.json file,so you need node and npm to install these.

I have updated the package.json with dev dependencies and react dependencies.

 * Clone the starter folder and setup up environment
   To start learning what is webpack look into webpack
   (https://webpack.github.io/)
   or install webpack  'npm install webpack -g'

   Install dependencies by executing 'npm install'

   once the dependencies are downlaoded execute

   $ 'webpack' in terminal, this will fire up webpack and wills start building all components needed.

You can use the static server provided in script.js to use the same install node-static by executing 'npm install node-static' and start the static server by typing

# node script.js

or you can use the webpack dev server, this can be installed by npm install 'webpack-dev-server -g'  and can be started by typing 'webpack-dev-server --progress --colors' in terminal

# Setup

Start wrting the needed components for shopping cart

To make this tutorial simple, i have used static json for my products

we have only three pages in this tutorial and this is routed as an Single Page application.

The different components are Navbar, Products, Items, cart and App component to hold the all the components

# Writing Components

Components are simialr to any Html element, designed for an single purpose, an component can be anyhting that does an single function like Button in html, they fire an event when pressed.

To write an component we need React library, so import it from node_modules

Ex :  refer Home component (components/home.js)

var React  = require('react'); ---- > Importing React library

var Home = React.createClass({ ---- > syntax to start writing an component

  render: function() { -- > Every component has an render function which usally render any html fragment when called upon
    return (

        <p>Welcome to TAG shopping </p> // return block can emit single html elements or an block of elements

      </div>
    );
  }
});

these component can be exported to other components as
'module.exports = Home'

Please look in app.js

within the render function there is line ' {this.props.children}'
this is very much similar to ng-view / ui-view in angular, this is where the child components gets loaded.

# Routing

I have used react-router to route the page in this app.

Look route.js

import the modules needed, to achieve routing

  var routerModule = require('react-router');
  var Router = routerModule.Router;
  var Route = routerModule.Route;
  var Redirect = routerModule.Redirect;

and import your custom components

  var App = require('./components/app.js');

To achieve routing use <Route> component available from router module

  <Route path='home' component={Home} /> --> path to dispaly in the url is home and the component which should be rendered when the url changes is specified in handler section.

  <Route path='products/:productName' component={Itemsdescription} /> --> this route has an path param attached to it so the url will be like products/productName. Also closely look into Link component in navbar.js and also in items.js

  We pass the path param associate with the route in Link component like

  <Link to={'/products/'+this.props.name } //to specify the path to navigate
        params={{ productName: this.props.name }}> // params specify the params we pass in the url
        <li>{this.props.name} Description</li>
    </Link>


Clone the repo

run npm install.

webpack --watch

to start server user webpack server : webpack-dev-server --inline --hot













