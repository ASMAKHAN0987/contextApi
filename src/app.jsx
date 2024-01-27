import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  return (
    <>
      <UserContextProvider>
        <div className=''>
        <h1>Chai with react</h1>
        <Login/>
        <Profile/>
        </div>
      </UserContextProvider>
    </>
  )
}

export default App