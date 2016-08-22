Rails
Q: What is: (.:format) when routes are created?  

gem install rails

rails -v

rails gives lots of options

#### sets up postgres when setting up app
rails new Thingy --database=postgres -T       (?? should Thingy be lowercase?)  
(may want to uninstall Spring)

can see the log relating to similar commands  
rake cr  
bang # of command  

consider leaving out coffee, test and what else?  
how to leave out?  

CSS can set a certain hex to be "light gray", then only type that  
how?  


g = generator  
rails g -T (?)  or  -h // the t prevents tests from building

## Rake
rake db:create  
rake db:migrate  
rake -T  
rails console  (instead of rake console)  
rails s -- or rails server  (instead of shotgun)  
run rails on localhost:3000  
rake routes  

## Routing
in config/routes.rb  
get '/' => 'pages#index'  // where controller = pages and action = index 
````
Rails.application.routes.draw do
  get '/' => 'pages#index'
end 
````
then need to create controller
````
# in app/controllers/pages_controller.rb
class PagesController < ApplicationController
  def index        //defining the index action
    @sign_text = params[:sign_text]
  end
end
````
and Rails looks for a file called index (the action) in a folder called pages (same as the controller), so: index.html.erb  

### Models
Create:  
rails generate model Article title:string text:text
### CRUD and RESTful routes and Resources
photos_path           ==> /photos  
new_photo_path        ==> /photos/new  
edit_photo_path       ==> /photos/10/edit (for ex)  
photo_path(:id)       ==> /photos/10  

create by:  
resources :photos  
or for multiple resources:  
resources :photos, :books, :videos  

Singular resources, for ex. look up without an ID, like /profile going to current user's profile page:  
get 'profile', to: 'users#show'       // instead of going to '/profile/:id', i.e. controller#action format

#### in routes
resources :users do  
  resources :posts, only [:new]    //(without the 'only', will add all)  
  end  

## Helper methods

audio_tag  
auto_discovery_link_tag  
favicon_link_tag  
image_alt  
image_tag  
javascript_include_tag  
stylesheet_link_tag  
video_tag  

info on forms, links, buttons in rails-to-sinatra gist with Steve Cass  

## Form builder
Where f is a form builder object
````
<%= form_for :article, url: articles_path do |f| %>
  <p>
    <%= f.label :title %><br>
    <%= f.text_field :title %>
  </p>
 
  <p>
    <%= f.label :text %><br>
    <%= f.text_area :text %>
  </p>
 
  <p>
    <%= f.submit %>
  </p>
<% end %>
````

## Database
comes with SQLite3  
Set in ENV or in config. ENV takes precedence.  

#### Good practice is to state explictly (i.e. ENV in the config):
````
cat config/database.yml
production:
  url: <%= ENV['DATABASE_URL'] %>
````
to config SQLite3:
````
development:
  adapter: sqlite3
  database: db/development.sqlite3
  pool: 5
  timeout: 5000
````
to config Postgres (will end up in database.yml + need to change in gemfile if not set up originally):
````
development:
  adapter: postgresql
  encoding: unicode
  database: blog_development
  pool: 5
````
if hitting memory limits, try decreasing # of prepared statements. Default is 1000.  
````
production:
  adapter: postgresql
  statement_limit: 200
````