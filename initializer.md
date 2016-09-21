# Initializer

in config file  
inflections.rb is where pluralizations are defined

backtrace_silencer is where you can change the error message behavior. For ex. if missing an 'end', then you only see that part of the message instead of all of them being listed.

# Strong parameters
A rule of thumbs for strong parameters
mass assignment

# Turbolinks
pushState + Ajax
changes <title> and <body>
for regular js /  ajax needs to have delegated event listener, so
document ready on load
$(document).on('load', etc)

#Factory Girl
gem facory_girl_rails ~> x.x.x.

gem will look in hre:
spec/factories/blahblah.rb

factory :guess do
  user_input { FactoryGirl.generate(:name)}

  #HAML
  HTML abstaction markup language
  gem
  package for Atom

# Form validation - client side
  all firelds filled out
  email is validationpword is * char long
  password and validation match
  email alreday in user_input

  jquery validation
  rules {
    "user[email]", [required: true, email:true],
    etx
  }

# link_to, button_to, form_for
  link_to(text, path, options (like add a class))
  button_to(text, path, options    ---- by default make a post request
    prefix_path
    root_path to home page
    in options you can give it a class or method: 'get'

  form_for
