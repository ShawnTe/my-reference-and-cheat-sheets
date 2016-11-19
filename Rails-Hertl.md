

## Glossary
IDE = integrated development environment
gemfile.lock = A list of gems used to ensure that all copies of the app use the same gem versions
config.ru = configuration file for Rack middleware
Rakefile = Utility tasks available via the rake command


## Convention / Other stuff
* two spaces for indentation is a near-universal convention in Ruby
* gem versions: the >= notation always installs the latest gem,
* whereas the ~> 4.0.0 notation only installs updated gems where the last digit differs e.g. any 4.0.x (will not go up to 4.1)
* gem list <gem name>, e.g. gem list uglifier for version
* may need to bundle update before bundle install
* ls app/controllers/*_controller.rb    ** list all controllers
* git add -A  // adds all file EXCEPT those in the gitignore
* git commit -a -m "blah"  // commits all modifications to *existing* files, i.e. DON'T NEED TO ADD FIRST!!!
* git branch -D branch-name  // deletes the branch EVEN with commits on it, i.e. totally screwed up branch and don't want to merge
* Note: if created new files, need to -A before -a
* if accidentally deleted file, but not yet committed: git checkout -f which forces overwriting the current changes
* git -u  // look up: “git set upstream”
* A random code generator! For ex. for random websites
````
('a'..'z').to_a.shuffle[0..7].join
````

## For Future Reference
* 1.4.3 Bitbucket


## Simple install
* rails _5.0.0.1_ new hello_app  // can include desired version (auto runs bundle install)
* Hertl uses specific gem versions because even a point can break things (remember to bundle install again)
* rails s

* To prepare the system for deployment to production, we run bundle install with a special flag to prevent the local installation of any production gems (which in this case consists of the pg gem). Running install update the gemfile.lock
````
$ bundle install --without production
````
* Then deploy to Heroku
