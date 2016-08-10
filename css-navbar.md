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


navbar

ul {
  list-style-type: none;      // removes bullets
  margin: 0;  +  padding: 0;  // removes browser default
  border: 1px solid #555;      // vertical navbar ------- note: need to remove bottom border
  background-color: #333;       // for horizontal bar!!!!!!!

  fix to top / bottom:
  postion: fixed;
  top: 0;
  width: 100%;

#### for vertical:
  width: 100 px;              // vertical navbar ---- width of block
  width: 25%;             // for horizontal, full-length -- note: adjacent div needs margin of 25%
  height: 100%            //   "          "                       give adj div some padding 
  position: fixed;         //   "           "
  overflow: auto;          //    "       "
}


li {
  <!-- display: inline;  ???        // HORIZONTAL NOTE: add float-left if display: block -- don't need  -->
  <!-- display: block;           // play with which display needed -->
  float: left;                //              which makes area instead of text linkable
  border-right: 1px solid #bbb;   // to add vertical line between buttons NOTE: last-child
}

li:last-child {
  border-bottom: none;        // vertical
  border-right: none;         // for vertical line tra buttons (with li)
}

li a {
  display: block;             // li is width of ul
  padding: 8px 16px;          // give the boxes some breathing space
  text-align: center;         // example on w3 schools had this in own li {}
  text-decoration: none;
  color: white;               // if on colored background

}

li.active or
.active {
  background-color: ...;      // to know which page yer on
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}

#right-nav {
   float: right;               //  to push specific nav to the right
}

To make mobile responsive (on W3 schools "CSS Navigation Bar" page -- also has dropdown:
@media screen and (max-width: 600px) {
  ul.topnav li.right,             // add .topnav to all ul li selectors
  ul.topnav li {float: none;}
}

  

