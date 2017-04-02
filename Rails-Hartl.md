

## Glossary
IDE = integrated development environment
gemfile.lock = A list of gems used to ensure that all copies of the app use the same gem versions
config.ru = configuration file for Rack middleware
Rakefile = Utility tasks available via the rake command


## Index-ish
* Bitbucket [1.4.3]
* User password setup [end of chap 6]
* Rails environments [Box 7.1]
* debugger and
````
debug(params) if Rails.env.development?
````
* SSL [7.5.1]
* Testing the login layout integration -- **I didn't do (needs fixture)** [8.2.4]
* **"Remember me"** functionality [chap 9]
* Testing the user_edit layout integration -- **I didn't do (needs fixture)** [8.2.4]




## Convention / Other stuff
* two spaces for indentation is a near-universal convention in Ruby
#### Gems
* gem versions: the >= notation always installs the latest gem,
* whereas the ~> 4.0.0 notation only installs updated gems where the last digit differs e.g. any 4.0.x (will not go up to 4.1)
* gem list <gem name>, e.g. gem list uglifier for version
* may need to bundle update before bundle install

* ls app/controllers/*_controller.rb    ** list all controllers

### Fun Git Facts
* git add -A  // adds all files EXCEPT those in the gitignore
* git commit -a -m (or -am) "Brilliant comment"  // commits all modifications to *existing* files, i.e. DON'T NEED TO ADD FIRST!!!
* git branch -D branch-name
 // deletes the branch EVEN with commits on it, i.e. totally screwed up branch and don't want to merge
* Note: if created new files, need to -A before -a
* if accidentally deleted file, but not yet committed: git checkout -f which forces overwriting the current changes
* git -u  // look up: “git set upstream”

* A random code generator! For ex. for random websites
````
('a'..'z').to_a.shuffle[0..7].join
````
*  touch is designed to update the modification timestamp of a file or directory without otherwise affecting it, but as a side-effect it creates a new (blank) file if one doesn’t already exist.
* Ruby comments start with the pound sign # (also called the “hash mark” or (more poetically) the **“octothorpe”**) and extend to the end of the line
* Hashes are essentially arrays that aren’t limited to integer indices. (In fact, some languages, especially Perl, sometimes call hashes associative arrays for this reason.) Although hashes resemble arrays, one important difference is that hashes don’t generally guarantee keeping their elements in a particular order
* In Ruby, when hashes are the last argument in a function call, the curly braces are optional.
* Ruby: Inside the String class the use of 'self' is optional on a method or attribute (unless we’re making an assignment), so -- self == reverse -- instead of self == self.reverse works
* in IRb, to include a file called example_user.rb, for ex. a Class, use -- require './example_user'
  * Here the ’.’ is Unix for “current directory”, and ’./example_user’ tells Ruby to look for an example user file relative to that location
* This practice of evaluating **||** expressions from left to right and stopping on the first true value is known as short-circuit evaluation. The same principle applies to **&&** statements, except in this case evaluation stops on the first false value.


* **killing processes**
more info in Hartl Box 3.4. Unix processes
````
$ ps aux | grep spring
````
then, where -15 is a kill code adn 12241 is from:  
ubuntu 12241 0.3 0.5 589960 178416 ? Ssl Sep20 1:46
````
$ kill -15 12241
````
