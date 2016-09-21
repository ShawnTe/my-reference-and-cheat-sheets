# Asset compiling

??
goes to application.js
and application.css

## Manifest file
All the files get listed in:
app/assets/manifest.js
(put them in the order you want them to run)

//= require super_mario_bors.js
//= require mario.js
//= require luigi.css


or
//= require_tree .
(not nec the order you want?!?!?)

## Sprockets, a library
is the pipeline, how it happens
