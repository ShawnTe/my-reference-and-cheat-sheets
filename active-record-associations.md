# Active Record Associations

### belongs_to
    class Rating
      belongs_to :dog, { :class_name => "Dog", :foreign_key => :dog_id }
      belongs_to :owner, class_name: "Person"
    end
#### makes available:
- #build_dog (doesn't persist)
- #create_dog (persists)
- #create_dog\!  (ex. rating.create_dog)

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
