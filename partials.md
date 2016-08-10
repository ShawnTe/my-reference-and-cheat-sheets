
partial = consuming it in another view
<%= render 'pages/design' %>
<%= render 'pages/make' %>
<%= render 'pages/edit' %>

partial -- input / login form
login -- 


### will need locals

Put this on the layout at the top of the <Body>
<%= render :'sessions/new" %>  (login info)


<% if current_user %>
  <a href="/users/<%= current_user.id %>">Profile Page</a>
  (logout)
<% else %>
  partial for login and register
<% end %>


Style the <form> in stylesheet
.class {
  margin-top: 5%
}

to get currency
setup in table as integer
def to_currency
  helper method * 100  // save amount in cents
end