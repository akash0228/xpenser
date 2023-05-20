import React from 'react'
import Modal from 'react-modal'
import './success-modal.css'
import { NavLink } from 'react-router-dom';

const SuccessModal = ({modalOpen,setModalOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'#71ccca',
          borderRadius:"12px",
        },
      };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
        <div className="modal-inner">
            <label>Expenditure Added Successfully</label>
            <img src={require('../../assets/images/added-img.png')} alt="Expense Added" className='added-image' />
            <NavLink to='/'>
                <div className='take-home-button'>
                    <i class='fi-rr-home'></i>
                    Home
                </div>
            </NavLink>
        </div>
    </Modal>
  )
}

export default SuccessModal