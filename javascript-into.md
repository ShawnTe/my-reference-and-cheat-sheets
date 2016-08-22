July 16

irb console for Ruby is as node console for JS
[1,2].push(4)
--> 3 (push returns the length)

console.error (instead of console.log )

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

ajax is part of jQuery
so when using ajax, need to require jQuery library

$.ajax({
  url: '/newAccount',
  method: 'POST'                  ==> if other than GET
  data: {name: 'Alfred', password: 'slkdfj'},
  dataType: 'JSON'  or 'html'     ==> what data I'm expecting back, can be blank
<!-- }).done( this is what happens after call made ) -->
}).done(function(response){
  $('body').append(response)
  console.log('request successful')
}).fail(function(response){
  console.log(response)
});

















