[cheatsheet-oscarotero](https://oscarotero.com/jquery/)

    <script src="jquery.min.js"></script>

$("#destinations > li")   parent > child (and only direct child)  
$("#destinations li")     takes all of the descendents  
$("#france, .paris")      takes id france and class paris  
$("#destinations li:first / last / odd / even ") note that begins at index 0  

selection         + traversal  
$("#destinations").find("li");    all descendant li  
$("li").first();  
$("li").last();  
$("li").first().next();  
.prev();  
.parent();  
.children("li");    child descendants that are li  
 $("#vacations").children("li").last();  
