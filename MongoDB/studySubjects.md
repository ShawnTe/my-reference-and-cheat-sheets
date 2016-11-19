
## Philosophy and Features
MongoDB harnesses the innovations of NoSQL while maintaining the foundation of
relational databases.   
Taking from relational and building on it:
- expressive query language and 'secondary' indexing -- supporting both operational and analytical applications
- strong consistency -- applications should be able to immed read what was written
- enterprise  mgmt and integrations -- fit seamlessly into the enterprise IT stack
-- multimodel design  

and adding on, NoSQL offers:
- flexible data model -- Whether document, graph, key-value, or wide-column, all of them offer a flexible data model, making it easy to store and combine data of any structure and allow dynamic modification of the schema without downtime or performance impact
- scalability and performance -- NoSQL databases were all built with a focus on scalability, so they all include some form of sharding or partitioning.
- always ON global deployments -- They are designed to run across many nodes, including replication to automatically synchronize data across servers, racks, and geographically-dispersed data centers

- flexible storage architecture --  the database automatically manages the movement of data between storage engine technologies using native replication.
### data types
MongoDB allows data to be represented as:
- simple key-value pairs,
- flat, table-like structures,
- rich documents, and
- objects with deeply nested arrays and sub-documents

### BSON and JSON
BSON (Binary JSON). The BSON encoding extends the
popular JSON (JavaScript Object Notation) representation
to include additional types such as int, long, date, floating
point, and decimal128

- MongoDB has ability to perform left-outer JOINs (combines data from multiple collections)

- when developers add more
features, MongoDB continues to store the updated objects
without the need to perform costly ALTER TABLE
operations, or worse – having to re-design the schema
from scratch.

#### document validation
can enforce checks on doc structure, data types, data ranges and the presence of mandatory fields. As a result, DBAs can apply data governance standards while developers maintain the benes of a flexible doc model.

## Query model
querying and visualizing data
indexing



## CRUD

Indexes
Data Modeling
https://docs.mongodb.com/manual/data-modeling/

Aggregation
Replication

Sharding
  // Application and server Admin (DBA only)
Server Tools

Storage Engines
General Computing Knowledge
Review

Review
Review
