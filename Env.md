# Ruby version not matching up...
### rbenv ... Ruby Environment mgmt

  error message:
  Shawn Tuttle (pair-shawnte *) ~/desktop/craigslist-jr-challenge
  $ bundle install
  Your Ruby version is 2.2.4, but your Gemfile specified 2.0.0

  to see which version of ruby running:
  > ruby -v

  => ruby 2.2.4p230 (2015-12-16 revision 53155) [x86_64-darwin14]

  to see which versions are installed/available:
  > rbenv versions

  =>
  system
  2.0.0-p353
  2.1.0
  2.2.1
  * 2.2.4 (set by /Users/apprentice/.rbenv/version)

  to run a different version than is currently running on machine:
  > rbenv local 2.0.0-p353     (local for just current proj enviro)

then should be able to run: bundle install
