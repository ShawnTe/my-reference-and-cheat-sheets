

```` javascript
$(document).ready(function(){

 
});


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


## Object Constructor

var Person = function(firstName, lastName, gender){  
  this.firstName = firstName,  
  this.lastName = lastName,  
  this.gender = gender  
  this.defineThis = this  
}  

or

var Person = function(args) {
  this.firstName = firstName,  
  this.lastName = lastName,  
  this.gender = gender  
  this.defineThis = this 
}

var joe = new Person({firstName: "Joe", lastName: "Miller"})
oreo = new Cookie({type: "Oreo", remainingBakeTime: 0});

### Prototype
Person.prototype.greeting = function(name){  
  return 'Hello' + ' name' + '.'  
};  

#### Misc
var bruce = new Person('Bruce', 'Wayne', 'M');  

bruce.defineThis  
// Person {properties, defineThis: Person} ==> Node + Chrome Dev tools may handle this diff. maybe ignore function  


















