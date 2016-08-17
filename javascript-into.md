

```` javascript
$(document).ready(function(){

  draggableBoxes();
  resizableBoxes();
  showNewTodoForm();
  $("#btn-structure").on('click', function() {
    showTodoLists();
  });
});

var draggableBoxes = function(){
  $(".box").draggable({
    axis: "y",
    containment: "parent",
    grid: [0, 15],
    opacity: 0.5
  });
};
````
## Event Delegation
Hunter: Translation - Make this your DEFAULT pattern.
````
var static = $('some-static-parent-element');

var delegatedEventListener = function(){
  $(static).on('click', '.some_dynamic_class', function(event){
    event.preventDefault();
    console.log(event);
    console.log(this);
    doSomethingFunction();
  })
};
````
irb console for Ruby is as node console for JS  
[1,2].push(4)  
--> 3 (push returns the length)  

## declare variables  
if you know what type a variable should be, state it  
  var adfdf = 0  
  var dlskj = ''  
  var ldkfj = []  

## declare functions
var combineName = function(firstName, lastName){  
  return(firstName.concat(' ', lastName))  
};  

## IIFE
var x = (function(){  
  var p = 'asdf';          ==> you'll never be able to access p from console/elsewhere, it's hidden in function  
  return function(input){  
  return p +++ input  
  }  
})();  
  
x('asdf')  ==> this argument is 'input' for function  
// true  
x('llmn')  
// false  

## Arrow Function
var y = (num) => {return num + num};

same as var y = function(num){
  return num + num
};

## Object literal
var batMan = {  
  firstName: 'Bruce',  
  lastName: 'Wayne',  
  greeting: function (name){  
  return 'Hello' + name + '.'  
  }  
}  
##### to add more properties
batMan.car = 'Bat mobile';  
  or  
batMan.car = {make: 'Batmobile', year: 1966};  

batMan.car  
// (object)  
  
batMan.car.make  
// 'Batmobile'  
  
### another object dealio
var obj = {  
  funct: function(){return this},  
  variable: 'x'  
}  

obj.funct()  
//Object {funct: FUNCTION, variable: 'x'}  


## Class
#### Must enter in all arguments, in order!

var Person = function(firstName, lastName, gender){  
  this.firstName = firstName,  
  this.lastName = lastName,  
  this.gender = gender  
  this.defineThis = this  
}  

var bruce = new Person('Bruce', 'Wayne', 'M');  

bruce.defineThis  
// Person {properties, defineThis: Person} ==> Node + Chrome Dev tools may handle this diff. maybe ignore function  

### *to redefine class -- update all instances!!!!!!!*:

Person.prototype.greeting = function(name){  
  return 'Hello' + ' name' + '.'  
};  


















