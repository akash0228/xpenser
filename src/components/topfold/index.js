import React, { useState } from 'react'
import './topfold.css'
import { NavLink } from 'react-router-dom';
const TopFold = () => {
    const [query,setQuery]=useState("");
    const handelQuery=(e)=>{
        setQuery(e.target.value);
    }
  return (
    <div className='topfold'>
        {window.location.pathname==="/"?(<div className="home-topfold">
            <div className="searchbar">
                <i class="fi fi-rr-search"></i>
                <input type="text" placeholder="Search for expenses" value={query} onChange={(e)=>handelQuery(e)}/>
            </div>
            <NavLink to='/add-expense'>
                <div className="add-button">
                    <i class="fi fi-rr-add"></i>
                    <label>Add</label>
                </div>
            </NavLink>
        </div>):(
        <div className='add-topfold'> 
            <NavLink to='/'>
                <div className='add-topfold-button'>
                    <i class="fi-rr-angle-left"></i>
                    <label>Back</label>
                </div>
            </NavLink>
            <NavLink to='/'>
                <div className='add-topfold-button'>
                    <i class="fi-rr-cross-circle"></i>
                    <label>Cancel</label>
                </div>
            </NavLink>
        </div>
        )}
    </div>
  )
}

export default TopFold