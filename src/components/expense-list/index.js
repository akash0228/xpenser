import React,{useEffect} from 'react'
import Card from './card'
import {useSelector,useDispatch} from 'react-redux'
import './expense-list.css'
import {toast,ToastContainer} from 'react-toastify'
import { getAllExpenses } from '../../redux/actions/expenses'

const ExpenseList = () => {
    const dispatch=useDispatch();
    const expenses=useSelector(state=>state.expenses);
    const notifySuccess=()=>toast.success("Expense Deleted");

    useEffect(()=>{
        dispatch(getAllExpenses());
    },[]);

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

        {expenses.length?(
            expenses.map(item=>(
                <Card key={item._id} item={item} notifySuccess={notifySuccess}/>
            ))
        ):<div className='empty-state'>
            <img src={require('../../assets/images/empty.png')} alt="Empty List" className='empty-image' />
            <label> Uh Oh! Your expense list is empty</label>
        </div>}
    </div>
  )
}

export default ExpenseList