[Ruby on Rails Guide](http://guides.rubyonrails.org/) -- ex. c/o activerecord relations
[RoR more detailed](http://api.rubyonrails.org/)
gem open ___ activerecord  ('open' not working on my pea brain)

- [Rake commands](rake-commands.md)
- [Active Record Associations](active-record-associations.md)
- [RESTful CRUD](crud-restful.md)

## Naming Conventions
- Class names are singular CamelCase
- Table names are plural snake_case
- Foreign key is snake_case_id

## Setting up table
    Class CreateCats < ActiveRecord::Migration
      def change
        create_table :cats do |t|
          t.integer :age, presence: true   (a validation)
          t.string :name, null: false
          t.text :description
          t.references :breeds
          t.boolean :neutered

          t.timestamps null: false  (auto creates created and updated columns)
        end
          add_index :breeds, :breed_type_id   (often index foreign ID -- on one side of relationship)

      end
    end
### [Validations](http://edgeguides.rubyonrails.org/active_record_validations.html)

## Instance methods
- #where(name: "Jayda")
- #where("dog_id = 1 AND cuteness < 10")
- #where("dog_id = ? AND name LIKE ?", 1, '%Te%')
- #count   (there's additional argument syntax, like {}, I think)
- #order(dog: :asc)     => (table, {})
- #limit(3)
- #pluck(:name, :age)   => attributes
- #first(2)           => args optional
- #find(1)            => index #
- #find [1,3]  or .find(1,3)
- #find_by(name: "Jayda").age      => returns age
- #find_by(age: 4)          => returns FIRST with age: 4  -- if none, returns nil
- #find_or_initialize_by(name: "Jayda")
- #find_or_create_by(name: "Jayda")
- #save
- #update_attributes(age: 3, breed: "Setter")
- #assign_attributes
- #persisted?  => i.e. saved to db
- dog[:name] = "Fido"  => reassign (w/o save) attribute

## Class level declarations/macros
- #methods
- #methods.sort
- #add_column :table, :header, :type (of data, i.e. string, integer)
- #remove_column :table, :header, ___ optional
- #rename_column :table, :old-header, :new-header
- #create [{name: "Jayda", age: 3}, {name: "Spot", age: 4}] => #new + #save & returns dog with id or nil if fail
- #new
- #save => returns true/false
- #column_names (should be same as just Dog)

## Examples
__Dog 1 should always receive cuteness score of 10__
    Rating.where("dog_id = 1 AND cuteness < 10").each { |rating| rating.cuteness = 10}.each {|rating| rating.save}

__Judge 2 rated Dog 2 but the cutemenss and coolness scores were reversed__
    Rating.where("judge_id = 2 and dog_id = 2").each { |rating| rating.update_attributes(coolness: 8, cuteness: 10) }

### Passwords
  - has_secure_password  (api_rubyonrails.org)
    looks for t.string :password_digest


