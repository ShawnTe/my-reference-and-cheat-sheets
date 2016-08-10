## Steps to begin a new project

CLI
npm install express-generator -g
> express project_folder_name
> cd project_folder_name

> npm install     // installs the dependencies in package.json

CLI to install a dependency without manually adding to package.json
> npm install underscore --save

<!-- > npm start -->
<!-- > DEBUG=project_folder_name:* npm start -->
> nodemon app.js

<!-- 
Optionally, in package.json:
1.
    "mongodb": "^1.4.4",
    "monk": "^1.0.1"
2.
  remove jade -->




<!-- CLI
> npm install pug   (might not be in right order -- should be ok??)
> npm install pug-cli -g    (necessary?)
> npm install jade --save
> npm install
> mkdir data       (in anticipation of future db)
 -->

Browser
http://localhost:3000

nodemon [your node app]
http://localhost:8080

NOTE: Need to restart server after changes

[pug resources](https://www.npmjs.com/package/pug)