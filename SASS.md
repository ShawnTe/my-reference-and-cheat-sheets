# Sass and SCSS Basics
### Syntactically Awesome Style Sheet
### Sassy CSS

difference tra Sass and Scss [great breakdown on StackOverflow including relationship](https://stackoverflow.com/questions/5654447/whats-the-difference-between-scss-and-sass)  
* **Sass** refers to preprocessor and syntax as a whole. Refers to overall language.
* **SCSS** refers to turbocharged (with Sass goodness) CSS

[Sass](http://sass-lang.com/guide)  

Once Sass is installed, you can run sass input.scss output.css from your terminal.
try: sass style.scss style.css

An example of running Sass while watching an entire directory is the following:
sass --watch app/sass:public/stylesheets
sass --watch style.scss:style.css

## Syntax
#### Variables
$color-primary : rgb(40, 40, 40);

body {
  background-color: $color-primary;
}
#### Nesting
nav {
  text-align: center;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 5px 10px;
  }
}

#### Extending
// columns
.col-1-3 {
  width: 33.33%;
}
.col-2-3 {
  width: 66.66%;
}

// colours
.blue {
  color: rgb(40,170,220);
}

// structure
.primary-content {
  @extend .col-2-3;
}
.secondary-content {
  @extend .col-2-3;
}

#### Import
files: (with underscore) \_reset.scss, \_grid.scss, and \_text.scss

and our main style.scss would look like this:

@import 'reset';
@import 'grid';
@import 'text';

body {
}

h1 {
}

#### Mixins
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box {
  @include border-radius(10px);
}

_produces_
