# Rails 5 API

[Scotch tutorial](https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one)  
[jsonapi.org](http://jsonapi.org)  

- rails new my_api --api --database=postgresql -T // (excludes minitest)  
- cd my_api  

#### Setup dependencies
- shoulda-matchers, FactoryGirl, RSpec-rails, database_cleaner, faker (ref. [Scotch tutorial](https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one))  
- Enable CORS (ref. [Simplify tutorial](https://www.simplify.ba/articles/2016/06/18/creating-rails5-api-only-application-following-jsonapi-specification/))  
- Enable Serialization with gem 'active_model_serializers' (ref. [Simplify tutorial](https://www.simplify.ba/articles/2016/06/18/creating-rails5-api-only-application-following-jsonapi-specification/))  
- gem 'awesome_print'  (then in rails c, prepend command with: ap )  


#### Setup Models
- rails db:create  
- rails g model Contact name:string city:string group:references (auto sets up as foreign key)  
Basic field types:  
 - :string, :integer, :date, :datetime, :references, :boolean  
 - :binary, :float, :decimal, :text, :time, :timestamp, :primary_key  
 - rails db:migrate  
 - pretty much duplicate model info in Serializers file (ref. [Simplify tutorial](https://www.simplify.ba/articles/2016/06/18/creating-rails5-api-only-application-following-jsonapi-specification/))  

#### Add Model tests
 - (ref. [Scotch tutorial](https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one))  

#### Add validations and associations
- foreign_key auto makes field required, unless: optional: true  
- validates :full_name, presence: true  




#### Add Controller request specs (type: :request)
- rails g controller Todos  
- (ref. [Scotch tutorial](https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one))  
- Setup factories  
- Setup spec and helper files  
- Setup resources in routes  


#### Setup Controllers
- before_action :set_todo, only: [:show, :update, :destroy]  
- (private) #todo_paramas params.permit(:title, :created_by), #set_todo @todo = Todo.find(params[:id])  
- (concerns) json_response and exception handler  

#### Change media type
- from: Content-Type: application/json to: application/vnd.api+json; charset=utf-8  
- Add to file config/initializers/mime_types.rb: Mime::Type.register "application/vnd.api+json", :json  
- (ref. [Simplify tutorial](https://www.simplify.ba/articles/2016/06/18/creating-rails5-api-only-application-following-jsonapi-specification/))  
- (ref. [jsonapi.org](http://jsonapi.org))  



#### Test!
- bundle exec / be rspec  
- bundle exec rspec ./spec/requests/todos_spec.rb  


#### Seed sample data (optional)
- set up seed file  
- rails db:seed  


#### start the server and test the API in Postman
- rails s  

#### Creating new user
- Token-based authentication (ref. [Simplify tutorial](https://www.simplify.ba/articles/2016/06/18/creating-rails5-api-only-application-following-jsonapi-specification/))  
