import React, { useState, useEffect } from 'react';
import EachProduct from './EachProduct';
import './Products.css'

const Products = (props) => {

  const { products, getSearchKeyword } = props;

  const [search, setSearch] = useState('')


  useEffect(()=> {
    document.title = 'E-comm || Products'
  }, [])

  const searchHandler= (e) => {
    setSearch(e.target.value)
  }


  const searchBtnhandler= () => {

    if(search === ''){
      return alert('Please enter your brands to search...')
    } else {
      getSearchKeyword(search);
      setSearch('')
    }
  }


  const productData = products.length ?  products.map((product, index) => <EachProduct key={index} product={product} />) : <div className='d-flex justify-content-center align-items-center vh-100 vw-100' ><h1>No Products found</h1></div>

  return (
    <div>
        <h4 className='text-center' >Products</h4>
        <div className='text-center'>
          <input onChange={searchHandler} className='form-control w-50 m-auto' type="text" placeholder='Search products....' />
          <button className='mt-2 btn btn-outline-dark' onClick={searchBtnhandler} >Search</button>
        </div>
        <div className='all-products' >
          {productData}
        </div>
    </div>
  )
}

export default Products
