[React Training](https://online.reacttraining.com/courses/50507/lectures/2466660#/finished)

Check out again to set state in a component, around min 13 of [updating and managing state video](https://online.reacttraining.com/courses/50507/lectures/2466734#/finished)  
1. Implicit binding
2. Explicit binding
3. new Binding
4. window binding

First step to figuring out what 'this' is, ask:  
Q: Where was this function invoked? (not defined)  
I.e. we don't know what 'this' is until it is invoked.  

1. Implicit binding. Look to the left of the method that was invoked:  
jim.sayName();  (and then this is in the function. 'this' will refer to 'jim')  
jim.mother.sayName(); (refers to mother)  

2. Explicit - explicitly defining what 'this' is referring to:  
sayName.call(stacey);   // run the function sayName, passing stacey object to it  
if I call:  

#### .call and .apply
var sayName = function(lan1, lang2, lang3) {
  console.log("My name is " + this.name + "and I know " + lang1 + lang2 )
}
var languages = ['javascript', 'ruby', 'python']  
sayName.call(stacey, lang[0], lang[1], lang[2]) // first arg is ref, everything else = regular parameters  
OR!!!!
sayName.apply(stacey, languages)  // above var sayName doesn't change

#### .bind
Just like .call EXCEPT that instead of calling the function, it saves it as a new function  
var newFn = sayName.bind(stacey, lang[0], lang[1], lang[2]) // binds stacey to newFn which can be invoked later:  
newFn();   // already has stacey assigned to 'this'

3. New
Binds 'this' to the object being constructed.  
var Animal = function(type, name, color) {
  // this = {}
    this.type = type;
    this.name = name;
    this.color = color;
};

var zebra = new Animal('horse-like', 'zorro', 'black and white')

4. Window  
If nothing to left of dot; nothing passed through, nothing new being constructed, THEN defaults to window.
var sayAge = function() {
  console.log(this.age);
}

var me = {
  age: 25
};

sayAge();     //undefined
window.age = 35;
sayAge();     // 35

if use 'add strict', will get a diff error message b/c prob not trying to ref window:    
var sayAge = function() {
  'add strict'
  console.log(this.age);
}
