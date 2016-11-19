## New project

### to login
heroku login   // username and password  

### to deploy a new project:
heroku create book-of-becoming  
(if you just do heroku create, it will get some random url)

### need to do before pushing to Heroku:  // didn't need to for Hertl's tutorial
gem install bundler
 and then
bundle install

### deploy
git push heroku (master)    // can omit master after first push

### change name of url
heroku rename new-name-of-app-here

### run once:
heroku run rake db:migrate

##### git push the development branch as if it were master
git push heroku development:master  

### to open app online from CLI
heroku open

### to see console errors:
heroku logs


### get library
[ruby](https://github.com/unsplash/unsplash_rb)
[js](https://github.com/unsplash/unsplash_js)

### needed to do beforehand (one time?):
gem install bundle
and then
bundle install
