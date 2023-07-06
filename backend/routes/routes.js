import express  from "express";
import { addExpense, deleteExpense, getAllExpense, searchExpense } from "../controller/expense-controller.js";

const route=express.Router();

route.post('/expense',addExpense);
route.get('/expense',getAllExpense);
route.get('/searchexpense/:query',searchExpense);
route.delete('/expense/:id',deleteExpense);

export default route;