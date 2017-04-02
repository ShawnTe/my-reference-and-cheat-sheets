# FactoryGirl
- purpose is to replace fixtures  
- best practices: do not add complexity to factories. Let them be simple attribute defining. Any complexity should be in the spec
- They suggest single factory file (per model, I think)

## Seed data
Guys at thoughtbot suggest seed data be data that needs to be seeded in the DB that doesn't change. For ex. if you need to list out all 50 states. Or load a tax rate table. Basically production ready data. I.e. data that doesn't change.   

- post = create(:post)    # builds and saves  
- post = build(:post)     # builds and doesn't save  

# stub =
like creating object to persist in db, w/o actually hitting database. Reason? Hitting the database takes more time. Faster to use stubs. May start with create, and if it works, try stub and see if still works, if so, use.  
- build_stubbed  
- create_stubbed  

# Returns a hash of attributes that can be used to build a User instance
attrs = attributes_for(:user)  

factory :admin, class: User do     // name is used to guess the class. Would look for class Admin  
    first_name "Admin"  
    last_name  "User"  
    sequence(:email) { |n| "#{n}.@example.com"}   // no worry of hitting not-unique constraint with:  
    admin      true                               //  "#{first_name}@example.com"  
end  

FactoryGirl.define do
  factory :group do
    name "Glass"
    thumbnail 1
    gallery                 # just list the class of item for belongs_to association
    association :medium, factory: :gallery    #if attribute isn't same name as model
    # archive false           # only provide attributes that are required thru validations
  end
end

FactoryGirl.define do
  sequence :bio do |n|                  // basically creating variables
    "The Amazing Joe the #{n}th"
  end

  sequence :email do |n|            #then can reuse throughout the file as just email
    "user#{n}@example.com"
  end

  sequence :name do |n|
    "name #{n}"
  end

  trait :archived do
    archive true
  end
end
# when is defining 'trait' necessary? Trait = named additional argument that you can pass when creating a Factory Girl instance. Above, I put in that definition of that model item. Note that we'd probably use traits to DRY up the specs. If passing multiple times that a group is archived, can do this.
trait :team do
  name "Upcase Team Name"
  sku "team_plan"
end
build_stubbed(:group, :archived)   # instance has archive: true   (factory, trait/s)



factory :user do        # note, I think this is outside the .define block
  name
  bio
  email
  team
end


## Spec syntax
user = create(:subscriber)       // where subscriber is a factory
group = create(:group, :archived)   // use an archived group
