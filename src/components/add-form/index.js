import {React,useState} from 'react'
import './add-form.css'

const AddForm = () => {
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [category,setCategory]=useState();

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
  return (
    <div className='add-form'>
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
                <div>
                    <label>Category</label>
                    <i class="fi-rr-angle-down"></i>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddForm