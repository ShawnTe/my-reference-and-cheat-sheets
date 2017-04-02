## Steps to begin a new project
[Great tutorial on Scotch](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)  
[Another at Tutorials Point](https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm)  

## Setup a basic structure with:
express my-app-name  
// note that it includes jade, node_modules is empty (and it works!)  
cd my-app-namet && npm install         // remember to npm install!  
DEBUG=another-node-test:* npm start    // to run the app  


#### Setting up just package.json and node_modules for Express via CLI (why all the node_modules?????????)
mkdir myapp  
cd myapp  
npm init    // creates package.json, prompts for entry, ck entry point file  
npm install express --save  


Optionally, in package.json:  
1.  
    "mongodb": "^1.4.4",    
    "monk": "^1.0.1"  
    ( then in CLI 'mkdir data'  in anticipation of future db)   
2.  
  remove jade  

npm install pug             // installs dependency w/o adding to package.json  
npm install pug-cli -g      // saves globally  
npm install jade --save     // should include in package.json  
npm install                 // sets up environment based on package.json  


npm start  
DEBUG=project_folder_name:* npm start       // ?? whazza  
http://localhost:3000  
NOTE: Need to restart server after changes  

nodemon app.js  
http://localhost:8080  


[pug resources](https://www.npmjs.com/package/pug)  



--  
npm init
