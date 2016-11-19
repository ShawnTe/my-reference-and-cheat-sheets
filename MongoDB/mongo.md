### Q's:
* find query is case-sensitive. Can I desensitize?

### Random thingy
documents are stored in JSON-like objects called BSON. All the stuff that JSON can store + ObjectId and ISODate. More at http://go.codeschool.com/bson-spec

Add date as Javascript date object, and stored as ISODate object:
"tryDate": new Date(2016, 10, 8)  NOTE: November since months start at 0

(research more:) db.collection.update  

## Broad view things
database is made up of:  
  collections which is made up of:  
    documents (which is a record in relational db)  

    > use reviews  
    switched to db reviews  // will create this db automagically when insert into it  
    > db         // shows current db  
    reviews  
    > help  
    >mongod     // to run database  

    > show dbs   // shows all databases  

#### Validations - mongo doesn't do much. Does:  
* unique id
* correct syntax
* document less than 16 MB


## Create a new document (CLI)
> db.potions.insert( { name: "Potion Number 9", description: "Love" } )
* *insert new document into collection called 'potions'. 'potions' will be created if not already.*
WriteResult({ "nInserted" : 1 })    // result => number inserted == 1

## Find
> db.potions.find()  
{ "\_id" : ObjectId("57f9c0aeb937a05ea9592f9c"), "name" : "Potion Number 9", "description" : "Love" }  
{ "\_id" : ObjectId("57f9c1bbb937a05ea9592f9d"), "name" : "Love Potion no. 69", "description" : "The really good stuff" }  

> db.potions.find({name: "Love Potion no. 69" })  
* *NOTE: case-sensitive*  
{ "\_id" : ObjectId("57f9c0aeb937a05ea9592f9c"), "name" : "Potion Number 9", "description" : "Love" }  

> db.potions.find({vendor: "JoJo", ingredients: "laughter"})    
* *NOTE: laughter in array*  
> db.potions.find({ "ratings.flavor" : 7})  

#### $
{"$group": {"\_id": "$vendor_id", "total": {"$sum": 1}}}  
When field begins with $, i.e. $group and $sum = perform a task    
When value begins with $, i.e. $vendor_id = field path that points to the value.  

#### Find operators
* $gt     greater than
* $lt     less than
* $gte    greater than or equal to
* $lte
* $ne     not equal to
#### Array query operator (use whenever querying an array)
* $elemMatch

db.potions.find({ "price": { "$lt": 20 }})
db.potions.find({ "sizes": { "$elemMatch": { "$gt": 10, "$lt": 20 }}})
db.potions.find({ "vendor": { "$ne": "JoJo" }})

sizes: [ 24, 36, 6 ]
sizes: [ 20, 23, 10 ]
sizes: [ 45, 16, 8 ]

db.potions.find({ "price": { "$gt": 10, "$lt": 20 }})  
returns sizes: [ 45, 16, 8 ]  
NOTE: without the $elemMatch, it would also return the others because they include   items that satisfy each criteria, i.e. > 10 && < 20  

#### Find projections (return only certain fields)
> db.potions.find(
... {ingredients: "love"},
... {'name': true, 'vendor': true})
{ "\_id" : ObjectId("57fbeed9cfeb5b67c5b88a03"), "name" : "Love Potion no.9" }
* can list only those I want (true), or don't want (false)
* the ONLY time we can put true AND false values in one project is with "\_id", ex. name and vendor: true and id: false

db.wands.find({},{ "name": true}).sort({"name": 1}) <--- only return names and in ascending order

#### Large search
* CLI will show 20 docs at a time. Will prompt "it (return)" for more
* can chain methods (b/c the cursor is actually an object ???whazza? )  "Cursor methods always come after find()  b/c find() returns the cursor object"
* .find().count()
* .find().sort({ "price": 1 })   where 1 is ascending and -1 is descending

> db.wands.find({"level_required": 2}).count()

#### Basic pagination
* .find().limit(3)     <== skip 0 docs and only show 3
* .find().skip(3).limit(3)     NOTE: costly for large collections

> db.wands.find().sort({"price":-1}).limit(3)


## Update
* *nUpserted = the number of documents created in this update*  

