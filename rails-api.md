# Rails API

1. rails new my_api --api --database=postgresql
2. cd my_api
3. rake db:create
4. rails generate model Contact name:string city:string
5. rake db:migrate

start the server and test the API in Postman
6. rails s
