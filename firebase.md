#Firebase

## setup on local
* firebase    // get list of commands
* firebase login    // login to correct firebase account
* mkdir one-time-password   // for each new Google Cloud Function
* cd one-time-password
* firebase init    // start new Firebase project
  * for a function, select function
  * 'don't setup a default project' console (per Stephen's advice)
  * default settings, hit enter
  * install dependencies with npm now? YES
  * What do you want to use as your public directory? // public
  * Configure as a single page app? // no
* Make changes in ./functions/index.js
* firebase deploy   // to kick up to cloud
  * no project selected? remote Firebase dashboard: https://console.firebase.google.com/project/one-time-password-b3051/functions/list
  * project id = one-time-password-b3051
  * (no changes, just boilerplate with function uncommented out)
  * firebase deploy --project one-time-password-b3051
  * on success, Function URL (helloWorld): https://us-central1-one-time-password-b3051.cloudfunctions.net/helloWorld
* Enter function url in browser to see it go!
  * Each function gets it's own URL
* Can View Logs in remote firebase, note can take a while to register

##  setup project on firebase console (in firebase.google.com)
* Add project
* Add a project name, like one-time-password
* in project dashboard, on left, choose 'Functions'

## The Code
* basics:
```
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
```
* firebase looks for all properties following 'exports', so, 'helloWorld', 'goodBye'

## File structure
* one file per function
  * common js, so: module.exports = function(){};
  * note that can also use module.exports = () => {};  // Stephen uses 'function' as a preference when only one function in the file to make it easier to visually find

* to see what was in the request json object
```
module.exports = () => {
  res.send(req.body);
}
```
* note this was a Post request

## Test posts in Postman
* type: post
* body: raw and JSON(application/JSON)
* { "all strings in key": "also all string for value" }    // must be double quotes

## Main index.js file
* each function's file imported into index.js
* const createUser = require('./create_user')
* Stephen turns default 'var' into 'const'
* each export property will call on one import (in index.js)
```
exports.createUser = functions.https.onRequest(createUser);
```

## To access Service Client (index.js) in order to write to DB
```
const admin = require('firebase-admin');

```

and then, get info from remote firebase, Overview, settings gear, Project Settings:
* on far right "Service Accounts"
  * copy admin initializeApp line
  ```
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-b3051.firebaseio.com"
  });
  ```
'serviceAccount' requires a super secret key.
* generate key on same remote firebase page: Generate New Private Key button  
* downloads a json object in a file
* create new file: functions/service_account.json
* **ADD TO GIT IGNORE FILE**  // functions/service_account.json
* paste json object in it

then, back in index.js, add   
```
const serviceAccount = require('./service_account.json')
```

## Authentication
*by default, this is not turned on with new Firebase project*  
* for setting up users, we want to run them thru authentication rather than just sticking them into the DB
* in Authentication tab, button: 'setup sign-in method'
* in Stephen's tutorial: choose anonymous, enable, save
*

## The function
require this in index file as well as the indy files that access DB, for ex., create_user:  
```
const admin = require('firebase-admin');
```
#### General format: (see pseudocode and code in create_user file)
* Validation
* Massage data
* Body of what we're trying to accomplish
* Return response to user

### Test function in Postman
### See users in Authentication in remote firebase
