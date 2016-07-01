
# Instance methods
.where(name: "Jayda")
.where("dog_id = 1 AND cuteness < 10")
.where("dog_id = ? AND name LIKE ?", 1, '%Te%')
.count   (there's additional argument syntax, like {}, I think)
.order(dog: :asc)     => (table, {})
.limit(3)
.pluck(:name, :age)   => attributes
.first(2)           => args optional
.find(1)            => index #
.find [1,3]  or .find(1,3)
.find_by(name: "Jayda").age      => returns age
.find_by(age: 4)          => returns FIRST with age: 4  -- if none, returns nil
.find_or_initialize_by(name: "Jayda")
.find_or_create_by(name: "Jayda")
.save
.update_attributes(age: 3, breed: "Setter")
.assign_attributes
.persisted?  => i.e. saved to db
dog[:name] = "Fido"  => reassign (w/o save) attribute

# Class methods
.methods
.methods.sort
.add_column :table, :header, :type (of data, i.e. string, integer)
.remove_column :table, :header, ___ optional
.rename_column :table, :old-header, :new-header
.create [{name: "Jayda", age: 3}, {name: "Spot", age: 4}] => #new + #save & returns dog with id or nil if fail
.new
.save     => returns true/false

Dog == Dog.column_names




### Dog 1 should always receive cuteness score of 10.
Rating.where("dog_id = 1 AND cuteness < 10").each { |rating| rating.cuteness = 10}.each {|rating| rating.save}

### Judge 2 rated Dog 2 but the cutemenss and coolness scores were reversed:
Rating.where("judge_id = 2 and dog_id = 2").each { |rating| rating.update_attributes(coolness: 8, cuteness: 10) }
