import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';


import './Product.css';

const ProductInfo = () => {


    const [count, setCount] = useState(1)



    const { state } = useLocation();


    const { brand, category, description, image_link, name, price, product_colors, rating, product_type, id } = state;


    return (
        <div className='text-center product-container' >
            <div>
                <img className='product-info-image' src={image_link} alt="product-image" />
                <h4>Product name : {name}</h4>
                <h6>Type : {product_type}</h6>
            </div>
            <hr />
            <div className='d-flex align-items-center justify-content-around m-2' >
                <div>
                    <h5>Brand: {brand}</h5>
                    <h5>Price: ${Math.round(price)}</h5>
                </div>
                <div>
                    <h6>QTY</h6>
                    <div className='d-flex align-items-center' >

                        <button onClick={() => {
                            if(count ===1){
                                return;
                            }
                            setCount(prevState => prevState - 1)
                        }} className='me-2  btn btn-dark' >-</button>
                        <h6>{count}</h6>
                        <button onClick={() => setCount(prevState => prevState + 1)} className='ms-2 btn btn-dark' >+</button>
                    </div>

                </div>
                <div>
                    <h5>Category: {category ? category : 'No'}</h5>
                    <h5>Rating: {rating ? rating : 'No'}</h5>
                </div>
                <div>
                    <button className='btn  btn-warning' >Buy Now</button>
                    <button className='btn ms-3 btn-info' >Add to Cart</button>
                </div>
            </div>
            <hr />
            {product_colors.length ? <h6>Colors</h6> : ''}
            <div className='colors-container'>
                {product_colors.map((color) => {
                    return <div style={{ backgroundColor: `${color.hex_value}` }} className='colors' ></div>
                }
                )}
            </div>
            <div>
                <p className='about-product' >About: {description}</p>
            </div>
        </div>
    )
}

export default ProductInfo;
