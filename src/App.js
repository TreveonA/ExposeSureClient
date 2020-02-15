import React, {useEffect, useState} from 'react';

import Auth  from "./Auth/Auth"
import AdIndex from './Opportunities/Advertisement/AdIndex';
import Sitebar from './Navbar/Navbar';


function App() {
  const [sessionToken, setSessionToken] = useState('')
  
  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const clearToken = () => {
    localStorage.clear()
    setSessionToken('')
  }
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
    console.log(newToken)
  }

  const protectedViews = () => {
    return (localStorage.getItem('token') === sessionToken ? <AdIndex token={sessionToken} /> :
    <Auth updateToken={updateToken} /> )
  }

  return (
    <div className="App">
      <h1>Welcome to ExposeSure</h1>
      <p><b>Pick your place in the market and spread the word</b></p>
      <Sitebar clickLogout={clearToken}/>
      {protectedViews()}
      
      
    </div>
  );
}

export default App;