> db.potions.update({ name: "Potion Number 9"}, { $set : { ingredients : [ "laughter", 42 ], ratings : {flavor : 7, silliness : 8 } } )      
* *where update( {matcher}, {$set : {addition}})*   
* *without the $set operator, ALL fields will be replaced*  

* *NOTE that all the update functions begin with $, for ex. $set*  
* *Only first matching document will be updated, UNLESS add option multi:*

> db.potions.update({"vendor" : "JJ" }, { $set : {"vendor" : "JoJo"}}, {"multi" : true})  
WriteResult({ "nMatched" : 2, "nUpserted" : 0, "nModified" : 2 })

#### remove a field that no longer wanting to track
> db.potion.update (
  {},           <--- selects all
  { "$unset" : { "color" : "" }},   // to select any color
  { "multi" : true }
)

#### change a field name
> db.potions.update (
  {},
  { "$rename" : {"old field name" : "new field name"}},
  { "multi" : true }
)

#### change a single item in an array (note only changes first instance in array)
> db.potions.update (
  { "ingredients" : 42 },
  { "$set" : { "ingredients.$" : "fortytwo"}}, <--- where $ is placeholder for queried item
  { "multi" : true}
)

#### change an item with . notation
> db.potions.update (
  { name: "Potion Number 9" },
  { "$set": { "ratings.flavor" : 6 }}
)

#### More interesting operators;
* $max updates if new value is greater than current value, inserts if empty
* $min updates if new value is less than current value, inserts if empty
* $mul multiplies current value by specified value, inserts 0 if empty
* $pop removes first or last time from array -- { "$pop": {"categories" : -1 (first or 1 for last)}}   NOTE: removes the item, does NOT return it
* $push to add item to array
* $addToSet will only add item to array if it doesn't already exist
* $pull removes all matching items from an array
* lookup more with "update operators"

## Remove
> db.potions.remove({name: "sample"})       
* *NOTE: case-sensitive, will remove all that match the query*

## Log data
for ex. whenever someone clicks on an item for "more info", a log count is recorded  
In logs collection...  
db.logs.udpate(  
  { "name" : "Potion Number 9" },  
  { $inc : { "count" : 1 }}   
  )  
* field will get created in log if it doesn't exist yet
* if document doesn't exist, will get nMatched : 0 UNLESS
db.logs.udpate(  
  { "name" : "Potion Number 9" },  
  { "$inc" : { "count" : 1 }},
  { "upsert" : true }  
  )

## Data Modeling
embedded vs referenced (relational) documents
* when there's a lot of duplication in a record, ex. vendor info. Reducing duplication reduces inconsistencies.
* atomic writes with embedded docs (all or no changes made with update)
  * Mongo doesn't support mutli-doc writes. I.e. with referenced documents, it's possible that both write operations won't occur, for ex. new vendor/potions, say the potions update but for some reason the vendor doesn't; now the potions refer to an object that doesn't exist.  

db.potions.insert({
  "\_id": Object Id(...),
  "name": "Invisibility",
  "vendor_id": "Kettlecooked",
  ...
})

db.vendors.insert({
  "\_id": "Kettlecooked",    // Note: custom id
  "phone": 5555555,
  ...
})
* Mongo does NOT 'join' collections. So when wanting info from both, do two separate queries. One to pull up the potion and the second to pull up the vendor info.

### deciding to embed or reference
* generally speaking, embedding is best starting point.  
* reference data when you need to access document independently  
* consider referencing when you have large data sizes
* ask the 3 questions below (how data used, etc)
* if data really seems relational, maybe should use relational db  

for ex. potions will have comments, which belong to user.  
* Potions {name, description, vendor, powers, ratings, comments}  
* Comments {title, body, user}  
* User {username, email, favorites}  

potion has many comments  
user has many comments  
comment belongs to potion  
comment belongs to user  
potions and users not related  

3 questions:  
1. How will data be used? I.e.  
always together: embed
sometimes together: embed or reference  
rarely together: prob reference, poss embed  
* whenever show potion, will show comments. Whenever show comments, will show user.  
Implies: embedding  

2. What's the expected size?
less than 100 documents: embed
more than a few hundred: embed or reference  
thousands: reference  
* we don't expect more than 20 comments per potion and each comment only has one user, so still thinking of embedding it all.  

3. Will the data change often?
never/rarely: embed  
occasionally: embed or reference // if ref, will need to change for each appearance in parent document  
constantly: reference

#### sum it up:
potion and comments:  
* data will be used together (embed)  
* expected size < 50 (embed)  
* data won't change often (embed)
=====> embed  

comments and users:
* data will be used together (embed)
* expected size = 1 (embed)
* user data may change, for. ex change email or list of faves, and will require change for *all* comments (reference)  
=====> reference

## Common Aggregations
* Combining data for audits and reporting, for ex. how many potions by one vendor

db.potions.aggregate(
  [{"$group": {"\_id": "$vendor_id"}}]
  )
  * aggregate takes an array  
  * aggregate takes stage operators as parameters, for ex. $group
  * $group is a stage operator that groups data by any field we specify
  * "\_id" is the "group key" & is required by operator
  * $vendor_id is a 'field path' and is a link to field in document

  Above returns:  
  {"\_id": "Kettlecooked"},
  {"\_id": "Brewers"},
  {"\_id": "Leprechaun, Inc"}  

  * anything that comes after "\_id" group key is considered an accumulator  
  * accumulator can be assigned to any field name, and can take an expression that will be computed on each document in a group

  db.potions.aggregate(
    [{"$group": {"\_id": "$vendor_id", "total": {"$sum": 1}}
    ])

  for ex. "total": {"$sum": 1} will add 1 for ea doc in group:  
  {"\_id": "Brewers", "total": 2},
  {"\_id": "Leprechaun, Inc": "total": 3}

  Add another accumulator:
  [{"$group": {
      "\_id": "$vendor_id",
      "total": {"$sum": 1},
      "grade_total": {"$sum": "$grade"}
    }}]

    * additional accumulator operations:
    - $avg for average
    - $max for maximum
    - $min for minimum // can use max and min in same query

    "Wand Buyers Guide":  
    db.wands.aggregate([
  {"$group": {
    "\_id": "$maker",
    "total\_wands": {"$sum": 1},
    "max\_magic": {"$max": "$damage.magic"},
    "lowest\_price": {"$min": "$price"}
  }}
])
==> {
  "\_id": "Foxmond",
  "total\_wands": 3,
  "max\_magic": 93,
  "lowest\_price": 4.99
}

#### Aggregate pipeline
db.potions.aggregate([stage, stage, stage])
* use match and project early and often to slim down amount of data in pipeline  

Top 3 vendors with potions under $15
db.potions.aggregate([
  {"$match": {"price": {"$lt": 15}}},
  {"$project": {"\_id": false, "vendor_id": true, "grade": true}},
  {"$group": {
    "\_id": "$vendor_id",
    "average_grade": {"$avg": "$grade"}}},
  {"$sort": {"average_grade": -1}},
  {"$limit": 3}
  ])
