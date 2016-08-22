# Getting started with APIs
1. Read online
2.  setup account, get API Key
3. Hello World app in their online sandbox, for ex. API Explorer with Twilio
4. Do it locally
5. Modify API so you know you got it! Getting ready to drop it into my project


Passion Project
6. Drop it into project  DO NOT COMMIT WITH API KEY EXPOSED
7. Version control (git)

=== Twilio and Max
he dropped the code in an rb file and ran it. Modified it. It worked.



## Muy importante to do this first so don't accidentally publish key

### create file: .gitignore
then add to it: 
.env


### Create .env and add to it:
.env
APP_ID='long-key-here'
SECRET_ID='long-key-here'


added gem 'unsplash'  (to gem file)
bundle

### dotenv is a gem
gem "dotenv"

### require in enviro
require "dotenv"

environment

Photo by X 
+ link back to UnSplash profile 

We can test by putting directly in Command Line:
export CONSTANT_ENV_VARIABLE="My super secret variable"
then can check all env Constants in command line with:
env

or just the one:
echo $CONSTANT_ENV_VARIABLE

?? ENV["My super secret key that's only avail in this tab in this session"]
in Ruby:
ENV["CONSTANT_ENV_VARIABLE"]


//////////////
Net::HTTP  or HTTParty -- need to add User-Agent in header
Postman

//////////////
require 'sinatra'
require 'httparty'
require 'json'

get '/' do
  headers = { "User-Agent" => "Awesome-Octocat-App" }
  @emoji_response = HTTParty.get("https://api.github.com/emojis", headers: headers)
  erb :index

end

Post a gist to Github (11min in https://talks.devbootcamp.com/consuming-the-github-api-server-side)