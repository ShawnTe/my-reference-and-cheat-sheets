Rails
Q: What is: (.:format) when routes are created?  
gem install rails
rails -v

## Short cuts
* rails s     => server
* rails c     => console
* rails g     => generate
* rails t     => test
* bundle      => bundle install
rails console --sandbox

## in house testing
bundle exec guard  
then hit enter to run  

rails test:integration (links etc in views)  
rails test:models  

## links
* link_to "Name of text or img", "where to link to", hash of options  
* image_tag("file_name like prayer.png", hash of options) -- auto looks in  app/assets/images/  
* to include a partial in a page: <%= render 'layouts/header' %>

## Adding Bootstrap:
add to gemfile: gem 'bootstrap-sass', '3.3.6'  
bundle install  
add custom css file: touch app/assets/stylesheets/custom.scss  
then add bootstrap to that file:
@import "bootstrap-sprockets";
@import "bootstrap";

## testing
* integration tests Hartl 5.32

## Getting started with new app## Simple install
* **Create new app** can include desired version (auto runs bundle install)
````
$ rails _5.0.0.1_ new hello_app --database=postgresql
````

* **Update gemfile.** Hartl uses specific gem versions because even a point can break things (remember to bundle install again)

* To prepare the system for deployment to production, we run bundle install with a special flag to prevent the local installation of any production gems (which in this case consists of the pg gem). Running install update the gemfile.lock
````
$ bundle install --without production
````

* make sure **git init**'d:
````
$ git add -A
````
* **Migrate db***
````
$ rails db:migrate
````
* Run initial test
````
$ rails test
````
* Deploy to [**Heroku**](heroku.md)
````
$ heroku create name-of-app-here
````
````
rails generate controller Users new
````
````
rails generate model User name:string email:string
rails db:migrate
rails db:rollback
````

* rails s

## Undo
Destroy undoes all the commands done by its corresponding command   
Controllers
````
$ rails generate controller StaticPages home help
$ rails destroy  controller StaticPages home help
````
Models (more on models below)
````
$ rails generate model User name:string email:string
$ rails destroy model User
 ````
Migrations
````
$ rails db:migrate

$ rails db:rollback
````
Add an index
````
rails generate migration add_index_to_users_email
````
then in the migration:
````
add_index :users, :email, unique: true

````
To go all the way back to the beginning (or any other Version for that matter), we can use
````
$ rails db:migrate VERSION=0
````

#### sets up postgres when setting up app
* rails new Thingy --database=postgresql -T   
(may want to uninstall Spring)

* bundle exec rake db:create

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
rails ('bundle exec rake' for pre-rails 5) db:migrate  

rake test   Hartl says one of the more common rake commands
rake -T  to show all the poss commands
rails console  (instead of rake console)  
rails s -- or rails server  (instead of shotgun)  
run rails on localhost:3000  
(be) rake routes  

### Models
Create:  
* rails generate model Member (singular) name:string email:string  
 * types: string, integer, text (like for a comment field)
 * alt: rails generate scaffold Comment content:text user_id:integer
 * then rails db:migrate

## in console
* User.new  /  .save   // .create
* User.destroy
* User.valid?
* User.find(2)
* User.find_by(email: "Joe@joe.com")
* User.first
* User.all
* y user.attributes (the same as user.attributes.to_yaml) in Console


### updating
* (assignment)  user.email = "joe@josephine.com"   then, user.save !!
* (multiple attributes) = user.update_attributes(name: "Josephine", email: "josephine@josephine.com")    // note: auto saves
* (single update, I think bypasses some email required to validate) user.update_attribute(name: "Josie")     // note: also auto saves
* date / time magic: user.created_at = 1.year.ago

## associations
* belongs_to :user_id
* has_many :microposts

 * first_user = User.first
 * first_user.microposts
 * micropost = first_user.microposts.first
 * micropost.user
 * micropost.user.name
 * @user.microposts.first.content
 * user.errors.full_messages

## validations
* validates :content, length: { maximum: 140}
* presence: true

## Routing
in config/routes.rb  

get '/' => 'pages#index'  // where controller = pages and action = index
````
Rails.application.routes.draw do
  resources :pages, except[:edit, :update]
  get '/' => 'pages#index'
  or root to: 'pages#index'
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


### CRUD and RESTful routes and Resources
CRUD: create read update destroy  
http verbs: get post patch delete  

to see all the routes: rails/rake routes   

create in **routes.rb** by:  
resources :photos  
or for multiple resources:  
resources :photos, :books, :videos  

Singular resources, for ex. look up without an ID, like /profile going to current user's profile page:  
get 'profile', to: 'users#show'       // instead of going to '/profile/:id', i.e. controller#action format

#### in routes
resources :users do  
  resources :posts, only [ :new ]    //(without the 'only', will add all)  
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
````
pluralize(@user.errors.count, "error/the word to pluralize")
````
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
