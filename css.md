position + example, lessons 7 + 8: learnlayout.com/position.html

display {
  inline:
  block: div -- p -- form -- header -- footer -- section
  inline-block:             // like and inline block element
  display: none;            // oft used in JS, 
  visibility: hidden;       // doesn't show but space still taken on page
}

article {
  column-count: 2;            // max # of columns
  column-width: 200px;        // minimum width
}

#### centering a fixed-width div inside a wider div:

#main {
  max-width: 600px;         // max- for mobile compatible
  margin: 0 auto;
} 

box-sizing. If you don't want padding and margin to increase overall size:

.simple {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border: solid blue 10px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
// actual width: 500px

otherwise:
.uncontrolled {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
}
// actual width 600px ish
