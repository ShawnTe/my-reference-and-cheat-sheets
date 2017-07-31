# Getting Started
[React Training](https://online.reacttraining.com/courses/50507/lectures/760301#/finished)

[Facebook incubator docs](https://github.com/facebookincubator/create-react-app)

(scaffold)  
npm install -g create-react-app  

(or manually)  
````
npm init  
````

after setting up package.json
````
npm install --save react react-dom  
````
````
touch .gitignore
//
node_modules
dist
````
index.css
index.js:
````
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');
````
create components
````
//state
//lifecycyle
//UI
class App extends React.Component {
  render () {
    return (
      <div>                     //JSX
        Hello World!
      </div>
      )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
  );
````
````
(note --save-dev which saves them as dev dependencies)
npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server
````
````
touch webpack.config.js
\\
(setup)
````
````
(in package.json)
run one time (to get dist folder created)

"scripts": {
  "create": "webpack"
  },
  "babel": {
    "presets": [
    "env",
    "react"
    ]
    },

(then change scripts to:)

"scripts": {
  "start": "webpack-dev-server --open"
  },
````
Make <App /> the master parent component
mkdir componenets (in app)
touch App.js
touch Brainjuice.js  
(see the App.js)

## Ajax requests
npm install --save axios  
mkdir utils (in /app)
touch api.js

#### axios
promise-based http client (how to send http requests)

### Routing
npm install --save react-router-dom  
Link  
NavLink  
So that the browser doesn't request assets, in webpack.config.js:
````
add to outputs: publicPath: '/'

add another property to exports:

  devServer: {
    historyApiFallback: true
  },
````
