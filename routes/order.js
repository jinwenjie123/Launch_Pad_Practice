import express from 'express';
import {v4 as uuidv4 } from 'uuid';

const router = express.Router();

// fake order database for order record
let orders = [];

let menu = ["pizza1", "pizza2", "pizza3"];

// return all order records
router.get('/', (req, res) => {
    res.send(orders);
});

// allow a user to order a pizza (add new order to the orders)
router.post('/:user_id/:pizza_name', (req, res) => {
    const { user_id, pizza_name} = req.params;

    const order = req.body;
    const orderWithId = { ...order, pizza_name: pizza_name, user_id: user_id};
    orders.push(orderWithId);
    res.send(`New order ${orderWithId.pizza_name} has been placed successfully by ${orderWithId.user_id}`); 
});

// find the user's order status 
router.get('/:user_id/:pizza_name', (req, res) => {
    const { user_id, pizza_name} = req.params;
    const found = orders.find((order) => order.user_id === user_id && order.pizza_name === pizza_name);
    res.send(found);
});

// find the user's all receipt 
router.get('/:user_id', (req, res) => {
    const { user_id } = req.params;
    const result = orders.filter(order => order.user_id === user_id);
    res.send(result);
});


export default router;