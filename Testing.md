
realworld.io  -- fake apps for testing, front and back end  

## Setup Jest
FrontEnd Masters course
video #1 starting at 36:45
````
cd Desktop/
mkdir setup-jest-math
cd setup-jest-math/
atom .
yarn init -y    // initializes package.json
yarn add --dev jest    // adds to package in dev mode
````
in Atom
````
select new file:
__tests__/sum.js    // creates file and a folder called __tests__
````
in package.json
````
"script": {
  "test": "jest"
}
````
to run:
````
npm test
````
(see examples in /setup-jest-math)

## Syntax
test()
test.skip()
test.only()

## add babel to work with jest
yarn add --dev babel-core babel-preset-env

## best practices
- avoid negation testing  

## code coverage
how much of code base is covered? Kent in FE tutorial thinks that for big apps, 75% is adequate. Above that, diminishing returns. For Open Source modules, however, 100% can be appropriate.
- add -- coverage to jest in package.json
- open coverage/lcov-report/index.html    //for cool coverage report in chart format
- to add files in coverage stats that might not be included in tests (for ex. for existing large projects), configure jest in package.json:
````
"jest": {
    "testEnvironment": "jest-environment-node",       // prevents JSDOM from setting up (heavy)
    "collectCoverageFrom": [                        // adds all files whether included in test or not
      "*.js"
    ],
    "coverageThreshold": {                          
      "global": {
        "statemetnts": 50,
        "branches": 50,
        "functions": 50,
        "lines": 100
      }
    }
  }
````

## jest watch mode
Super cool tool with:
1. type ahead to find certain test file to run.
2. auto updates (say you're testing and developing at the same time.)  
add to scripts in package:
````
"test:watch": "jest --watch"
````
then run:
npm run test watch

3. **Also: will say that you have no tests to run since last commit if no changes made**

## unit testing
input and output of a (maybe) a function, could be a small bit of code. In a function is easier to test.
for ex. entering wrong format of name will get caught with validation and trigger error
NOT: for making http requests and calls to database (did I hear this correctly?)

## integration testing
taking multiple units and testing them together, are they integrated into the system? (usually mocked)
for ex. you have: Dropdown / make a call to get fake data / then populate the dropdown with fake data

## end to end test, might be called flow-based testing
no mocks. User oriented. On a commerce site, make sure you can:
- create a User
- log in
- add items to cart
- checkout

No mocks, though will need a testing kind of service to run credit card.

Examples (sounds like BDD):
- registration process
- post an article process
- commenting on an article

## where to focus our attention for testing?
consider:
- speed (running and creating and maintaining)
- cost (time and energy)

E2E  (slowest and most costly)
integration (mid of both)
Unit (fastest and cheapest)
