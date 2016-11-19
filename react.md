# CodeSchool tutorial
Using ES 2015:
* class syntax
* arrow functions
* spread operator


* class inherits from React base class
* every component needs a render function
* return argument doesn't need quotes b/c of JSX

````
class StoryBox extends React.Component {
  render() {
    return( <div>Story Box</div> );
  }
}
ReactDOM.render(
  <StoryBox />,
  getElementById('story-app')
  );
````

* ReactDOM object renders to webpage
* ReactDOM.render( <component>, <target container where comp. will be rendered > )
