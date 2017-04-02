# Cucumber and Capybara

### Great cheatsheets:
- [Stefano Tomas](https://gist.github.com/tomas-stefano/6652111)  
- [Rails Cook](http://www.railscook.com/recipes/capybara-cheat-sheet/)  

keywords
````
When /I sign in/ do
  within("#session") do               // id of div?
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: 'password'
  end
  click_button 'Sign in'              // text of button? Probably label??
end
````

run a single feature:  
cucumber features/feature_name.feature  
