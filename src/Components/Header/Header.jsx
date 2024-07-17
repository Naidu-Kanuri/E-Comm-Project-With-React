import React, { useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Header = () => {


  const navigate = useNavigate();


  const loginToken = JSON.parse(localStorage.getItem('token'));


  const logoutHandler  = () => {
    localStorage.clear();
    navigate('/');
  }

  return (
    <div className='d-flex bg-info text-white  justify-content-around align-items-center' >  
      <div>
        <h4><Link className='text-decoration-none text-white' to='/' >E-Comm Website</Link></h4>
      </div>
      <div>
        <ul className='d-flex list-unstyled align-items-center' >
          
       {loginToken && <li className='ms-3 mt-2' ><Link className='text-decoration-none text-dark'  to='/products' >Products</Link></li>}
       {loginToken && <button className='btn btn-danger ms-3' onClick={logoutHandler} >Logout</button>}
       {!loginToken && <li className='ms-3 mt-2' ><Link className='text-decoration-none text-dark'  to='/login' >Login</Link></li>}
       {!loginToken && <li className='ms-3 mt-2' ><Link className='text-decoration-none text-dark'  to='/signup' >Signup</Link></li>}
          {/* <li className='ms-3 mt-2' >Contact us</li> */}
        </ul>
      </div>
    </div>
  )
}

export default Header
