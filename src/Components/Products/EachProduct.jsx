import React from 'react'
import './Each.css';

import { Link } from 'react-router-dom'

const EachProduct = (props) => {


    const { product } = props;
  
    const { brand, category, description, image_link, name, price, product_colors, rating,product_type, id  } = product;

  return (
    <div className='border shadow border-2 rounded text-center d-flex flex-column justify-content-around align-items-center' >
        <img className='product-image'  src={image_link} alt="pic.." />
        <hr />
        <strong className='name' >{name}</strong>
        <hr />
        <h5 className='m-3' >Type: {product_type}</h5>
        <Link to={`/product-info/${id}`} state={product} className='m-2 btn btn-outline-warning' >View More</Link>
    </div>
  )
}

export default EachProduct
