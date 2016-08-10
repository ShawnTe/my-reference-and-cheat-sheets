# CRUD And Restful Routing in Sinatra

* [Sinatra Primer](https://github.com/sinatra/sinatra)

controllers/users_controller.rb  (plural -- table name)

CRUD 
lecture from Jacqulyn in devbootcamp/http-crud-example-lecture
  note also an example for gitignore

[Step by Step](https://github.com/sf-golden-bears-2016/phase-2-guide/blob/164c37f8d6819aa2dbdf860b2fb89a5a5b6ad3a9/resources/step_by_step_crud.md)

[Restful breakdown](https://github.com/sf-golden-bears-2016/phase-2-guide/blob/164c37f8d6819aa2dbdf860b2fb89a5a5b6ad3a9/resources/annotated_REST_routes_sample.rb)


#### link to delete, update, if-else
From [article](http://code.tutsplus.com/tutorials/singing-with-sinatra-the-recall-app--net-19128)
```
<% if @note %>
  <form action="/<%= @note.id %>" method="post" id="edit">
    <input type="hidden" name="_method" value="put">
    <textarea name="content"><%= @note.content %></textarea>
    <input type="checkbox" name="complete" <%= "checked" if @note.complete %>>
    <input type="submit">
  </form>
  <p><a href="/<%= @note.id %>/delete">Delete</a></p>
<% else %>
  <p>Note not found.</p>
<% end %>
```

#### delete
```
get '/:id/delete' do
  @note = Note.get params[:id]
  @title = "Confirm deletion of note ##{params[:id]}"
  erb :delete
end
```
```
<% if @note %>
  <p>Are you sure you want to delete the following note: <em>"<%= @note.content %>"</em>?</p>
  <form action="/<%= @note.id %>" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Yes, Delete It!">
    <a href="/<%= @note.id %>">Cancel</a>
  </form>
<% else %>
  <p>Note not found.</p>
<% end %>
```

put '/users/:id' do
  @user = User.find(params[:id])
  @user.update(params[:user])
  redirect "/users/#{@user.id}"
end

```
delete '/:id' do
  n = User.get params[:id]
  n.destroy
  redirect "/users"
end
```
#### marking Todo as complete (Boolean)
```
get '/:id/complete' do
  n = Note.get params[:id]
  n.complete = n.complete ? 0 : 1 # flip it
  n.updated_at = Time.now
  n.save
  redirect '/'
end
```
```
post '/users' do
  @user = User.new(params[:user])
  if @user.save
    session[:id] = @user.id
    redirect  "/users/#{@user.id}"
  else
    @errors = @user.errors.full_messages
    erb :"/users/new"
  end

end

```
#### same article as above, create RSS feed and prevent possibility of script injecting thru forms [here](http://code.tutsplus.com/tutorials/singing-with-sinatra-the-encore--net-19364)
