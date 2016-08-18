## Current project

### to login 
heroku login

### deploy
git push heroku master

### run once:
heroku run rake db:migrate

##### git push the development branch as if it were master
git push heroku development:master

### to open app online from CLI
heroku open

### to see console errors:
heroku logs

## New project 

### to deploy a new project:
heroku create book-of-becoming  
(if you just do heroku create, it will get some random url)

### get library
[ruby](https://github.com/unsplash/unsplash_rb)
[js](https://github.com/unsplash/unsplash_js)



### needed to do beforehand (one time?): 
gem install bundle
and then
bundle install
