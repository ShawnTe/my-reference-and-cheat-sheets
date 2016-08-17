```` 
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
$(document).ready(function() {

});

// same as:

$(function(){

});

// Call functions within, function code is outside:

$(function(){
  haltButton();
  showForm();
});

function haltButton(){
  $("button").submit(function(event){
    debugger;
    event.preventDefault();
  });
};
//////////  OR (has a bit more functionality than the shortcut method)

function haltButton(){
  $("button"/'.vote-button').on('submit/click', function(event){
    event.preventDefault();
  });
};


var jqxhr = $.ajax( "example.php" )
  .done(function() {
    alert( "success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "complete" );
  });

/////////////
request.done(function(responseData){
  var xyz = responseData;
});


<a id="toggle-note" href="(put partial in here to NOTE in case don't have ajax)">Show / Notes</a>
<textarea name="note" id="box-note" col="200" row="4">
<div id="note-container">
</div>

function showNoteBox () { 
  $("#toggle-note").on('click', function(event) {
  event.preventDefault();
  console.log($(this));
  $.ajax ({
    url: "/posts/notes",
    method: "GET"
  }).done(function(serverResponse) {
    console.log(serverResponse);
    $("#note-container").append(serverResponse);
    // change toggle button show / hide note in  ????? how does toggle work
    $("note-toggle").show / hide(".on")(".off")
    .fail // and put to route if Sinatra off 
  }) 
});
}

function createNote(){
  $("submit-note").on('submit', function(event) {
    console.log(event);
    console.log($(this));

    event.preventDefault();
    var formData = $('submit-note').serialize()
    $.ajax({
      url: "/posts",
      method: "POST"
      data: formData
    }).done(function(serverResponse){
      console.log(serverResponse);
        $('#new-horse').parent().show();

        if (serverResponse.name != null){ 
      // blink border of input green
      // if on show all by tag page, ajax insert new li, chron desc
      $(".tagged-list").append("serverResponse.title");  
      $("#added-horse").attr("href", "/horses/" + serverResponse.id)    (to change the attr to modifies if there, adds if not getter and setter)
} else {
      alert(serverResponse.error);
    }
    })

  })
}
.fail is defined by status code


// in routes
get '/note do' 
  erb :'_new-post'   (what is this route called?)
  p "*" * 50
  @horse = Horse.new(params[:horse])
  content_type :json
  {name: @horse.name, id: @horse.id}.to_json
  {title: @post.title, tag_id: @post.tag_id}.to_json

  content_type :json
  {errors: @horse.errors.full_messages}.to_json
end

even more 
define locals for the scope of the partial
horse: 

// in html
<form horse[age], horse[name]>

// in css
.on {
  display    --- how does toggle work??
}
