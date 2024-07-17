import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom'


import './Login.css'
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = ({ API }) => {

  const navigate = useNavigate()

  const [login, setLogin] = useState({
    email : '',
    password: ''
  })


  useEffect(() => {


    document.title = "E-comm || Login"

  }, [])


  const loginHandler=  async (e) => {
    e.preventDefault();
    try {


      const InfoOfUser = await axios.post(`${API}/user-login`, login, { headers:{ cors: 'no-cors' } });


      if(InfoOfUser.data){
        localStorage.setItem('token', JSON.stringify(InfoOfUser.data))

        toast.success("Logged in successfully");
        navigate('/products')
      }
      
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  };

  const loginInputHandler= (e) => {

    const { name, value } = e.target;
    setLogin({
        ...login,
        [name] : value
      })

  }


  return (
    <div className='login-container' >
      <h1>Please Login</h1>
        <form className='text-center ' >
            <input onChange={loginInputHandler} name='email'  className='form-control m-3'  type="text" placeholder='Email..' />
            <input onChange={loginInputHandler} name='password'  className='form-control  m-3'  type="password" placeholder='Password..' />
            <button onClick={loginHandler} className='btn btn-outline-warning w-100  m-3' >Login</button>
            <div>
              <Link to='/signup ' className='text-decoration-none' >New? Create one.</Link>
              <Link to='/' className='ms-2 text-decoration-none' >Forgot password</Link>
            </div>
        </form>
    </div>
  )
}

export default Login
