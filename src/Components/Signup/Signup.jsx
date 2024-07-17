import React, { useEffect, useState } from "react";

import { Link, useNavigate }  from 'react-router-dom';

import { toast } from 'react-toastify'

import "./Signup.css";
import axios from "axios";

const Signup = ({ API }) => {

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName : '',
    email: '',
    password: '',
    mobile: '',
    address: ''
  })

  const navigate = useNavigate()


  useEffect(() => {
    document.title = "E-comm || signup";
  }, []);




  const signupHandler = async (e) => {
    try {
      e.preventDefault();
      const user = await axios.post(`${API}/user-creation`, userInfo, { headers: { cors: 'no-cors' } });


      console.log(user)
      if(user.data){
        toast.success("Successfully Signed up");
        navigate('/login');
      }

      setUserInfo({
        firstName: '',
        lastName : '',
        email: '',
        password: '',
        mobile: '',
        address: ''
      })

      
    } catch (error) {
      console.log(error);

      toast.error(error.message)
    }

  }


  const inputHandler= (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name] : value
    })

  }


  return (
    <div>

      <div className="signup-container">
        <h1>Singup here</h1>
        <form className="text-center">
          <input
            className="form-control"
            type="text"
            placeholder="First name.."
            name="firstName"
            onChange={inputHandler}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Last name.."
            name='lastName'
            onChange={inputHandler}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Email.."
            name='email'
            onChange={inputHandler}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Mobile.."
            name='mobile'
            onChange={inputHandler}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password.."
            name='password'
            onChange={inputHandler}
          />
           <input
            className="form-control"
            type="text"
            placeholder="Address.."
            name='address'
            onChange={inputHandler}
          />
          <button onClick={signupHandler} className="btn w-100 btn-outline-warning mb-3">Signup</button>
          <Link className="mt-3 text-decoration-none" to='/login' >Existing User? click here</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
