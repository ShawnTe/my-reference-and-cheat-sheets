# Active Record Associations

[More form Odin project](http://www.theodinproject.com/ruby-on-rails/active-record-associations )
[poly-morphic project opinions-r-us](https://github.com/ShawnTe/opinions-r-us)

#### Assumptions:
1. the model's class is based on the name of the association
2. the foreign key in belongs_to is association-name_id

Options --  :source, :foreign_key, :class_name, :as (alias)
:source  (singular, lowercase -- refers to the association)  
Q: What model are we pointing to?  
Q: What foreign key are we pointing to?  

thus:  
Class Post <ActiveRecord::Base  
  belongs_to :author, class_name: :User      <== will look for author_id in Posts table  
end

for User.first.authored_posts:  
"find the foreign key in authored_posts called author_id,  
which actually references Post class and a table by that name,  
and call this method authored_posts"  

Class User  
    has_many :authored_posts, foreign_key: :author_id, class_name: :Post  
end

class Post  
    has_many :post_authorings, foreign_key: authored_post_id  
    has_many :authors, through: :post_authorings, source: :post_author  
    belongs_to :editor, class_name: User  
end  

Post.first.authors:  
Goto the authors association in the Post model.  
Goto post_authorings association.   
Find belongs_to association for :post_author (i.e. don't look for belongs_to :author)  

### has-many-through
Think of :source as being just like :class_name but for associations in the 'through table'.  
class PostAuthoring  
    belongs_to :post_author, class_name: :User  
    belongs_to :authored_post, class_name: :Post  
end  


### belongs_to  
    class Rating  
        belongs_to :dog, { :class_name => "Dog", :foreign_key => :dog_id }  
        belongs_to :owner, class_name: "Person"   ==> if table name diff than belongs_to  
    end  

#### makes available:
- #build_dog (doesn't persist)
- #create_dog (persists)
- #create_dog!  (ex. rating.create_dog)

- expects to 1. find class Dog, and 2. a dog_id in Ratings

### has_many
    Class Dog < ActiveRecord::Base
      has_many :ratings   (note plural)
      has_many :doctors, through :appointments  => not directly connected to doctors
    end
#### makes available:
- #ratings <<   (shovels ratings into dog's collection of ratings (?) dog.ratings yes?)
- #getter and setter methods for: #rating_ids  and  #ratings
- methods: #build, #create #create!
examples:
    - tenley.ratings << new_rating     //  tenley.ratings.include? new_rating
    - tenley.ratings.build(coolness: 8, cuteness: 7, judge_id: 3)  (note: save on dog => tenley.save)
    - tenley.ratings = []    (an array)
    - tenley.rating_ids= rating_ids    (an array of rating_ids)


## Validations
  - dog.valid?
  - dog.errors.messages
  - dog.errors[:email]
  - dog.errors.messages.any?
