# Rails
## Mark ToDo Complete

1. Add complete column to table.
````
rails g migration add_completed_to_todo completed:datetime
````
2. Add route to resource
*in routes.rb*
````
resource :todos do
  member do
    patch :complete
  end
end
````
3. Create link in view
*find in rails routes*
````
link_to "Mark complete", route(@parent_item, todo.id), method: :patch   
````
4. Set up action in Controller
````
def complete
  @todo.update_attribute(:completed, Time.now)
  redirect_to @todolist, notice: 'Todo completed'
end
````
**Also add to set_todo, strict params, AND serializer file (if API!!!!!!!)**   

5. If relevant, make some sort of visual change happen in the view to indicate complete, for ex. change class
````
if todo.completed?
  <p style = "opacity: 0.4;"><strike>todo.name</stike></p>
else
  <p>todo.name</p>
end
````
6. Add completed? method to Model  
*todo.rb*
````
def completed?

end
````


#### Note
In controller:  
before_action :set_todo, except [:create]   and :set_bj (parent)  

private  
def set_todo  
def set_bj  
