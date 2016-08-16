

## check that jquery library being called from layout page
````
<script>application.js</script>
````

## Controller

## application.js

````
function createNote(){
  $("submit-note").on('submit', function(event) {
    console.log(event);
    console.log($(this));

    event.preventDefault();
    var formData = $('submit-note').serialize()
    // example: var url =  $(this).children().attr("action/href");
    
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
             // (to change the attr to modifies if there, adds if not getter and setter)
        $("#added-horse").attr("href", "/horses/" + serverResponse.id)    
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
````
