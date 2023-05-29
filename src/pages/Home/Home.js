import React from 'react'
import './Home.css';
import img from '../../images/beautiful-casual-men-fashion-clothes-set.jpg';
import Products from '../Products/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug, faShirt, faPersonSnowboarding, faIndustry, faHouseChimney, faBowlRice, faGlobe } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div>
                    <h4 className='header'>My Market</h4>
                    <hr />
                    <ul className='list'>              <li className='market-list'><FontAwesomeIcon ssname="new-icon" icon={faPlug} />Consumer Electronics</li>
                        <li className='market-list'><FontAwesomeIcon icon={faShirt} />Apearel</li>
                        <li className='market-list'><FontAwesomeIcon icon={faPersonSnowboarding} />Sports</li>
                        <li className='market-list'><FontAwesomeIcon icon={faIndustry} /> Machinary</li>
                        <li className='market-list'><FontAwesomeIcon icon={faHouseChimney} />Home</li>
                        <li className='market-list'><FontAwesomeIcon icon={faBowlRice} />Beauty</li>
                        <li className='market-list'><FontAwesomeIcon icon={faGlobe} />All Catagories</li>
                    </ul>
                </div>
                <div>
                    <img className='img-container' src={img} alt="" />
                </div>
                <div className='club-container'>
                    <h2>Buyes club beniifts</h2>
                    <hr />
                    <div className='coupon-container'>
                        <h5>Us Coupon</h5>
                    </div>
                    <div className='coupon-container'>
                        <h5>Alibaba.com <br /> Fulfillment Service</h5>
                    </div>
                    <div>
                        <h4>Sign up to enjoy exiting Buyers <br />Club beniifts</h4>
                        <button className='styled-btn'>Join for free</button>
                        <br />
                        <button className='styled-btn2'>Sign in</button>
                    </div>
                </div>

            </div>
            <Products></Products>
        </div>
    )
}

export default Home