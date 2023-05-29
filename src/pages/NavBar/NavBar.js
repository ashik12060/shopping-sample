import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumpster } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';
const NavBar = () => {
    return (
        <div className='nav-container'>
           
              
              <div>
 
                <ul className='list-container'>
                    <li className='list-prior'> 
                    <FontAwesomeIcon icon={faDumpster} />
                    Alibaba</li>
                    <li><a href="#">Catagories</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Ship to: </a></li>
                    <li className='more'><a href="#">More</a></li>
                </ul>
              </div>
        </div>
    )
}

export default NavBar;