import React from 'react'
import './Products.css';
import img2 from '../../images/pexels-baby-concept-3169971.jpg';
import img3 from '../../images/pexels-helena-lopes-6635186.jpg';
const Products = () => {


    return (
        <div className='card-container'>
            <div className='card new-contaner'>
            
                <div className='card'>
                    <img className='img-style' src={img3} alt="" />
                    <h4>Price: $1.89</h4>
                    <p> Minimum order: 100 pieces</p>
                </div>
                <div className='card'>
                    <img className='img-style' src={img2} alt="" />
                    <h4>Price: $2.5</h4>
                    <p> Minimum order: 200 pieces</p>
                </div>
                <div className='card'>
                    <img className='img-style' src={img3} alt="" />
                    <h4>Price: $30</h4>
                    <p> Minimum order: 80 pieces</p>
                </div>
            </div>
            <div className='card new-contaner'>
                <div className='card'>
                    <img className='img-style' src={img3} alt="" />
                    <h4>Price: $1.89</h4>
                    <p> Minimum order: 100 pieces</p>
                </div>
                <div className='card'>
                    <img className='img-style' src={img2} alt="" />
                    <h4>Price: $2.5</h4>
                    <p> Minimum order: 200 pieces</p>
                </div>
                <div className='card'>
                    <img className='img-style' src={img3} alt="" />
                    <h4>Price: $30</h4>
                    <p> Minimum order: 80 pieces</p>
                </div>
            </div>
            <div className='card new-contaner'>
                <div className='card'>
                    <img className='img-style' src={img3} alt="" />
                    <h4>Price: $1.89</h4>
                    <p> Minimum order: 100 pieces</p>
                </div>
                <div className='card'>
                    <img className='img-style' src={img2} alt="" />
                    <h4>Price: $2.5</h4>
                    <p> Minimum order: 200 pieces</p>
                </div>
                <div className='card'>
                    <img className='img-style' src={img3} alt="" />
                    <h4>Price: $30</h4>
                    <p> Minimum order: 80 pieces</p>
                </div>
            </div>
            


        </div>



    )
}

export default Products;