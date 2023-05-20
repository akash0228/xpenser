import React from 'react'
import Card from './card'
import { useSelector } from 'react-redux'
import './expense-list.css'
import {toast,ToastContainer} from 'react-toastify'
const ExpenseList = () => {
    const {expenseList:list,query}=useSelector(state=>state.expenses);
    const filteredList=list.filter(item=>item.title.includes(query));
    const notifySuccess=()=>toast.success("Expense Deleted");
  return (
    <div className='expense-list'>
        <ToastContainer
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            theme="light"
            />

        {filteredList.length?(
            filteredList.map(item=>(
                <Card item={item} notifySuccess={notifySuccess}/>
            ))
        ):<div className='empty-state'>
            <img src={require('../../assets/images/empty.png')} alt="Empty List" className='empty-image' />
            <label> Uh Oh! Your expense list is empty</label>
        </div>}
    </div>
  )
}

export default ExpenseList