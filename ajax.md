also see [Hunter's ajax mini-tutorial](https://github.com/ShawnTe/jQueryIntro)

## check that jquery library being called from layout page
````
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>  
<script src="jquery-1.12.4.min.js"></script>  
<script>application.js</script>
````

## Controller
```````
# Create new todos
post '/todos' do
  todo = Todo.new(params[:todo])
  todo.brainjuice_id = bj_id
  if todo.save
    if request.xhr?
      todo.to_json
    else
      redirect '/todos'
    end
  else
    @errors = todo.errors.full_messages
    redirect '/todos'
  end
end
````
## application.js

````
function createNote(){
  $("submit-note").on('submit', function(event) {
    console.log(event);
    console.log($(this));

    event.preventDefault();
      // jquery selector = form
    var formData = $('submit-note').serialize()
     // example:
    var url =  $(this).children().attr("action/href");

    $.ajax({
      url: "/posts",
      method: "POST"
      data: formData
    }).done(function(serverResponse){
      console.log(serverResponse);
      var thingy = JSON.parse(serverResponse);

        $('#new-horse').parent().show();
````
.fail is defined by status code  

        if (serverResponse.name != null){
              // blink border of input green
              // if on show all by tag page, ajax insert new li, chron desc
        $(".tagged-list").append("thingy.title");  
             // (to change the attr to modifies if there, adds if not getter and setter)
        $("#added-horse").attr("href", "/horses/" + thingy.id)    
        } else {
      alert(serverResponse.error);
    }
    })

  })
}
````
.fail is defined by status code  
````
json object format
  [
    {
      "name": "AIR",
      "time": "6:10 - 7:10",
      "stage": "Lands End",
      "date": "Aug 6"
    },
    {
      "name": "ANDERSON .PAAK & THE FREE NATIONALS",
      "time": "7:55 - 8:40",
      "stage": "Twin Peaks",
      "date": "Aug 6"
    }
  ]


In Ruby and returning a .to_json
require 'json'

get '/horses/:id/json' do
  horse = Horse.find(params[:id])
  content_type :json
  { id: horse.id, name: horse.name, breed: horse,breed}.to_json
end

in JS
.get -- doesn't need the object passed through
alias for $.ajax

$.get($(this).attr("href"), data) ------ .get, pass url and data
.done(function(response))

we can call response.breed etc

````
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
