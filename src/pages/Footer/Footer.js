import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <div className='container-main'>
            <div className='footer-container'>
            <div>
                <h1>Customer service</h1>
                <div className='footer-list'>
                    <li>Helop Center</li>
                    <li>Report abuse </li>
                    <li>File a case</li>
                    <li>Get Paid</li>
                </div>
            </div>
            <div>
                <h1>About Us</h1>
                <div className='footer-list'>
                    <li>About Alibaba.com</li>
                    <li>About ALibaba Blog</li>
                    <li>About ALibaba Group</li>
                </div>
            </div>
            <div>
                <h1>Trade service</h1>
                <div className='footer-list'>
                    <li>Trade assurance</li>
                    <li>Business Identity</li>
                </div>
            </div>

        </div>

        <p>copyright@alibaba.com 2021,</p>
        </div>
    )
}

export default Footer