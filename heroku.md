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

<<<<<<< HEAD
#### git push the development branch as if it were master
=======
### run once:
heroku run rake db:migrate

##### git push the development branch as if it were master
>>>>>>> 90e2f1c1baf92171afa66369bb35592b7cd6e69f
git push heroku development:master

### to open app online from CLI
heroku open

### to see console errors:
heroku logs


### get library
[ruby](https://github.com/unsplash/unsplash_rb)
[js](https://github.com/unsplash/unsplash_js)


<<<<<<< HEAD
=======

### needed to do beforehand (one time?): 
gem install bundle
and then
bundle install
>>>>>>> 90e2f1c1baf92171afa66369bb35592b7cd6e69f
