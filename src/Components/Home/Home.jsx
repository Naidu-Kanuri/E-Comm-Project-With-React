import React, { useEffect } from 'react'

const Home = () => {


  const loginToken = JSON.parse(localStorage.getItem('token'));



  useEffect(() => {

    document.title = "E-comm web || Home"

  }, [loginToken])

  return (
    <div>
        <h4>Hey, {loginToken?.firstName ?  loginToken.firstName : 'Bot'} welcome back to your dashboard.!</h4>
    </div>
  )
}

export default Home
