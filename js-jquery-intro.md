
api.jquery.com
i.imgur.com

in Devtools Console (esc to open close console)

$()  (to see if site has jQuery)

(dbc with students show a list in icon format)

Note -- must be a jquery object to call jQuery functions on it.

$('li.student')  (get all the items)
$('li.student').first()
$('li.student')[0]

(Danielle trying: $($('li.student')[0]))
$('li.student').first().children().children()
     or
$('li.student img').first()

$('li.student img').first().attr('src')
  returns the value of src which is an image link

$('li.student img').first().attr('src', 'replace with new jpg file')     
    (changes aaron into a bunny)
// when you click on a link do this: 
$('li.stuendt a').on('click', function(event){
  event.preventDefault();
})

// don't know what 'event' is referring to:
console.log(event);

mouse (click and drag) down, up, click
hover, mouseon mouseoff

You'll get an empty array if there isn't something (it doesn't error out)

STREET Fighter

var = make Ryu

$(document).on('ready', function(){
  console.log("I'm ready!");

  $('div#ryu').html('<img src="">') -- can just put $('#ryu')
 // find this div and replace its html with new html

$('div#ryu').hover(what happens at mouseon, what happens at mouseoff -- leave out and maybe goes back to previous state);

});

id - there should be only one on a page
class - 2 or more on a page


.html(replace all html)
.append(add to end, make it full < statement img src=" etc">)
.animate()  attribute, time(1000 = a second)     , path, 

































