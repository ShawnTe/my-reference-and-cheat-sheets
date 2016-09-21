# Jade / Pug

[a handy converter](http://html2jade.aaron-powell.com/)  
## Syntax
- indent by 2 spaces

### Header
- set certain attributes with equal sign title= 
- interpolate from variables set in controller #{title}

### Body
- indent based on nesting tree
- block: div, h1, p, 
- inline: i, strong (put at same level as the block it's in)
- multi lines of text: p. or 
  p
    | And write things here
    and on next line

#### Add attributes
- h1 (id="flashy") Welcome!
- button(class="btn", data-action="bea").
    Be Awesome

#### Add ids and classes
- h1#flashy Welcome!
- button.btn(data-action="bea") Be awesome
