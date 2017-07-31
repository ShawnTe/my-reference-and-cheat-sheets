# React
## Main purpose of React is managing state for large amounts of data (think FB)
The UI is merely a function of the state. (Unidirectional Data Flow)

### Imperative vs Declarative
Imperative (How to do it)  
Declarative (What I want to have happen), it's abstracted  
Declarative:  
- reduces side effects
- minimize mutability
- more readable
- fewer bugs
- In computer science, declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow.
- Declarative programming is “the act of programming in languages that conform to the mental model of the developer rather than the operational model of the machine”.


React is primarily Declarative  
Many (maybe even all) Declarative approaches have some sort of underlying Imperative abstraction.
+ We still need to set state:
````
this.setState({
  highlight: !this.state.highlight
  })
````
.setState both changes the state of that property, and kicks off a re-render of UI
**State = info about something held in memory**

### React Router
Maps a specific URL with a specific component  
URL       |   Active component  
foo.com   |   Home  

### Included functions:  
* onTouchStart
* onTouchMove
* onTouchEnd
* onBlur
* onFocus
* onDoubleClick
* onKeyPress
* onCopy
* onCut
* onPaste
* onMouse...



### Webpack
Basically, a code bundler. It takes all the requires and modules,  
Runs them through some transformations/rules (Babel etc),  
then outputs them into one big JS file  
[Webpack](webpack.js.org)  

I'm using Gulp for Hungry Monster.  

### Babel
A code transformer.
For ex. 'env' which allows us to use more modern syntax like classes,
or from JSX to JS  

### Axios
Allows us to make Ajax requests, for ex. to Github API

### PropTypes
get from npm  
you'll get error if try to pass a string to the component:
ref. Intro to PropTypes in reacttraining  
more documentation: facebook.github.io/react/docs/typechecking-with-protoytpes.hmtl  

````
npm install --save prop-types
(then)
var PropTypes = require('prop-types');
(then, under the class -- doesn't seem to need to be in the class definition. Can be above the ReactDOM.render function):  

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}  

OR, for more specificity:  
Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
    } )),
}

````
Two types to note of diff naming:  
boolean = bool  
function = func  
````
Users.propTypes = {
  list: PropTypes.array.isRequired
}
````

## Running
- npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server

- add scripts to package.json
"start": "webpack-dev-server --open"

- in cli: npm start 

## Lists
### #map and #filter
````
class FriendsContainer extends React.Component {
  render () {
    var name = 'Shawn Tuttle';
    var friends = [] 'Joe', 'Jane', 'Sarah' ];
    return (
      <div>
        <h3> Name = {name} </h3>
        < ShowList names={friends} />
      </div>
      )
  }
}

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3>Friends</h3>
        <ul>
          { this.props.names.map(function(friend) {
            return <li> {friend} </li>;
            })
          }
        </ul>
      </div>
      )
  }
}
````
#### Return
* must have an html element
* if one, and only one, can just enter, for ex. <h1>Hello World</h1>
* more likely more, so wrap in a set of <div> tags  
* <div classNmae="main">
````
class Users extends React.Component {
 render() {
    var friends = this.props.list.filter(function(person) {
           return person.friend === true
         });
     var nonFriends = this.props.list.filter(function(person){
           return person.friend === false
         })
   return (

     <div>
       <h1>Friends</h1>
       <ul>
         { friends.map(function(person) {
           return <li> {person.name}</li>
         }) }
       </ul>

       <hr />

       <h1> Non Friends </h1>
       <ul>
         {nonFriends.map(function(person) {
           return <li> {person.name}</li>
         })
         }
       </ul>        
     </div>
   )
 }
}

ReactDOM.render(
 <Users list={[
   { name: 'Tyler', friend: true },
   { name: 'Ryan', friend: true },
   { name: 'Michael', friend: false },
   { name: 'Mikenzi', friend: false },
   { name: 'Jessica', friend: true },
   { name: 'Dan', friend: false } ]}
 />,
 document.getElementById('app')
);

````
### Life-cycle events
- componentDidMount - whenever component shown to screen/view  
  -- put refs to ajax requests here.

#### his thoughts on React--2 things:
1. what's the state?
2. what's the UI?

### Links
var Link = require('react-router-dom').Link;  
just renders an href link  

var NavLink = require('react-router-dom').NavLink;  
can apply styling. Basically Link with extra properties  
