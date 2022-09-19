import express from 'express';
import {v4 as uuidv4 } from 'uuid';

const router = express.Router();


// fake user database for practice
let users = [];
// fake menu database consists of all pizzas
let menu = ["pizza1", "pizza2", "pizza3"];

// return all pizzas in the menu that can be seleted by customers
router.get('/menu', (req, res) => {
    res.send(menu);
});

// return all users' information
router.get('/', (req, res) => {
    res.send(users);
});

// allow user to resiger to the ordering system (add user info to the database)
router.post('/', (req, res) => {
    const user = req.body;
    const userWithId = { ...user, user_id: uuidv4()};

    users.push(userWithId);
    
    res.send(`New User ${user.firstName} has been added successfully`); 
});

router.get('/:user_id', (req, res) => {
    const { user_id } = req.params;
    const found = users.find((user) => user.user_id === user_id);
    //console.log(found);
    res.send(found);
});

export default router;