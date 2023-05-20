import {React,useState} from 'react'
import './add-form.css'
import { categories } from '../../constants/add-expense';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/actions/expenses';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './success-modal';

const AddForm = () => {
    const cat=categories;
    const [categoryOpen,setCategoryOpen]=useState(false);
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [category,setCategory]=useState();
    const [modalOpen,setModalOpen]=useState(false);
    const dispath=useDispatch();

    const handleCategory=(category)=>{
        setCategory(category);
        setCategoryOpen(false);
    }
    const handelTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handelAmount=(e)=>{
        const val=parseFloat(e.target.value);
        if(isNaN(val)){
          setAmount("");
          return;
        } 
        setAmount(val); 
    }
    const handelSubmit=()=>{
        if(title===""||amount===""||!category){
            const notify = () => toast("Please enter valid data!");
            notify();
            return;
        }
        const data={
            title,
            amount,
            category,
            createdAt:new Date()
        }
        dispath(addExpense(data));
        setModalOpen(true);
    }

  return (
    <div className='add-form'>
        <ToastContainer
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            theme="light"
            />
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <div className="form-item">
            <label>Title</label>
            <input type="text" placeholder='Give a name to your expenditure' value={title} onChange={(e)=>handelTitle(e)} />
        </div>
        <div className="form-item">
            <label>Amount ₹</label>
            <input type="text" placeholder='Enter Amount' className="amount-input" value={amount} onChange={(e)=>handelAmount(e)} />
        </div>
        <div className="category-container-parent">
            <div className="category">
                <div className='category-dropdown' onClick={()=>setCategoryOpen(!categoryOpen)}>
                    <label>{category?category.title:'Category'}</label>
                    <i class="fi-rr-angle-down"></i>
                </div>
                {categoryOpen && (
                    <div className='category-container'>
                        {cat.map((category)=>(
                            <div className='category-item' style={{borderRight:`5px solid ${category.color}`}} key={category.id} onClick={()=>handleCategory(category)}>
                                <label>{category.title}</label>
                                <img src={category.icon} alt={category.title}/>
                            </div>
                        ))}
                   </div>
                )}
            </div>
        </div>

        <div className="form-add-button">
            <div onClick={handelSubmit}>
                <label>Add</label>
                <i class="fi-rr-paper-plane"></i>
            </div>
        </div>

    </div>
  )
}

export default AddForm