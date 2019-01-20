## New project

### to login
heroku login   // username and password  

###
make sure using postgresql and not sqlite (gem 'pg')

### to deploy a new project:
heroku create book-of-becoming  
(if you just do heroku create, it will get some random url)

### *might need to do before pushing to Heroku:*  // didn't need to for Hartl's tutorial
gem install bundler
 and then
bundle install

### deploy
git push heroku (master)    // can omit master after first push

### change name of url
heroku rename new-name-of-app-here

### run once:
heroku run rails db:migrate

##### git push the development branch as if it were master
git push heroku development:master  

### to open app online from CLI
heroku open

### to see console errors:
heroku logs

### to change remote:
git remote -v
git remote rm heroku
heroku git:remote -a fhp-artist-site


### get library
[ruby](https://github.com/unsplash/unsplash_rb)
[js](https://github.com/unsplash/unsplash_js)

### needed to do beforehand (one time?):
gem install bundle
and then
bundle install

### compile assets
##### Compiling assets locally
https://devcenter.heroku.com/articles/rails-asset-pipeline#compiling-assets-locally

To compile your assets locally, run the assets:precompile task locally on your app. Make sure to use the production environment so that the production version of your assets are generated.
RAILS_ENV=production bundle exec rake assets:precompile
A public/assets directory will be created. Inside this directory you’ll find a manifest.yml which includes the md5sums of the compiled assets in Rails 3. In Rails 4 the file will be manifest-<md5 hash>.json. Adding public/assets to your git repository will make it available to Heroku.
git add public/assets
git commit -m "vendor compiled assets"
Now when pushing, the output should show that your locally compiled assets were detected:
-----> Preparing Rails asset pipeline
       Detected manifest.yml, assuming assets were compiled locally


       ====





This should complete with no errors. Do NOT check in the assets into git after running this command.
````
RAILS_ENV=production bundle exec rake assets:precompile
````

https://devcenter.heroku.com/articles/rails-4-asset-pipeline
If you are getting an error at page load, but not while building assets you can use heroku run bash to debug it
````
$ heroku run bash
$ ls public/assets
````
You should see a manifest-<digest>.json or .sprockets-manifest-<digest> where <digest> is a long alphanumeric string as well as all of your asset files.

You can also see the exact file name that Rails believes it should serve by running $ heroku run rails console. In the console you can use the helper object and asset_path to determine the full path.
````
$ heroku run rails console
> puts helper.asset_path("application.js")
````
should result in something like this:
/assets/application-6aae32862efc758cf08c7b7fc0e85e15.js

[ ] To try --  Hanging asset builds
If your asset compilation appears to hang (but it isn't hanging), try removing the assets from your vendor/assets directory and putting them in your app/assets directory.
