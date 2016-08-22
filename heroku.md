## New project 

### to login 
heroku login

### need to do before pushing to Heroku: 
gem install bundler
    and then
bundle install


### to deploy a new project:
heroku create book-of-becoming  
(if you just do heroku create, it will get some random url)

### deploy
git push heroku master

#### git push the development branch as if it were master
git push heroku development:master

### to open app online from CLI
heroku open

### may need to run:
heroku run rake db:migrate (and maybe db:seed)

### to see console errors:
heroku logs


### get library
[ruby](https://github.com/unsplash/unsplash_rb)
[js](https://github.com/unsplash/unsplash_js)


