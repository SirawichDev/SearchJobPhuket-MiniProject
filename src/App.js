import React, { useState, useEffect } from 'react'
import Showjobs from './Components/Showjobs'
import ManageJob from './Components/Managejob'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Login />
      <Showjobs />
      <ManageJob />
      
      
    </div>
  )
}
export default App