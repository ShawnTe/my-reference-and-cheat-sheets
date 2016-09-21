# Search Bar
from Danielle @hypatiah on opinions-r-us
### Model
````
class Question < ActiveRecord::Base
  has_many :votes, as: :votable
  has_many :comments, as: :commentable
  belongs_to :user
  has_many :answers
end
````

### Layout
````
<form action="/search" method="get">
   <input type="text" name="query" placeholder="Search">
   <input type="submit">
</form>
````

### Routes
````
get '/' do
  @questions = Question.all
  erb :index
end

get '/search' do
  @questions = []
  content_match = Question.where(["content LIKE ?", "%#{params[:query]}%"])
  # user_match = Question.where(["SELECT * FROM users WHERE name LIKE ?", "%#{params[:query]}%"])
  user_match = User.where(["name LIKE ?", "%#{params[:query]}%"])
  user_match.each do |user|
    user.questions.each do |question|
      @questions << question
    end
  end
  if content_match
    content_match.each do |question|
      @questions << question
    end
  end
  erb :index
end
````
