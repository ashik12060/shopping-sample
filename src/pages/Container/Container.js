import React from 'react'
import './Container.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTents,faTruckArrowRight,faTaxi } from '@fortawesome/free-solid-svg-icons';
const Container = () => {
    return (
        <div>
            <div className='container'>
                <input className='input-container' type="search" placeholder='search' />
                <button className='button-container'>Search</button>
            </div>

            <div className='card-container'>
                <div className='card'>
                    <h4><FontAwesomeIcon icon={faTents} />Request for Quotation</h4>
                    <p>One requres, multiple quotes</p>
                </div>
                <div className='card'>
                    <h4><FontAwesomeIcon icon={faTruckArrowRight} /> Ready to Ship</h4>
                    <p>Order directly</p>
                </div>
                <div className='card'>
                    <h4><FontAwesomeIcon icon={faTaxi} />Logistics Service</h4>
                    <p>Order directly</p>
                </div>
                
            </div>
        </div>
    )
}

export default Container