### Sessions in Sinatra, (which store data using HTTP cookies)
i.e. retain state across web requests (i.e. logged in)

Session info in Sinatra: http://www.sinatrarb.com/intro#Using%20Sessions
[Jaclyn's example -- complete set up](https://gist.github.com/jkarnowski/9ce4e17ccf4a427272d3a521ae95acb9)

- enable sessions in enviro file or config.ru
- controllers/sessions_controller.rb
- put all restful views in folder for that table
- sessions_ helper

- in LAYOUT
log in / log out button depending on whether in session or not
<a href ="/login">Login</a> || <a href ="/logout">Logout</a> | <a href ="/register">Register</a> 

in html form:
<input type="password" name="password1">
<input type="password" name="password2"> to confirm password

##### controller

# sessions NEW
get '/sessions/new' do

end

# sessions CREATE
post '/sessions' do 
  @user = User.find_by_email(params[:email])
  if @user && @user.authenticate
    session[:id] = @user.id
    redirect "/users/#{@user.id}"
  else
    @errors = ["Login not legit, try again"]
    erb :'/users/show'
  end
end
```
```
(in the model)
def authenticate(input_password)
  @user.password == input_password
end
```
```
# sessions DELETE
delete '/sessions/:id' do 
  session[:id] = nil
  redirect '/'
end
  
if they have a session id, then they are logged in, if not session id, then no

It's just a hash look up: Sinatra sessions for more info on cookies and setting the settings.
```


from previous session -- Hunter doesn't user register, Shmba does
   post '/register' do
    if params[:password1] == params[:password2]
      user = User.create(username: params[:username],  password: params[:password1])
      if user
        session[:user_id] = user.id
        redirect '/welcome'
      else
        @error = "Passwords don't match"
        erb :new
      end
    end `

##### helpers/session_helpers.rb 
- create helper method, then can call it simply as logged_in?
- close session by session[:user_id] = nil


### bcrypt
* Use bcrypt for hashing algorithm to store encrypted passwords
* But user needs to be able to access as plain text
* One-way encryption (can NEVER decrypt)

  
* Add gem 'bcrypt' in gemfile  ==> then run bundle again
* Add to enviro  (cmd + P)   require 'bcrypt'   or cmd shift f and type require
* add to Class User ==> include BCrypt  (in the class definition)

* **Stateless web**
- pure request and response
* **Persisting state**
- client sends request to server
- server sends back (response) a session cookie (encrypted: user id) 
- client sends request with session cookie to server
- Server responds with session cookie or new cookie
- only Sinatra (the server) knows how to encrypt it
- can you steal cookies from Client side?? can you require 
- use https
- cookies can be delete or changed on client or server side 

    keep track of who user is via a COOKIE (sessions)

  Use double quotes when doing string interpolation.
  
  To persist, could do: 
    "/welcome?id=#{@id}"  -- this is visible and can be manually changed by user in url bar

  ### This is the breakdown of how #new plays out
  1. u = User.new()
  2. u.username = "sham"
  3. u.password = "123"  ===> goes to methods for password in class User (in model) 1. encrypts it, 2. assignit to password hash
  4. u.save


