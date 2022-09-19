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

|Operation      |Endpoint       |Description                                             |
|-------------  |-------------   |------------------------------------------------------ |
|GET  |http://localhost:5001/users/menu           |Find all pizzas in the menu           |
|GET  |http://localhost:5001/users                |Find all users' information           |
|POST |http://localhost:5001/users                |Add a new user into database          |
|GET  |http://localhost:5001/users/{user_id}      |Find a user's information via user_id |


**APIs in the order.js file**

Used **orders** and **menu** arrays to store all orders information and pizzas available in the menu respectively to act as the fake database. Also, here I assume that the both users.js and order.js files can access to the same database. 

|Operation      |Endpoint        |Description                                                                                                         |
|-------------  |-------------   |------------------------------------------------------------------------------------------------------------------- |
|GET  |http://localhost:5001/orders                                       |Find all order history in the database                                     |
|POST |http://localhost:5001/orders/{user_id}/{pizza_name}                |Add a new order to the database based on user_id and the name of the pizza |
|GET  |http://localhost:5001/orders/{user_id}/{pizza_name}                |Find the user's order status of a specific pizza                           |
|GET  |http://localhost:5001/orders/{user_id}                             |Find the user's ordering history (all receipt)                             |

**Potential Improvements**

In order to allow user to see a receipt of their order for up to one year, we may need to add a time attribute to our database so that we can do the SQL query like the following:

```bash
SELECT order 
FROM orders, users
WHERE users.user_id = user_id AND orders.user_id = user_id AND curr_time - orders.order_time >= 1
```





