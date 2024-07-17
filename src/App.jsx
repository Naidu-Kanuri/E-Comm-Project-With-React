import React, { useState, useEffect }from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';




import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ProductInfo from './Components/ProductInfo/ProductInfo';





const App = () => {


  const API = 'https://the-techie-crud.onrender.com'


  const [products, setProducts] = useState([]);

  const [userSearch, setUserSearch] = useState('maybelline');


 


  useEffect(() => {
    const data = async () => {

      const allProducts = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${userSearch}`);
      setProducts(allProducts.data);
    }
    data();
    }, [userSearch])


  const getSearchKeyword = (userKeySearching) => {
    setUserSearch(userKeySearching);
  }

  



  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login API={API} />} />
        <Route path='/signup' element={<Signup API={API} />} />
        <Route path='/products' element={<Products getSearchKeyword={getSearchKeyword} products={products} />} />
        <Route path='/product-info/:id' element={<ProductInfo /> } />
        <Route path='*' element={<PageNotFound /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  
  )
}

export default App;
