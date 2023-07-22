import axios from "axios";
import { ADD_EXPENSE, DELETE_EXPENSE,GETALL_EXPENSE,SEARCH_EXPENSE} from "../action-types/expenses"

const API_URL='https://xpensermern.onrender.com'

export const addExpense=(data)=>async(dispatch)=>{
    try{
        const {title,category,amount,createdAt}=data;
        //url,endpint
        const res=await axios.post(`${API_URL}/expense`,{title,category,createdAt,amount});

        dispatch({type:ADD_EXPENSE,payload:res.data});
    }catch(err){
        console.log('error while calling addExpense API ',err.message);
    }
};

export const deleteExpense=(id)=>async(dispatch)=>{
    try{
        //url,endpint
        const res=await axios.delete(`${API_URL}/expense/${id}`);
        //add in store
        dispatch({type:DELETE_EXPENSE,payload:res.data});
    }catch(error){
        console.log('error while calling deleteExpense API ',error.message);
    }
};

//getting expenses from database

export const getAllExpenses=()=>async(dispatch)=>{
    try{
        //url,endpint
        const res=await axios.get(`${API_URL}/expense`);
        //add in store
        dispatch({type:GETALL_EXPENSE,payload:res.data});
    }catch(error){
        console.log('error while calling getAllExpense API ',error.message);
    }
}

export const searchExpense=(query)=>async(dispatch)=>{
    try{
        //url,endpint
        const res=await axios.get(`${API_URL}/searchexpense/${query}`);
        //add in store
        dispatch({type:SEARCH_EXPENSE,payload:res.data});
    }catch(error){
        console.log('error while calling SearchExpense API ',error.message);
    }
}
