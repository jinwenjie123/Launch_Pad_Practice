# Backend - API Implementation for Launch-Pizza
<br/>

To run
```bash
$ cd Launch_Pad_Practice
$ npm start
```

**APIs in the users.js file**

Used **users** and **menu** arrays to store all users' information and pizzas available in the menu respectively to act as the fake database. In reality, we should store and get the data from database. 

Furthermore, all APIs have been tested using Postman

|GET  |http://localhost:5001/users/menu           |Find all pizzas in the menu           |
| ------------- | ------------- | ------------------------- |
|GET  |http://localhost:5001/users                |Find all users' information           |
|POST |http://localhost:5001/users                |Add a new user into database          |
|GET  |http://localhost:5001/users/{user_id}      |Find a user's information via user_id |


