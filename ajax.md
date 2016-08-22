

## check that jquery library being called from layout page

## and <script>application.js

## application.js

## Controller

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
