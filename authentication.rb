Authentication and 

## Gemfile
gem 'bcrypt'

## environment.rb
require 'brcyrpt'
enable sessions (syntax??)

## Model
(go to bcrypt gem docs)
include BCrypt


def password
end

def password=(new_password)
end


## Helper 
def current_user
  @current_user ||= session.....
end

def login(user)
  @user = User.find_by(username....)
end

def logout
end

def authenticate(username, password)
end

## Route
post '/login'
get '/logout'
(session[:id] = nil)