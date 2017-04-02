ruby can be accessed everywhere because of environment variable or something like that.
when you call on it, it looks down the path and get the first interpreter, even if it isn't the most recent one.

What's the difference tra require and LOAD?  
require loads if it hasn't already been loaded and doesn't execute   (looks for .rb)
load loads the file every time and executes code     (always need to include the details always to .rb) -- use load while developing the gem and want to force a hard reload.

reload!

in term ECHO
in IRB ENV['PATH']
irb
DateTime.now
constant undefined
require 'xyz'   -- require is a method in the terminal
require 'date' (I know it's called this b/c in ruby documentation)
reads file from file system into memory
DateTime.now
DateTime.now.to_s


1.days
NoMethodError
(how do we figure out what to require to make this work?)

gem list  activesupp*
bundle open activesupport
gem install gemedit
bundle open activesupport
(??)
find: def days
core sys

LOAD_PATH (loads libraries)
(??)

Solution 1
require 'active_support'      (only loads the top level which basically has SecureRandom)
require 'active_support/core_ext/numeric/time'  (time is the .rb file)

Solution 2
require 'active_support'      (only loads the top level which basically has SecureRandom)
require 'active_support/core_ext'          (this file has a method to require all the gems-- loads everything)



__FILE__  (current file)



resources
rubyplus.com
- Ruby and Gems installation basics
- Loading Code in Rails ActiveSupport


guides.rubygems.org
  /make-your-own-gem
